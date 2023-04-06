import LuckyDraw from '../../../components/LuckyDraw'
import './index.css'
import styles from './styles.module.scss'

const HomeRecentProject = () => {
  return (
    <div className={styles.content}>
      <div className='home-r-back'>
        <div className='home-r-title'>介绍一个我最近刚做好的项目</div>
        <div className='home-r-pro-name'>大转盘</div>
        <div className='sample-content'>
          <LuckyDraw />
        </div>
        <div className='home-r-pro-desc'>点中间的GO试一试</div>
      </div>
    </div>
  )
}

export default HomeRecentProject
