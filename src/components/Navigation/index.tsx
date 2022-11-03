import { useNavigate } from 'react-router-dom'
import { PAGE_URL } from '../../constants/page-url/router-url'
import './index.css'
import githubIcon from './assets/github-white.svg'
import { DropDownButton } from '../../Common/components/DropDownButton'
import Hu from '../../Common/components/Logo'

const navigationList = [
  { title: <Hu />, url: PAGE_URL.HOME },
  { title: '关于我', url: PAGE_URL.ME },
  { title: '我的项目', url: PAGE_URL.PROJECT },
  { title: '我的随笔', url: PAGE_URL.NOTE },
  { title: '关于本站', url: PAGE_URL.ABOUT },
]

const Navigation = () => {
  // hooks
  const navigate = useNavigate()

  return (
    <div className='ng-content'>
      <div className='ng-pc'>
        <div className='ng-pc-choice-content'>
          {navigationList.map((item, index) => {
            return (
              <div
                key={index}
                className='ng-pc-choice'
                onClick={() => {
                  navigate(item.url)
                }}
              >
                {item.title}
              </div>
            )
          })}
          <a
            className='ng-pc-choice'
            href='https://zanlaihu.github.io/old-blog/index.html'
            target='view_widnow'
          >
            前往老站
          </a>
          <a
            href='https://github.com/zanlaihu'
            target='view_window'
            className='github-content'
          >
            <div className='github-middle-content'>
              <img src={githubIcon} className='icon'></img>
            </div>
          </a>
        </div>
        <DropDownButton />
      </div>
      {/* <div className='dropdown dropdown-dark'>
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
      </div> */}
    </div>
  )
}

export default Navigation
