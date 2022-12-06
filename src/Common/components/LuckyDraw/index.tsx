import { Dialog, Toast } from 'antd-mobile'
import classNames from 'classnames'
import { useState } from 'react'
import './index.css'

const LuckyDraw = () => {
  const backgroundUrl =
    'https://cdn.marmot-cloud.com/storage/2022/9/8/a0f11c0d-b57b-478e-93d5-53cd355cc1ab.svg'
  const pointImgSrc =
    'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/4222822f-1431-40f5-9d5c-ac17a41a9c0a_369453199436936_img_wheelpointer.png?Expires=4824428291&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=RysqfaednKjABTQ56KnioGFCOcI%3D'
  const playButtonImgSrc =
    'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/5c417211-3ffc-4700-8acb-c682d9d6f49e_369455728176832_img_wheelbutton.png?Expires=4824428294&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=sY0rSqRPLzFZlQFooGGZKwEeYCM%3D'
  const active = true
  const prizeList: any[] = [
    {
      'blankPrize': true,
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/5a33e41e-1062-4207-92b8-2115b1955cb0_369424024324392_prize01.png?Expires=4824428262&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=N4ovj70SuWiVvL5I64vPGEDxsS0%3D',
      'prizeId': 'BLANK_PRIZE',
      'prizeSequence': 0,
    },
    {
      'blankPrize': false,
      'description':
        'test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc ',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/aad82c6b-3990-4288-91a5-61a36b9028a1_369429697530958_prize03.png?Expires=4824428268&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=UstMEv4ASgs80QHJgfrkVeHDYbU%3D',
      'name': '50% OFF coupon',
      'prizeId': 'PRIZE20221118000000684794',
      'prizeSequence': 1,
    },
    {
      'blankPrize': false,
      'description': '',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/7e892b0c-550c-4a64-a348-4f1997e6ffca_369435293165464_prize05.png?Expires=4824428273&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=ZJG9R4INpfG3rM8SUHi%2FL9vG55M%3D',
      'name': '$500 Cashback',
      'prizeId': 'PRIZE20221118000000684805',
      'prizeSequence': 2,
    },
    {
      'blankPrize': false,
      'description': '',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/f9b0f86e-e8ff-43b3-a451-b866ff09edbe_369437743703996_prize04png.png?Expires=4824428276&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=fXly%2FLLUx75YnhDYibXnmwuXbq8%3D',
      'name': 'Certificate',
      'prizeId': 'PRIZE20221118000000684807',
      'prizeSequence': 3,
    },
    {
      'blankPrize': false,
      'description':
        'test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc ',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/aad82c6b-3990-4288-91a5-61a36b9028a1_369429697530958_prize03.png?Expires=4824428268&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=UstMEv4ASgs80QHJgfrkVeHDYbU%3D',
      'name': '50% OFF coupon',
      'prizeId': 'PRIZE20221118000000684794',
      'prizeSequence': 4,
    },
    {
      'blankPrize': false,
      'description': '',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/7e892b0c-550c-4a64-a348-4f1997e6ffca_369435293165464_prize05.png?Expires=4824428273&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=ZJG9R4INpfG3rM8SUHi%2FL9vG55M%3D',
      'name': '$500 Cashback',
      'prizeId': 'PRIZE20221118000000684805',
      'prizeSequence': 5,
    },
  ]

  const [startRotateDeg, setStartRotateDeg] = useState(0)

  function getRandomPrizeIndex() {
    return Math.floor(Math.random() * 6)
  }

  function getTargetDegree() {
    let blankPrize = false
    let name = ''

    // const prizeIndex = 1
    const prizeIndex = getRandomPrizeIndex()
    const Denominator = prizeList.length
    let Numerator = 0
    for (let i = 0; i < prizeList.length + 1; i++) {
      if (prizeIndex === prizeList[i].prizeSequence) {
        Numerator = i
        blankPrize = prizeList[i].blankPrize
        name = prizeList[i].name
        break
      }
    }

    const targetDegree = (-360 / Denominator) * Numerator

    return { targetDegree, blankPrize, name }
  }

  function handleClick() {
    if (!active) {
      return
    }

    const response = getTargetDegree()
    if (response?.targetDegree !== undefined) {
      // let rotateDeg = 0
      // // 递归计算下次要转到的度数
      // let i = 0
      // const _fn = (n = 0) => {
      //   if (response?.targetDegree + 360 * n > startRotateDeg) {
      //     rotateDeg = response?.targetDegree + 360 * n
      //   } else {
      //     i++
      //     _fn(i)
      //   }
      // }
      // _fn()
      let rotateDeg = response?.targetDegree + 360
      while (rotateDeg <= startRotateDeg) {
        rotateDeg = rotateDeg + 360
      }

      // 获取转盘实例
      const ele = document.getElementById('turntable') as HTMLElement
      // 增加旋转动画
      ele.style.transition = 'all 6500ms'
      ele.style.transform = `rotate(${rotateDeg + 360 * 10}deg)` // 乘以10是为了转盘转动的效果

      setStartRotateDeg(rotateDeg + 360 * 10) // 记录上一次旋转到的角度
    }

    if (!response?.blankPrize) {
      setTimeout(() => {
        Dialog.show({
          image:
            'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/d58d7b95-f423-4191-9d2b-1565dedc3480_369494774257095_img_congras_LD.png?Expires=4824428333&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=wNrZi8cTE6GhBCapCd0FBtsXPZE%3D',
          title: 'Congratulations',
          content: 'You have win ' + response?.name + '.',
          actions: [{ key: 'online', text: 'Got it!' }],
          closeOnAction: true,
        })
      }, 6500)
    } else {
      setTimeout(() => {
        Toast.show({
          content: "Sorry~ you didn't win the prize. Please try it again.",
          afterClose: () => {
            console.log('after')
          },
        })
      }, 6500)
    }
  }

  return (
    <div className='lucky-content'>
      <div className='lucky-back-content' id='turntable'>
        <img
          src={backgroundUrl}
          className='lucky-back-img'
          alt='background'
        ></img>
        <ul>
          {prizeList &&
            prizeList.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    src={item?.imgSrc}
                    className='lucky-prize-list'
                    alt='prize list'
                  ></img>
                </li>
              )
            })}
        </ul>
      </div>
      <div
        className={classNames('lucky-point-wrap', `${!active && 'lucky-grey'}`)}
      >
        <img src={pointImgSrc} className='lucky-point' alt='point button'></img>
      </div>
      <div
        className={classNames('lucky-play-wrap', `${!active && 'lucky-grey'}`)}
      >
        <img
          src={playButtonImgSrc}
          className='lucky-play'
          onClick={() => {
            handleClick()
          }}
          alt='play button'
        ></img>
      </div>
    </div>
  )
}

export default LuckyDraw
