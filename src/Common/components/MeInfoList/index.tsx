import React, { FC, ReactChild } from 'react'
import './index.css'

interface InsListType {
  photo: ReactChild
  uni: string
  major: string
  date: string
  btnName?: string
  onClick?: (e: React.MouseEvent) => void
}

const MeInfoList: FC<InsListType> = ({
  photo,
  uni,
  major,
  date,
  btnName,
  onClick,
}) => {
  return (
    <div className='me-info-list-content'>
      <div className='me-info-list-img-content'>
        <div className='me-info-list-img-wrap'></div>
      </div>
      <div className='me-info-list-text-content'>
        <div className='me-info-list-uni'>{uni}</div>
        <div className='me-info-list-major'>{major}</div>
        <div className='me-info-list-date'>{date}</div>
        {btnName && (
          <div className='me-info-list-detail-btn' onClick={onClick}>
            {btnName}
          </div>
        )}
      </div>
    </div>
  )
}

export default MeInfoList
