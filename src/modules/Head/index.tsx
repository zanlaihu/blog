import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import github from 'src/assets/img/github.svg'
import logo from 'src/assets/img/logo.svg'
import styles from './styles.module.scss'

const navs = [
  { title: '主页', id: 1 },
  { title: '博客', id: 2 },
  { title: '关于本站', id: 3 },
  { title: 'Github', id: 4 },
]

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
        </div>
        {navs.map(nav => (
          <div key={nav.id} className={styles.nav}>
            {nav.title}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Navigation
