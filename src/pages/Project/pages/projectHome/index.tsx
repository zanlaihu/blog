import { FC } from 'react'
import Bottom from '../../../../components/Bottom'
import Navigation from '../../../../components/Navigation'
import News from '../../../../components/News'
import TitleTopBar from '../../component/TitleTopBar'
import HomeRecentProject from '../../../home/components/HomeRecentProject'
import './index.css'
import ProjectList from './component/ProjectList'

const projectHome: FC = () => {
  return (
    <div className='project-content'>
      <Navigation />
      <News />
      <TitleTopBar title="Projects"/>
      <ProjectList />
      <Bottom />
    </div>
  )
}

export default projectHome
