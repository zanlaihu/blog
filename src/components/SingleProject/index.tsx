import styles from './styles.module.scss'

interface SingleProjectProps {
  img?: any
  title?: string
  label?: string
}

const SingleProject = (props: SingleProjectProps) => {
  const { img, title, label } = props

  return (
    <div className={styles.content}>
      <div className={styles.textContent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  )
}

export default SingleProject
