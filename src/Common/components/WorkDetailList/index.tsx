import { FC } from 'react'
import './index.css'

interface WorkDetailListType {
  singleDate?: string
  startDate?: string
  endDate?: string
  title?: string
  desc: string[]
}

const WorkDetailList: FC<WorkDetailListType> = ({
  singleDate,
  startDate,
  endDate,
  title,
  desc,
}) => {
  return (
    <div className='work-detail-list-content'>
      {singleDate ? (
        <div className='work-detail-list-date-content'>
          <div className='work-detail-list-date'>{singleDate}</div>
        </div>
      ) : (
        <div className='work-detail-list-date-content'>
          <div className='work-detail-list-date'>{startDate}</div>
          <div className='work-detail-list-date'>~</div>
          <div className='work-detail-list-date'>{endDate}</div>
        </div>
      )}
      <div className='work-detail-list-text-content'>
        <div className='work-detail-list-title'>{title}</div>
        {/* {desc.map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
        <ul>
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkDetailList
