import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hu from '../Logo'
import styles from './styles.module.scss'

const Navigation = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  // 移动端下拉导航时，阻止背景滚动
  // function disableScroll() {
  //   const TopScroll = window.pageYOffset || document.documentElement.scrollTop
  //   const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft

  //   window.onscroll = function () {
  //     window.scrollTo(LeftScroll, TopScroll)
  //   }
  // }

  // function enableScroll() {
  //   window.onscroll = function () {}
  // }

  // useEffect(() => {
  //   if (show) {
  //     disableScroll()
  //   } else {
  //     enableScroll()
  //   }
  // }, [show])

  return (
    <div className={styles.content}>
      <div className={styles.middleContent}>
        <Hu />
      </div>
    </div>
  )
}

export default Navigation
