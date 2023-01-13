import './index.css'
import Bottom from '../../components/Bottom'
import HomeRecentProject from './components/HomeRecentProject'
import HomeTopBar from './components/HomeTopBar'
import Navigation from '../../components/Navigation'
import { useEffect } from 'react'
import HomeOtherProject from './components/HomeOtherProject'

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
