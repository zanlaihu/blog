import './index.css'
import { Navigation } from '../../Common/components/Navigation'
import { News } from '../../Common/components/News'
import { MainContent } from './components/MainContent'
import { MainItems } from './components/MainItems'
import Bottom from './components/Bottom'

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
