import { useNavigate } from 'react-router-dom'
import TableProjectItem from '../../../../components/TableProjectItem'
import './index.css'

const HomeOtherProject = () => {
  const navigate = useNavigate()
  return (
    <div className='home-other-project-content'>
      <div className='home-other-project-big-title'>其他项目</div>
      <div className='home-other-project-title'>企业项目</div>
      <div className='home-other-project-sub-title'>
        这些是往期的企业项目，按照时间顺序越新的排在越前面。
      </div>
      <div className='home-other-project-table-content'>
        <div className='home-other-project-table'>
          <TableProjectItem
            title={'大转盘'}
            subTitle={'使用大转盘进行抽奖'}
            link={'https://www.yuque.com/klaus-rtgrx/goy4cy/vphvsdbku8qf8oxp'}
          />
          <TableProjectItem
            title={'批量代发'}
            subTitle={'批量代发全称批量代发员工工资，是BO中台的功能'}
            link={'https://www.yuque.com/klaus-rtgrx/goy4cy/od46uvb6ekuzbowc'}
          />
          {/* <TableProjectItem
            title={'折扣券支付'}
            subTitle={'使用折扣券抵扣支付金额，是钱包APP的核心功能之一'}
            link={''}
          /> */}
          {/* <TableProjectItem
            title={'券详情页'}
            subTitle={'用于展示折扣券详情的页面'}
            link={''}
          /> */}
          {/* <TableProjectItem
            title={'活动详情页'}
            subTitle={'用于展示APP某项活动的详情页'}
            link={''}
          /> */}
          {/* <TableProjectItem
            title={'线下扫码充值'}
            subTitle={'用于展示APP某项活动的详情页'}
            link={''}
          /> */}
          {/* <TableProjectItem
            title={'KYC（用户信息录入）'}
            subTitle={'一步步引导用户填写个人信息的功能，是所有APP都具有的功能'}
            link={''}
          /> */}
          {/* <TableProjectItem
            title={'钱包组件库'}
            subTitle={'为了钱包 APP 而专门开发的组件库'}
            link={''}
          /> */}
        </div>
      </div>
      {/* <div className='home-other-project-title'>个人项目</div>
      <div className='home-other-project-sub-title'>
        这些是个人因为兴趣做的项目。
      </div>
      <div className='home-other-project-table-content'>
        <div className='home-other-project-table'>
          <TableProjectItem
            title={'个人网站'}
            subTitle={'就是你目前在浏览的这个网站，探秘这个网站的搭建过程'}
            link={''}
          />
        </div>
      </div> */}
    </div>
  )
}

export default HomeOtherProject
