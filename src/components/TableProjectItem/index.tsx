import { FC } from 'react'
import './index.css'
import leftArrow from '../../assets/img/leftArrow.svg'
import { useNavigate } from 'react-router-dom'
import { PAGE_URL } from '../../constants/router-url'

interface TableProjectItemProps {
  title: string
  subTitle: string
  link: string
}

const TableProjectItem: FC<TableProjectItemProps> = ({
  title,
  subTitle,
  link,
}) => {
  const navigate = useNavigate()

  return (
    <div className='table-project-item-content'>
      <div className='table-project-item-title'>{title}</div>
      <div className='table-project-item-sub-title'>{subTitle}</div>
      <div className='table-project-item-link'>Documentation</div>
    </div>
  )
}

export default TableProjectItem
