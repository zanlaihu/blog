import Bottom from '../../components/Bottom'
import Navigation from '../../components/Navigation'
import News from '../../components/News'
import HomeRecentProject from '../home/components/HomeRecentProject'
import './index.css'

const Project = () => {
  return (
    <div className='project-content'>
      <Navigation />
      <News />
      <HomeRecentProject />
      <Bottom />
    </div>
  )
}

export default Project
