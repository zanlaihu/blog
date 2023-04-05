import styles from './styles.module.scss'

interface TypeProjectProps {
  type: string
  title: string
  label: string
}

const TypeProject = (props: TypeProjectProps) => {
  const { type, title, label } = props

  return (
    <div className={styles.content}>
      <div className={styles.type}>{type}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default TypeProject
