import styles from './styles.module.scss'

interface TabProps {
  title: string
}

const Tab = (props: TabProps) => {
  return <div>{props.title}</div>
}

export default Tab
