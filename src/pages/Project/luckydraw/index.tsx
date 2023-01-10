
import Bottom from '../../../components/Bottom'
import Navigation from '../../../components/Navigation'
import News from '../../../components/News'
import ProjectContent from '../../../components/ProjectContent'
import TitleTopBar from '../../../components/TitleTopBar'
import { PAGE_URL } from '../../../constants/router-url'
import ProjectList from '../projectHome/component/ProjectList'
import LuckyContent from './LukcyContent'

const ProjectLuckyDraw = () => {
  return (
    <div className='project-content'>
      <Navigation />
      <News />
      <TitleTopBar
        title='大转盘 Lucky Draw'
        back='projects'
        backUrl={PAGE_URL.PROJECT}
      />
      <LuckyContent />
      <Bottom />
    </div>
  )
}

export default ProjectLuckyDraw
