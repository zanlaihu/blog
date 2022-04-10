import { Link } from 'react-router-dom'
import { PAGE_URL } from '../../constants/page-url/router-url'

export const About = () => {
  return (
    <div className='about'>
      about
      <div>
        <Link to={PAGE_URL.HOME}>home</Link>
      </div>
    </div>
  )
}
