import { Link } from 'react-router-dom'
import { Navigation } from '../../components/navigation'
import { PAGE_URL } from '../../constants/page-url/router-url'

export const Home = () => {
  return (
    <div className='home'>
      <Navigation />
      <h1>Home</h1>
      <Link to={PAGE_URL.ABOUT}>about</Link>
    </div>
  )
}
