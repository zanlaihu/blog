import Bottom from '../../components/Bottom'
import Navigation from '../../components/Navigation'
import News from '../../components/News'
import HomeNote from '../home/components/HomeNote'
import './index.css'

const Note = () => {
  return (
    <div className='note-content'>
      <Navigation />
      <News />
      <HomeNote />
      <Bottom />
    </div>
  )
}

export default Note
