import './index.scss'
import styles from './styles.module.scss'

const Bottom = () => {
  return (
    <div className={styles.content}>
      <div className={styles.middleContent}>
        <div className={styles.contact}>Contact</div>
        <div className={styles.info}>电话：13867908869</div>
        <div className={styles.info}>邮箱：klaushu@outlook.com</div>
        <div className='bottom-line'></div>
        <div className='bottom-label'>Made with ❤️ by Zanlai.</div>
      </div>
    </div>
  )
}

export default Bottom
