import { Link } from 'react-router-dom'
import { PAGE_URL } from '../../constants/page-url/router-url'
import { GithubLogo } from '../github-logo'
import { Logo } from '../logo'
import './index.css'

export const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation-row'>
        <Link to={PAGE_URL.HOME}>
          <Logo />
        </Link>
        <Link to={PAGE_URL.NOTE} className='navigation-choice'>
          学习笔记
        </Link>
        <Link to={PAGE_URL.SKILL} className='navigation-choice'>
          专业技能
        </Link>
        <Link to={PAGE_URL.PROJECT} className='navigation-choice'>
          项目经历
        </Link>
        <Link to={PAGE_URL.ABOUT} className='navigation-choice'>
          关于本站
        </Link>
        <Link to={PAGE_URL.GITHUB}><GithubLogo /></Link>
      </div>
    </div>
  )
}
