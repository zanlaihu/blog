import './index.css'
import Bottom from '../../components/Bottom'
import HomeMe from './components/HomeMe'
import HomeRecentProject from './components/HomeRecentProject'
import HomeTopBar from './components/HomeTopBar'
import HomeNote from './components/HomeNote'
import Navigation from '../../components/Navigation'
import News from '../../components/News'

const Home = () => {
  return (
    <div className='home-content'>
      <News />
      <Navigation />
      <HomeTopBar />
      <HomeMe />
      <HomeRecentProject />
      <HomeNote />
      <Bottom />
    </div>
  )
}

export default Home
