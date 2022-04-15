import { Link } from 'react-router-dom'
import { Navigation } from '../../components/navigation'
import { PAGE_URL } from '../../constants/page-url/router-url'
import './index.css'

export const Home = () => {
  return (
    <div className='home'>
      <div className='top-content'>
        <div className='top-content-inner'>
          <div className='left-blue'></div>
          <div className='right-blue-purple'></div>
          <Navigation />
          <div className='text-content'>
            <div className='top-content-title'>因为兴趣使然而建立的小站</div>
            <div className='content-description'>
              用于放置学习笔记、专业技能、项目经历、及GitHub。快点击顶部的导航来选择感兴趣的内容吧！
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}