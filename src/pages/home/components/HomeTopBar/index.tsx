import RotateWords from '../../../../Common/components/RotateWords'
import './index.css'

const HomeTopBar = () => {
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
          <div className='home-welcome-title-eg'>
            Welcome to my tiny website
          </div>
          <div className='home-welcome-desc'>
            我在这个网站花了点小心思，用来更直观地展示个人项目、博客。目前还是以展示个人信息为主，并把最近做好的一个项目：大转盘直接放在了上面。后期项目介绍页面做好之后会更新上来。
          </div>
          <div className='home-welcome-contact'>Contact me</div>
        </div>
      </div>
    </div>
  )
}

export default HomeTopBar
