import { FC } from 'react'
import Bottom from '../../../../components/Bottom'
import Navigation from '../../../../components/Navigation'
import News from '../../../../components/News'
import HomeRecentProject from '../../../home/components/HomeRecentProject'
import './index.css'

const projectHome: FC = () => {
  return (
    <div className='project-content'>
      <Navigation />
      <News />
      <HomeRecentProject />
      <Bottom />
    </div>
  )
}

export default projectHome
