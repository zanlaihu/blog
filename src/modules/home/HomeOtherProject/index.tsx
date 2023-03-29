import TableProjectItem from '../../../components/TableProjectItem'
import { ProjectConstant } from '../../../constants/CH'
import './index.scss'

const HomeOtherProject = () => {
  return (
    <div className='home-other-project-content'>
      <div className='home-other-project-big-title'>其他项目</div>
      <div className='home-other-project-title'>企业项目</div>
      <div className='home-other-project-sub-title'>
        这些是往期的企业项目，按照时间顺序越新的排在越前面。
      </div>
      <div className='home-other-project-table-content'>
        <div className='home-other-project-table'>
          {ProjectConstant.projectDetail.map(item => (
            <TableProjectItem item={item} />
          ))}
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
