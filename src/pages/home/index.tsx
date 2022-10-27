import './index.css'
import { MainItems } from './components/MainItems'
import Bottom from '../../components/Bottom'
import RotateCircle from '../../Common/components/RotateWords'
import { Navigation } from '../../components/Navigation'
import { News } from '../../components/News'
import HomeMe from './components/HomeMe'
import HomeRecentProject from './components/HomeRecentProject'

const Home = () => {
  return (
    <div className='home-content'>
      <Navigation />
      <News />
      <div className='rotate-content'>
        <div className='rotate-middle-content'>
          <RotateCircle />
        </div>
      </div>
      <div className='home-top-bar'>
        <div className='home-welcome-title-ch'>
          <div className='home-ch-underline'>欢迎</div>来到我的小站
        </div>
        <div className='home-welcome-title-eg'>
          Welcome to my&nbsp;
          <div className='home-ch-underline'>tiny website</div>
        </div>
      </div>
      <HomeMe />
      <HomeRecentProject />
      <Bottom />
    </div>
  )
}

export default Home
