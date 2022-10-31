import './index.css'
import Bottom from '../../components/Bottom'
import RotateCircle from '../../Common/components/RotateWords'
import { Navigation } from '../../components/Navigation'
import { News } from '../../components/News'
import HomeMe from './components/HomeMe'
import HomeRecentProject from './components/HomeRecentProject'
import HomeTopBar from './components/HomeTopBar'

const Home = () => {
  return (
    <div className='home-content'>
      <News />
      <Navigation />
      <HomeTopBar />
      <HomeMe />
      <HomeRecentProject />
      <Bottom />
    </div>
  )
}

export default Home
