import bulk from 'src/assets/img/bulk.svg'
import SingleProject from 'src/components/SingleProject'
import TypeProject from 'src/components/TypeProject'
import styles from './styles.module.scss'

const BOProduct = () => {
  return (
    <div className={styles.content}>
      <div className={styles.middleContent}>
        <TypeProject
          type={'web开发'}
          title={'中后台web端'}
          label={
            '中后台是“产品化钱包”的配套产品，用于配制APP。由我独立完成需求对接、软件文档编写、开发的项目有：'
          }
        />
        <div className={styles.oneLine}>
          <SingleProject
            img={bulk}
            title={'批量代发'}
            label={'可以批量代发员工工资'}
            background={'rgb(249, 248, 242)'}
          />
        </div>
      </div>
    </div>
  )
}

export default BOProduct
