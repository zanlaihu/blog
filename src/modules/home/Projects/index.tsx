import TableProjectItem from 'src/components/TableProjectItem'
import { ProjectConstant } from 'src/constants/CH'
import './index.scss'
import styles from './styles.module.scss'

const HomeOtherProject = () => {
  return (
    <div className={styles.content}>
      <div className='home-other-project-big-title'>其他项目</div>
      <div className='home-other-project-table-content'>
        <div className='home-other-project-table'>
          {ProjectConstant.projectDetail.map(item => (
            <TableProjectItem item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeOtherProject
