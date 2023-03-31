import Bottom from 'src/components/Bottom'
import Navigation from 'src/components/Navigation'
import HomeRecentProject from 'src/modules/home/HomeRecentProject'
import HomeTopBar from 'src/modules/home/HomeTopBar'
import ProductWallet from 'src/modules/home/ProductWallet'
import HomeOtherProject from 'src/modules/home/Projects'


const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeTopBar />
      <HomeRecentProject />
      <ProductWallet />
      {/* <HomeOtherProject /> */}
      <Bottom />
    </div>
  )
}

export default Home
