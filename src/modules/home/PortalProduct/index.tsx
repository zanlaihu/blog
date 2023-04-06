import portal from 'src/assets/img/portal.svg'
import SingleProject from 'src/components/SingleProject'
import TypeProject from 'src/components/TypeProject'
import styles from './styles.module.scss'

const PortalProduct = () => {
  return (
    <div className={styles.content}>
      <div className={styles.middleContent}>
        <TypeProject
          type={'web开发'}
          title={'官网'}
          label={
            '由我独立完成需求对接、软件文档编写、开发的项目有：'
          }
        />
        <div className={styles.oneLine}>
          <SingleProject
            img={portal}
            title={'钱包科技官网'}
            label={'蚂蚁国际事业群 - 钱包科技团队的对外官网'}
          />
        </div>
      </div>
    </div>
  )
}

export default PortalProduct
