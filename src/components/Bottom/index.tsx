import styles from './styles.module.scss'

const Bottom = () => {
  return (
    <div className={styles.content}>
      <div className={styles.middleContent}>
        <div className={styles.title}>相关资源</div>
        <div>
          <a
            className={styles.link}
            href={'https://www.yuque.com/work-klaus/goy4cy'}
            target='_blank'
            rel='noreferrer'
          >
            项目文档 & 学习笔记
          </a>
        </div>
        <div>
          <a
            className={styles.link}
            href={'https://juejin.cn/user/4432874423729591/posts'}
            target='_blank'
            rel='noreferrer'
          >
            技术博客
          </a>
        </div>
        <div>
          <a
            className={styles.link}
            href={'https://github.com/zanlaihu'}
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <div className={styles.sign}>Made with ❤️ by Zanlai</div>
      </div>
    </div>
  )
}

export default Bottom
