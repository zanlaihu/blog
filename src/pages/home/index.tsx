import Bottom from 'src/components/Bottom'
import Navigation from 'src/components/Navigation'
import HomeRecentProject from 'src/modules/home/HomeRecentProject'
import HomeTopBar from 'src/modules/home/HomeTopBar'
import HomeOtherProject from 'src/modules/home/Projects'
import './index.scss'

const Home = () => {
  return (
    <div className='home-content'>
      <Navigation />
      <HomeTopBar />
      <HomeRecentProject />
      <HomeOtherProject />
      <Bottom />
    </div>
  )
}

export default Home
