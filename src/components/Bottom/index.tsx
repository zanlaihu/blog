import styles from './styles.module.scss'

const Bottom = () => {
  return (
    <div className={styles.content}>
      <div className={styles.middleContent}>
        <div className={styles.title}>相关资源</div>
        <div><a className={styles.link}>项目文档 & 学习笔记</a></div>
        <div><a className={styles.link}>技术博客</a></div>
        <div><a className={styles.link}>Github</a></div>
        <div className={styles.sign}>Made with ❤️ by Zanlai</div>
      </div>
    </div>
  )
}

export default Bottom
