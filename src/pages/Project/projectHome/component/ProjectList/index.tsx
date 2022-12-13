import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { PAGE_URL, PROJECT_URL } from '../../../../../constants/router-url'
import './index.css'

const ProjectList: FC = () => {
  const navigate = useNavigate()
  return (
    <div className='project-list-content'>
      <div className='project-list-middle-content'>
        <div className='project-list-title'>List</div>
        <div className='project-list-subtitle' onClick={()=>{navigate(PROJECT_URL.LUCKYDRAW)}}>大转盘 Lukcy Draw</div>
      </div>
    </div>
  )
}

export default ProjectList
