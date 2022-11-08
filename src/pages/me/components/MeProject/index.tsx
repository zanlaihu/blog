import NgWord from '../../../../Common/components/NgWord'
import { PAGE_URL } from '../../../../constants/page-url/router-url'
import './index.css'

const MeProject = () => {
  return (
    <div className='me-project-content'>
      <div className='me-project-title'>Projects</div>
      <div className='me-project-desc'>项目介绍已全部移至我的项目</div>
      <NgWord words={'点击这里前往我的项目'} url={PAGE_URL.PROJECT} white />
    </div>
  )
}

export default MeProject