import classNames from 'classnames'
import React, { FC } from 'react'
import detailArrow from '../../Common/icon/detailArrow.svg'
import './index.css'

interface InsListType {
  photo: string
  uni: string
  major: string
  date: string
  onClick?: (e: React.MouseEvent) => void
  active?: boolean
}

const MeInfoList: FC<InsListType> = ({
  photo,
  uni,
  major,
  date,
  onClick,
  active,
}) => {
  return (
    <div className='me-info-list-content'>
      <div className='me-info-list-img-content'>
        <div className='me-info-list-img-wrap'>
          <img src={photo} className='me-info-list-img'></img>
        </div>
      </div>
      <div className='me-info-list-text-content'>
        <div className='me-info-list-uni'>{uni}</div>
        <div className='me-info-list-major'>{major}</div>
        <div className='me-info-list-date'>{date}</div>
        {onClick && (
          <div className='me-info-list-detail-btn-content'>
            <div className='me-info-list-detail-click' onClick={onClick}>
              <div className='me-info-list-detail-btn'>
                {active ? '收回详情' : '展开详情'}
              </div>
              <div className='me-info-list-detail-arrow-content'>
                <img
                  src={detailArrow}
                  className={classNames(
                    `${active && 'me-info-list-detail-arrow-up'}`,
                    'me-info-list-detail-arrow'
                  )}
                ></img>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MeInfoList
