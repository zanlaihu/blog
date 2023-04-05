import RotateWords from 'src/components/RotateWords'
import { scrollToBottom } from 'src/utils'
import './index.scss'
import styles from './styles.module.scss'

const TopBar = () => {
  return (
    <div className={styles.content}>
      <div className='rotate-content'>
        <div className='rotate-middle-content'>
          <RotateWords />
        </div>
      </div>
      <div className='home-top-bar'>
        <div className='home-top-text-content'>
          <div className={styles.title}>胡赞来的小站</div>
          <div className={styles.label}>这里有更详细的项目经历</div>
          {/* <div className={styles.contactContent}>
            <div className='home-welcome-contact' onClick={scrollToBottom}>
              Contact me
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default TopBar
