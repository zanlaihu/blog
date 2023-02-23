import './index.css'
import Bottom from '../../components/Bottom'
import Navigation from '../../components/Navigation'
import { useEffect } from 'react'
import HomeOtherProject from '../../modules/home/HomeOtherProject'
import HomeRecentProject from '../../modules/home/HomeRecentProject'
import HomeTopBar from '../../modules/home/HomeTopBar'

const Home = () => {
  useEffect(() => {
    document.body.classList.toggle('lock-scroll')
  }, [])

  return (
    <div className='home-content'>
      {/* <News /> */}
      <Navigation />
      <HomeTopBar />
      <HomeRecentProject />
      <HomeOtherProject />
      {/* <HomeNote /> */}
      {/* <HomeMe /> */}
      <Bottom />
    </div>
  )
}

export default Home
