import { Link } from 'react-router-dom'
import { Navigation } from '../../components/navigation'
import { PAGE_URL } from '../../constants/page-url/router-url'
import './index.css'

export const Home = () => {
  return (
    <div className='home'>
      <div className='top-content'>
        <div className='left-blue'></div>
        <div className='right-blue-purple'></div>
        <div className='top-content-inner'>
          <Navigation />
          <div className='text-content'>
            <div className='top-content-title'>因为兴趣使然而建立的小站</div>
            <div className='content-description'>
              本站是我的个人网站，用于放置学习过程中的笔记、个人技能以及项目经历。其中也会加入一些前端实验性质的展示。这个是使用react搭建的第二版，因为第一版是用的原生HTML：
              <a href='https://zanlaihu.github.io/old-blog/index.html'>
                旧版地址
              </a>
              ，所以想尝试用GitHub
              Pages来搭载React应用。但在后续会考虑使用服务器来搭载实现动态效果，可能还需要学习一下阿里云或腾讯云的使用方式。
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
