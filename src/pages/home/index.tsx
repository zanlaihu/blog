import Bottom from 'src/components/Bottom'
import Navigation from 'src/components/Navigation'
import HomeRecentProject from 'src/modules/home/HomeRecentProject'
import HomeTopBar from 'src/modules/home/HomeTopBar'
import HomeOtherProject from 'src/modules/home/Projects'


const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeTopBar />
      <HomeRecentProject />
      <HomeOtherProject />
      <Bottom />
    </div>
  )
}

export default Home
