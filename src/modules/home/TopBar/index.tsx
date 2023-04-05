import RotateWords from '../../../components/RotateWords'
import './index.css'
import styles from './styles.module.scss'

const TopBar = () => {
  function scrollToBottom() {
    const scrollingElement = document.scrollingElement || document.body
    // scrollingElement.scrollTop = scrollingElement.scrollHeight
    window.scrollTo({ top: scrollingElement.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className={styles.content}>
      <div className='rotate-content'>
        <div className='rotate-middle-content'>
          <RotateWords />
        </div>
      </div>
      <div className='home-top-bar'>
        <div className='home-top-text-content'>
          <div className={styles.title}>欢迎来到我的小站</div>
          <div className={styles.label}>我用这个网站来更直观地展示项目经历</div>
          <div className='home-welcome-contact-content'>
            <div
              className='home-welcome-contact'
              onClick={() => {
                scrollToBottom()
              }}
            >
              Contact me
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
