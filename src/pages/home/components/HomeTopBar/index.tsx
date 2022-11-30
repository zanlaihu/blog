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
        <div className='home-welcome-title-ch'>欢迎来到我的小站</div>
        <div className='home-welcome-title-eg'>Welcome to my website</div>
      </div>
    </div>
  )
}

export default HomeTopBar
