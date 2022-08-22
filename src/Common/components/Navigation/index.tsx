import { useNavigate } from 'react-router-dom'
import { PAGE_URL } from '../../../constants/page-url/router-url'
import './index.css'
import githubIcon from '../../../assets/img/github-white.svg'

const navigationList = [
  { title: '学习笔记', url: PAGE_URL.NOTE },
  { title: '专业技能', url: PAGE_URL.SKILL },
  { title: '项目经历', url: PAGE_URL.PROJECT },
  { title: '关于本站', url: PAGE_URL.ABOUT },
]

export const Navigation = () => {
  // hooks
  const navigate = useNavigate()

  return (
    <div className='navigation navigation-grey'>
      <div className='navigation-content'>
        <div className='navigation-choice'>
          <div
            className='logo logo-white'
            onClick={() => {
              navigate(PAGE_URL.HOME)
            }}
          >
            Hu
          </div>
          {navigationList.map((item, index) => {
            return (
              <div
                className='choice choice-home'
                onClick={() => {
                  navigate(item.url)
                }}
              >
                {item.title}
              </div>
            )
          })}
          <a href='https://github.com/zanlaihu' className='github-content'>
            <img src={githubIcon} className='icon'></img>
          </a>
        </div>
        <div className='inner-header-icon'>
          <span> </span>
          <span> </span>
        </div>
      </div>
      <div className='dropdown dropdown-dark'>
        <div className='dropdown-line dropdown-line-white'></div>
        <div className='dropdown-menu dropdown-menu-white'>
          <a>
            <p>主页</p>
          </a>
          <hr />
          <a>
            <p>学习笔记</p>
          </a>
          <hr />
          <a>
            <p>专业技能</p>
          </a>
          <hr />
          <a>
            <p>项目经历</p>
          </a>
          <hr />
          <a>
            <p>关于本站</p>
          </a>
          <hr />
          <a href='https://github.com/zanlaihu'>
            <p>GitHub</p>
          </a>
          <hr />
        </div>
      </div>
    </div>
  )
}
