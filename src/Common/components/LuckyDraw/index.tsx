import classNames from 'classnames'
import { useState } from 'react'
import './index.css'

const LuckyDraw = () => {
  const backgroundUrl = 'https://cdn.marmot-cloud.com/storage/2022/9/8/a0f11c0d-b57b-478e-93d5-53cd355cc1ab.svg'
  const pointImgSrc = 'https://cdn.marmot-cloud.com/storage/2022/9/8/813f75f7-ad9f-4d44-82e0-9a931c68a16d.svg'
  const playButtonImgSrc = 'https://cdn.marmot-cloud.com/storage/2022/9/8/4da54754-cdcb-4db3-a392-3e4399278999.svg'
  const active = true
  const prizeList: any[] = [
    {
      'prizeSequence': 0,
      'imgSrc':
        'https://cdn.marmot-cloud.com/storage/2022/9/29/8e1aa1f6-a4b9-4c9d-a955-fdb70411163c.png',
      'name': '$15 cashback',
      'description': 'This is a default description.',
      'blankPrize': true,
    },
    {
      'prizeSequence': 1,
      'imgSrc':
        'https://cdn.marmot-cloud.com/storage/2022/9/29/65dbb2f1-d6b0-4d32-bfbb-e39945e69c97.png',
      'name': '$20 coupon',
      'description': 'This is a default description.',
      'blankPrize': true,
    },
    {
      'prizeSequence': 2,
      'imgSrc':
        'https://cdn.marmot-cloud.com/storage/2022/9/29/160192f9-d10a-4c76-a94f-fc0ae94b1602.png',
      'name': '$15 voucher',
      'description': 'This is a default description.',
      'blankPrize': true,
    },
    {
      'prizeSequence': 3,
      'imgSrc':
        'https://cdn.marmot-cloud.com/storage/2022/9/29/5a63f914-a21e-442d-9774-00abf97f979a.png',
      'name': '$20 discount',
      'description': 'This is a default description.',
      'blankPrize': true,
    },
    {
      'prizeSequence': 4,
      'imgSrc':
        'https://cdn.marmot-cloud.com/storage/2022/9/29/ca0dfda6-915f-4679-87b8-d88cd24911c8.png',
      'name': '$10 coupon',
      'description': 'This is a default description.',
      'blankPrize': true,
    },
    {
      'prizeSequence': 5,
      'imgSrc':
        'https://cdn.marmot-cloud.com/storage/2022/9/29/7f6459ee-deef-43e2-9924-97546a10c8bf.png',
      'name': '',
      'description': 'This is a default description.',
      'blankPrize': false,
    },
  ]

  const [startRotateDeg, setStartRotateDeg] = useState(0)

  async function getTargetDegree() {
    let blankPrize = false
    let name = ''

    const prizeIndex = 1
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
      let rotateDeg = response?.targetDegree + 360;
      while (rotateDeg <= startRotateDeg) {
        rotateDeg = rotateDeg + 360;
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
