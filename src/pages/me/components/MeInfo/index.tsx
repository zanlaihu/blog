import MeInfoList from '../../../../components/MeInfoList'
import './index.css'

const MeInfo = () => {
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
          <MeInfoList
            photo={''}
            uni={'埃森哲 Accenture'}
            major={'软件工程师 Software engineer'}
            date={'2020.05 - 2021.08'}
          />
        </div>
      </div>
      <div className='me-info-content'>
        <div className='me-info-middle-content'>
          <div className='me-info-title'>Skills</div>
          <div>准备放一张图上来</div>
        </div>
      </div>
    </div>
  )
}

export default MeInfo
