import { useState } from 'react'
import DropDownBar from '../../../../Common/components/DropDownBar'
import MeInfoList from '../../../../components/MeInfoList'
import WorkDetailList from '../../../../Common/components/WorkDetailList'
import './index.css'
import { AntProjectList } from '../../constants'

const MeInfo = () => {
  const [showAnt, setShowAnt] = useState(false)
  const [showAc, setShowAc] = useState(false)

  return (
    <div>
      <div className='me-info-content'>
        <div className='me-info-middle-content'>
          <div className='me-info-title'>Education</div>
          <MeInfoList
            photo={
              'https://media.licdn.cn/dms/image/C4D0BAQEFzPoRCsxqRA/company-logo_100_100/0/1657494335084?e=1675900800&v=beta&t=C4zEGupAd8tkFyHtu66VyVy2p7corIGH7ARmNYn6Ecs'
            }
            uni={'新南威尔士大学 The University of New South Wales'}
            major={'信息技术 硕士 (Master of IT)'}
            date={'2018.02 - 2020.02'}
          />
          <MeInfoList
            photo={
              'https://media.licdn.cn/dms/image/C560BAQFZPEV-r-wW5g/company-logo_100_100/0/1620639135195?e=1675900800&v=beta&t=otRs5G6S8eJyPtEiePLrqogrzCxZgywPy4x4NqJxDTc'
            }
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
            photo={
              'https://media.licdn.cn/dms/image/C560BAQEMPJh5f4BL0A/company-logo_100_100/0/1598349071448?e=1675900800&v=beta&t=3LupXpN93ZWHfE8u46u_SE8yiZ5s_e00A5o2zXSBcfw'
            }
            uni={'蚂蚁集团 Ant group'}
            major={'前端工程师 Front-end developer'}
            date={'2021.10 - NOW'}
            btnName='展开详情'
            onClick={() => {
              setShowAnt(!showAnt)
            }}
            active={showAnt}
          />
          <DropDownBar show={showAnt} height={'1150px'}>
            {AntProjectList.map((item, index) =>
              item?.singleDate ? (
                <WorkDetailList
                  key={index}
                  singleDate={item.singleDate}
                  desc={item.description}
                />
              ) : (
                <WorkDetailList
                  key={index}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  title={item.title}
                  desc={item.description}
                />
              )
            )}
          </DropDownBar>
          <MeInfoList
            photo={
              'https://media.licdn.cn/dms/image/C560BAQHxpX1l8Av2Dg/company-logo_100_100/0/1659035932009?e=1675900800&v=beta&t=CSeT3vo1bdzgQv2d4rb0enaVxKGxqJ155z7uuSlhPZ0'
            }
            uni={'埃森哲 Accenture'}
            major={'软件工程师 Software engineer'}
            date={'2020.05 - 2021.08'}
            btnName='展开详情'
          />
          <DropDownBar show={showAc} height='300px'></DropDownBar>
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
