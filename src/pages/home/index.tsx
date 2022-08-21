import { Link } from 'react-router-dom'
import { MainContent } from './components/MainContent'
import { PAGE_URL } from '../../constants/page-url/router-url'
import './index.css'
import { News } from './components/News'
import { Navigation } from './components/Navigation'
import { MainItems } from './components/MainItems'
import { Bottom } from './components/Bottom'

export const Home = () => {
  return (
    <div>
      <News />
      <Navigation />
      <MainContent />
      <MainItems />
      <Bottom />
    </div>
  )
}
