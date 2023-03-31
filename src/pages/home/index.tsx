import Bottom from 'src/components/Bottom'
import Navigation from 'src/components/Navigation'
import AntProduct from 'src/modules/home/AntProduct'
import HomeRecentProject from 'src/modules/home/HomeRecentProject'
import HomeTopBar from 'src/modules/home/HomeTopBar'

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeTopBar />
      <HomeRecentProject />
      <AntProduct />
      {/* <HomeOtherProject /> */}
      <Bottom />
    </div>
  )
}

export default Home
