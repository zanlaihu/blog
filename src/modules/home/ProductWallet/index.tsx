import styles from './styles.module.scss'

const ProductWallet = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>产品化钱包</div>
      <div className={styles.textAndPicContent}>
        <div className={styles.textAndPic}>
          <div className={styles.textContent}>
            我在蚂蚁集团工作期间，任职于蚂蚁国际-钱包科技团队。钱包科技团队的主要销售产品即“产品化钱包”。产品化钱包具有iOS和安卓两个版本，由H5统一负责业务开发，属于一个hybrid混合型应用。
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductWallet
