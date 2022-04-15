import { Link } from 'react-router-dom'
import { PAGE_URL } from '../../constants/page-url/router-url'
import { GithubLogo } from '../github-logo'
import { Logo } from '../logo'
import './index.css'

export const Navigation = () => {
  return (
    <div className='navigation-var navigation'>
      <div className='left-content'>
        <Link to={PAGE_URL.HOME} className='logo'>
          <Logo />
        </Link>
        <Link to={PAGE_URL.NOTE} className='navigation-choice'>
          笔记
        </Link>
        <Link to={PAGE_URL.SKILL} className='navigation-choice'>
          技能树
        </Link>
        <Link to={PAGE_URL.PROJECT} className='navigation-choice'>
          项目经历
        </Link>
        <Link to={PAGE_URL.ABOUT} className='navigation-choice'>
          关于本站
        </Link>
      </div>
      <div className='right-content'>
        <a className='navigation-choice'>本站源码</a>
        <a className='navigation-choice'>
          <GithubLogo />
        </a>
      </div>
    </div>
  )
}
