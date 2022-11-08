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
                '按照新的UI稿，重构旧页面。',
                '项目交付期间，对蚂蚁集团的海外雇员进行工作安排和指导，与海外客户和海外技术团队进行技术沟通。对客户疑问进行解答，并提出解决方案。',
              ]}
            />
            <WorkDetailList
              singleDate='经手项目'
              desc={[
                'C端：KYC、OTC、折扣券支付、大转盘、券详情页、活动详情页',
                'BO：登录系统',
                'Vodapay：FAQ页面',
              ]}
            />
            <WorkDetailList
              startDate={'2022.'}
              endDate={'2022.'}
              title={'大转盘'}
              desc={[
                '使用大转盘的形式，让用户可以通过抽奖来获得折扣券。',
                '共包含5个页面：大转盘介绍页、大转盘活动页、奖励列表页、抽奖券列表页、T&C说明页面。是一套可复用的完整的抽奖系统。',
              ]}
            />
            <WorkDetailList
              startDate={'2022.'}
              endDate={'2022.'}
              title={'活动详情页'}
              desc={[
                '用于详细展示APP上某项营销活动的页面',
                '独立的活动详情页面，可以通过APP上的一级入口进入。',
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
