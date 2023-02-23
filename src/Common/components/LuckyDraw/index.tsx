import { Dialog, Toast } from 'antd-mobile'
import classNames from 'classnames'
import { useState } from 'react'
import {
  backgroundUrl,
  playButtonImgSrc,
  pointImgSrc,
  prizeList,
} from './constants'
import './index.css'

const LuckyDraw = () => {
  const [startRotateDeg, setStartRotateDeg] = useState(0)
  const [isRotate, setIsRotate] = useState(false)

  const active = true

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
    if (isRotate) {
      Toast.show({
        content: '我正在转啦～不要急嘛',
      })
      return
    }
    setIsRotate(true)

    // 获取目标角度
    const response = getTargetDegree()
    if (response?.targetDegree !== undefined) {

      // 先给目标角度加上一个360，来保证转盘会顺时针转动
      let rotateDeg = response?.targetDegree + 360

      // 和上次记录的角度作比较，只要小于它，就不断加上360
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

    setTimeout(() => {
      if (!response?.blankPrize) {
        Dialog.show({
          image:
            'http://marketingmng-public.oss-cn-hzfinance.aliyuncs.com/d58d7b95-f423-4191-9d2b-1565dedc3480_369494774257095_img_congras_LD.png?Expires=4824428333&OSSAccessKeyId=LTAI5tJVdEYimQ7awwzsGB5A&Signature=wNrZi8cTE6GhBCapCd0FBtsXPZE%3D',
          title: 'Congratulations',
          content: 'You have win ' + response?.name + '.',
          actions: [{ key: 'online', text: 'Got it!' }],
          closeOnAction: true,
        })
      } else {
        Toast.show({
          content: "Sorry~ you didn't win the prize. Please try it again.",
        })
      }
      setIsRotate(false)
    }, 6500)
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
