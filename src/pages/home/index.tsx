import './index.css'
import { Navigation } from '../../Common/components/Navigation'
import { Bottom } from './components/Bottom'
import { MainContent } from './components/MainContent'
import { MainItems } from './components/MainItems'
import { News } from '../../Common/components/News'

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
