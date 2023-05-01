import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import github from 'src/assets/img/github.svg'
import logo from 'src/assets/img/logo.svg'
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
    <section className={styles.content}>
      <div className={styles.innerContent}>
        <div className={styles.logoContent}>
          <img src={logo} className={styles.logo} />
          <div className={styles.title}> Zanlai</div>
        </div>
        <div className={styles.navContent}>
          <div className={styles.nav}>Study Notes & Documentations</div>
          <div className={styles.nav}>Projects</div>
          <div className={styles.nav}>Contact</div>
          <div className={styles.col}></div>
          <div className={styles.iconContent}>
            <a
              className={styles.a}
              href='https://github.com/vitejs/vite'
              aria-label='github'
              target='_blank'
              rel='noopener'
            >
              <img src={github} className={styles.svg} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navigation
