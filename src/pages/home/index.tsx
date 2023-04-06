import Bottom from 'src/components/Bottom'
import Head from 'src/components/Head'
import BOProduct from 'src/modules/home/BOProduct'
import HomeRecentProject from 'src/modules/home/HomeRecentProject'
import PortalProduct from 'src/modules/home/PortalProduct'
import HomeTopBar from 'src/modules/home/TopBar'
import WalletProduct from 'src/modules/home/WalletProduct'

const Home = () => {
  return (
    <div>
      <Head />
      <HomeTopBar />
      <HomeRecentProject />
      <WalletProduct />
      <BOProduct />
      <PortalProduct />
      <Bottom />
    </div>
  )
}

export default Home
