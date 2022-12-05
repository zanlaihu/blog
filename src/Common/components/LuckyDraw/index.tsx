import classNames from 'classnames'
import { useState } from 'react'
import './index.css'

const LuckyDraw = () => {
  const backgroundUrl =
    'https://cdn.marmot-cloud.com/storage/2022/9/8/a0f11c0d-b57b-478e-93d5-53cd355cc1ab.svg'
  const pointImgSrc =
    'https://cdn.marmot-cloud.com/storage/2022/9/8/813f75f7-ad9f-4d44-82e0-9a931c68a16d.svg'
  const playButtonImgSrc =
    'https://cdn.marmot-cloud.com/storage/2022/9/8/4da54754-cdcb-4db3-a392-3e4399278999.svg'
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
      'name': 'muyu coupon test 11181106',
      'prizeId': 'PRIZE20221118000000684794',
      'prizeSequence': 1,
    },
    {
      'blankPrize': false,
      'description': '',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/7e892b0c-550c-4a64-a348-4f1997e6ffca_369435293165464_prize05.png?Expires=4824428273&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=ZJG9R4INpfG3rM8SUHi%2FL9vG55M%3D',
      'name': 'cashback display 11181451',
      'prizeId': 'PRIZE20221118000000684805',
      'prizeSequence': 2,
    },
    {
      'blankPrize': false,
      'description': '',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/f9b0f86e-e8ff-43b3-a451-b866ff09edbe_369437743703996_prize04png.png?Expires=4824428276&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=fXly%2FLLUx75YnhDYibXnmwuXbq8%3D',
      'name': 'cert display 1181453',
      'prizeId': 'PRIZE20221118000000684807',
      'prizeSequence': 3,
    },
    {
      'blankPrize': false,
      'description':
        'test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc test desc ',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/aad82c6b-3990-4288-91a5-61a36b9028a1_369429697530958_prize03.png?Expires=4824428268&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=UstMEv4ASgs80QHJgfrkVeHDYbU%3D',
      'name': 'muyu coupon test 11181106',
      'prizeId': 'PRIZE20221118000000684794',
      'prizeSequence': 4,
    },
    {
      'blankPrize': false,
      'description': '',
      'imgSrc':
        'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/7e892b0c-550c-4a64-a348-4f1997e6ffca_369435293165464_prize05.png?Expires=4824428273&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=ZJG9R4INpfG3rM8SUHi%2FL9vG55M%3D',
      'name': 'cashback display 11181451',
      'prizeId': 'PRIZE20221118000000684805',
      'prizeSequence': 5,
    },
  ]

  const [startRotateDeg, setStartRotateDeg] = useState(0)

  function getRandomPrizeIndex() {
    return Math.floor(Math.random() * 6)
  }

  async function getTargetDegree() {
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

  async function handleClick() {
    if (!active) {
      return
    }

    const response = await getTargetDegree()
    if (response?.targetDegree) {
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

    // if (response?.blankPrize) {
    //   setTimeout(() => {
    //     Dialog.show({
    //       title: 'Congratulations',
    //       content: 'You have win ' + response?.name + '.',
    //       cancelText: 'Cancel',
    //       confirmText: 'My Reward',
    //       topImg: (
    //         <img
    //           src={applyResultConfig?.winBackgroundImageSrc}
    //           className={style.winBack}
    //         ></img>
    //       ),
    //       direction: 'row',
    //       onConfirm: () => {
    //         navigate('/lucky' + RouterPaths.rewardsList);
    //       },
    //     });
    //   }, 6500);
    // } else {
    //   setTimeout(() => {
    //     Toast.show({
    //       label: "Sorry~ you didn't win the prize. Please try it again.",
    //       duration: 1000,
    //     });
    //   }, 6500);
    // }
  }

  return (
    <div className='lucky-content'>
      <div className='lucky-back-content' id='turntable'>
        <img src={backgroundUrl} className='lucky-back-img'></img>
        <ul>
          {prizeList &&
            prizeList.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item?.imgSrc} className='lucky-prize-list'></img>
                </li>
              )
            })}
        </ul>
      </div>
      <div
        className={classNames('lucky-point-wrap', `${!active && 'lucky-grey'}`)}
      >
        <img src={pointImgSrc} className='lucky-point'></img>
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
        ></img>
      </div>
    </div>
  )
}

export default LuckyDraw
