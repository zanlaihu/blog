import Bottom from "../../components/Bottom"
import Navigation from "../../components/Navigation"
import News from "../../components/News"
import './index.css'


const About = () => {
  return (
    <div className="about-content">
      <News />
      <Navigation />
      <Bottom />
    </div>
  )
}

export default About