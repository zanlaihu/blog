import Bottom from '../../components/Bottom'
import Navigation from '../../components/Navigation'
import News from '../../components/News'
import AboutDesign from './components/AboutDesign'
import './index.css'

const About = () => {
  return (
    <div className='about-content'>
      <News />
      <Navigation />
      {/* <AboutInfo /> */}
      <AboutDesign />
      <Bottom />
    </div>
  )
}

export default About
