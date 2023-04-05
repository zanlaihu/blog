import styles from './styles.module.scss'

interface SingleProjectProps {
  img?: any
  title?: string
  label?: string
  background?: string
}

const SingleProject = (props: SingleProjectProps) => {
  const { img, title, label, background } = props

  return (
    <div className={styles.content}>
      <div
        className={styles.imgContent}
        style={{ backgroundColor: background }}
      >
        <div className={styles.imgMiddle}>
          <img src={img} className={styles.img}></img>
        </div>
      </div>
      <div className={styles.textContent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  )
}

export default SingleProject
