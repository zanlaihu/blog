import RotateWords from '../../../../Common/components/RotateWords'
import './index.css'

const HomeTopBar = () => {
  function scrollToBottom() {
    const scrollingElement = document.scrollingElement || document.body
    // scrollingElement.scrollTop = scrollingElement.scrollHeight
    window.scrollTo({ top: scrollingElement.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className='home-top-content'>
      <div className='rotate-content'>
        <div className='rotate-middle-content'>
          <RotateWords />
        </div>
      </div>
      <div className='home-top-bar'>
        <div className='home-top-text-content'>
          <div className='home-welcome-title-ch'>欢迎来到我的小站</div>
          <div className='home-welcome-desc'>
            我用这个网站来更直观地展示项目和文章。近期做好的比较有特色的项目会放在首页。
          </div>
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

export default HomeTopBar
