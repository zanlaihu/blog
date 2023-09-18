import Bottom from 'src/components/Bottom'
import Head from 'src/modules/Head'
import BOProduct from 'src/modules/BOProduct'
import HomeRecentProject from 'src/modules/HomeRecentProject'
import PortalProduct from 'src/modules/PortalProduct'
import TopBar from 'src/modules/TopBar'
import WalletProduct from 'src/modules/WalletProduct'

const Home = () => {
  return (
    <div>
      <Head />
      <TopBar />
      <HomeRecentProject />
      <WalletProduct />
      <BOProduct />
      <PortalProduct />
      <Bottom />
    </div>
  )
}

export default Home
