import rightArrow from '../../assets/img/rightArrow.svg'
import './index.css'
import styles from './styles.module.scss'

interface ProjectItemProps {
  title: string
  subTitle: string
  link: string
}
interface TableProjectItemProps {
  item: ProjectItemProps
}

const TableProjectItem = (props: TableProjectItemProps) => {
  const { title, subTitle, link } = props.item

  return (
    <div
      className={styles.content}
      onClick={() => {
        window.open(link)
      }}
    >
      <div className='table-project-item-title'>{title}</div>
      <div className='table-project-item-sub-title'>{subTitle}</div>
      <div className='table-project-item-link-content'>
        <div className={styles.link}>Documentation </div>
        <div className='table-project-item-link-arrow'>
          <img src={rightArrow} alt={''}></img>
        </div>
      </div>
    </div>
  )
}

export default TableProjectItem
