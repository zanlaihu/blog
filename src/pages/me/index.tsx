import Bottom from '../../components/Bottom'
import Navigation from '../../components/Navigation'
import News from '../../components/News'
import MePhoto from './components/MePhoto'
import MeProject from './components/MeProject'
import './index.css'


const Me = () => {
  return (
    <div className='me-content'>
      <Navigation />
      <News />
      <MePhoto />
      {/* <MeInfo /> */}
      {/* <MeProject /> */}
      <Bottom />
    </div>
  )
}

export default Me
