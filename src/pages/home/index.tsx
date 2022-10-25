import './index.css'
import { MainItems } from './components/MainItems'
import Bottom from './components/Bottom'
import RotateCircle from '../../Common/components/RotateCircle'
import { Navigation } from '../../Common/components/Navigation'

export const Home = () => {
  return (
    <div>
      {/* <News /> */}
      <Navigation />
      <div className='top-bar'>
        <div className='home-welcome-title-ch'>欢迎来到我的站点</div>
        <div className='title-content'>Welcome to my website</div>
      </div>
      <RotateCircle />
      <MainItems />
      <Bottom />
    </div>
  )
}
