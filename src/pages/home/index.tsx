import './index.css'
import { Navigation } from '../../Common/components/Navigation'
import { News } from '../../Common/components/News'
import { MainContent } from './components/MainContent'
import { MainItems } from './components/MainItems'
import Bottom from './components/Bottom'
import RotateCircle from '../../Common/components/RotateCircle'

export const Home = () => {
  return (
    <div>
      <News />
      <Navigation />
      {/* <MainContent /> */}
      <div className='top-bar'>
        <div className='title-content'>欢迎来到我的站点</div>
        <div className='title-content'>Welcome to my website</div>
      </div>
      <RotateCircle />
      <MainItems />
      <Bottom />
    </div>
  )
}
