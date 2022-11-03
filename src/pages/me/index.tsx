import Bottom from '../../components/Bottom'
import Navigation from '../../components/Navigation'
import News from '../../components/News'
import './index.css'
import MeEdu from './MeEdu'
import MePhoto from './MePhoto'

const Me = () => {
  return (
    <div className='me-content'>
      <Navigation />
      <News />
      <MePhoto />
      <MeEdu />
      <Bottom />
    </div>
  )
}

export default Me
