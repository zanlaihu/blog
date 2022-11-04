import { FC, ReactChild } from 'react'
import './index.css'

interface InsListType {
  photo: ReactChild
  uni: string
  major: string
  date: string
}

const MeInfoList: FC<InsListType> = ({ photo, uni, major, date }) => {
  return (
    <div className='me-info-list-content'>
      <div className='me-info-list-img-content'>
        <div className='me-info-list-img-wrap'></div>
      </div>
      <div>
        <div className='me-info-list-uni'>{uni}</div>
        <div className='me-info-list-major'>{major}</div>
        <div className='me-info-list-date'>{date}</div>
      </div>
    </div>
  )
}

export default MeInfoList
