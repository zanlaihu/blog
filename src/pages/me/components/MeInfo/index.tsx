import { useState } from 'react'
import MeInfoList from '../../../../Common/components/MeInfoList'
import './index.css'

const MeInfo = () => {
  const [showAnt, setShowAnt] = useState(false)
  const [showAc, setShowAc] = useState(false)

  return (
    <div>
      <div className='me-info-content'>
        <div className='me-info-middle-content'>
          <div className='me-info-title'>Education</div>
          <MeInfoList
            photo={''}
            uni={'新南威尔士大学 The University of New South Wales'}
            major={'信息技术 硕士 (Master of IT)'}
            date={'2018.02 - 2020.02'}
          />
          <MeInfoList
            photo={''}
            uni={'浙江师范大学 Zhejiang Normal University'}
            major={'软件工程 学士 (Bachelor of Software engineering)'}
            date={'2018.02 - 2020.02'}
          />
        </div>
      </div>
      <div className='me-info-content'>
        <div className='me-info-middle-content'>
          <div className='me-info-title'>Work</div>
          <MeInfoList
            photo={''}
            uni={'蚂蚁集团 Ant group'}
            major={'前端工程师 Front-end developer'}
            date={'2021.10 - NOW'}
          />
          <div className='me-info-detail-btn-content'>
            <div
              className='me-info-detail-btn'
              onClick={() => {
                setShowAnt(true)
              }}
            >
              展开详情
            </div>
          </div>
          <div className='me-info-detail-content'>
            <div>钱包产品化（有名新基线）</div>
            <div>钱包自研组件化</div>
            <div>Vodapay</div>
          </div>
          <MeInfoList
            photo={''}
            uni={'埃森哲 Accenture'}
            major={'软件工程师 Software engineer'}
            date={'2020.05 - 2021.08'}
          />
          <div className='me-info-detail-btn-content'>
            <div
              className='me-info-detail-btn'
              onClick={() => {
                setShowAc(true)
              }}
            >
              展开详情
            </div>
          </div>
        </div>
      </div>
      <div className='me-info-content'>
        <div className='me-info-middle-content'>
          <div className='me-info-title'>Skills</div>
        </div>
      </div>
      <div className='me-info-skill-content'>
        <div className='me-info-skill-img'></div>
      </div>
    </div>
  )
}

export default MeInfo
