import { Link } from 'react-router-dom'
import { Navigation } from '../../Common/components/Navigation'
import { News } from '../../Common/components/News'
import { PAGE_URL } from '../../constants/page-url/router-url'

export const About = () => {
  return (
    <div>
      <News />
      <Navigation />
    </div>
  )
}
