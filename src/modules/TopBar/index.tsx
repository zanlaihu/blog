import RotateWords from 'src/components/RotateWords'
import { scrollToBottom } from 'src/utils'
import styles from './styles.module.scss'

const TopBar = () => {
  return (
    <div className={styles.content}>
      <div className={styles.innerContent}>
        <div className={styles.title}>
          Hi, I'm <span className={styles.name}>Zanlai</span>
        </div>
        <div className={styles.subTitle}>
          I develop 3D visuals, user interfaces <br />
          and web applications.
        </div>
      </div>
    </div>
  )
}

export default TopBar
