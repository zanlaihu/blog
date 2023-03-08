import './index.css'
import rightArrow from '../../assets/img/rightArrow.svg'

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
      className='table-project-item-content'
      onClick={() => {
        window.open(link)
      }}
    >
      <div className='table-project-item-title'>{title}</div>
      <div className='table-project-item-sub-title'>{subTitle}</div>
      <div className='table-project-item-link-content'>
        <div className='table-project-item-link'>Documentation </div>
        <div className='table-project-item-link-arrow'>
          <img src={rightArrow}></img>
        </div>
      </div>
    </div>
  )
}

export default TableProjectItem
