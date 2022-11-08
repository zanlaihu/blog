import { useState } from 'react'
import DropDownBar from '../../../../Common/components/DropDownBar'
import MeInfoList from '../../../../Common/components/MeInfoList'
import WorkDetailList from '../../../../Common/components/WorkDetailList'
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
            btnName='展开详情'
          />
          <DropDownBar show={showAnt}>
            <WorkDetailList
              singleDate='主要职责'
              desc={[
                '根据PRD撰写软件详细设计书，并开发相应功能。配合后端完成联调，并修复测试提出的bug。',
                '独立开发：KYC、OTC、discount、lucky draw',
              ]}
            />
            <WorkDetailList
              startDate={'2022.6'}
              endDate={'2022.10'}
              title={'钱包产品化（又名钱包新基线）'}
              desc={[
                '根据PRD撰写软件详细设计书，并开发相应功能。配合后端完成联调，并修复测试提出的bug。',
                '独立开发：KYC、OTC、discount、lucky draw',
              ]}
            />
            <WorkDetailList
              startDate={'2022.6'}
              endDate={'2022.10'}
              title={'钱包产品化（又名钱包新基线）KYC'}
              desc={[
                '根据PRD撰写软件详细设计书，并开发相应功能。配合后端完成联调，并修复测试提出的bug。',
                '独立开发：KYC、OTC、discount、lucky draw',
              ]}
            />
          </DropDownBar>
          <MeInfoList
            photo={''}
            uni={'埃森哲 Accenture'}
            major={'软件工程师 Software engineer'}
            date={'2020.05 - 2021.08'}
            btnName='展开详情'
          />
          <DropDownBar show={showAc}></DropDownBar>
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
