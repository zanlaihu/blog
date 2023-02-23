import { FC } from 'react'
import Bottom from '../../../components/Bottom'
import Navigation from '../../../components/Navigation'
import News from '../../../components/News'
import TitleTopBar from '../../../components/TitleTopBar'
import './index.css'
import ProjectList from './component/ProjectList'
import { PAGE_URL } from '../../../constants/router-url'

const projectHome: FC = () => {
  return (
    <div className='project-content'>
      <Navigation />
      <News />
      <TitleTopBar title="Projects" back='home'backUrl={PAGE_URL.HOME} desc="个人项目和企业项目"/>
      <ProjectList />
      <Bottom />
    </div>
  )
}

export default projectHome
