import { useState } from 'react'
import component from 'src/assets/img/component.svg'
import coupon from 'src/assets/img/coupon.svg'
import discount from 'src/assets/img/discount.svg'
import kyc from 'src/assets/img/kyc.svg'
import lucky from 'src/assets/img/lucky.svg'
import pos from 'src/assets/img/pos.svg'
import SingleProject from 'src/components/SingleProject'
import TypeProject from 'src/components/TypeProject'
import styles from './styles.module.scss'

const WalletProduct = () => {
  const [show, setShow] = useState(false)

  return (
    <div className={styles.content}>
      <div className={styles.middleContent}>
        <TypeProject
          type={'移动端web开发'}
          title={'产品化钱包'}
          label={
            'Hybrid应用，由H5进行业务开发。由我独立完成需求对接、软件文档编写、开发的项目有：'
          }
        />
        <div className={styles.oneLine}>
          <SingleProject
            img={lucky}
            title={'大转盘'}
            label={'大转盘提供随机抽取奖品的能力。难点在于控制转盘转动的角度。'}
          />
          <SingleProject
            img={kyc}
            title={'KYC'}
            label={'是用户信息管理系统。'}
          />
          <SingleProject
            img={discount}
            title={'折扣券'}
            label={'在收银台页面，用户可以选择添加折扣券来抵扣支付金额。'}
          />
        </div>
        <div className={styles.oneLine}>
          <SingleProject
            img={coupon}
            title={'券详情页&活动详情页'}
            label={'展示一个活动或券的详细信息'}
          />
          <SingleProject
            img={pos}
            title={'线下扫码支付'}
            label={'用户进入线下扫码页面，供商户扫码付费。属于B扫C功能。'}
          />
          <SingleProject
            img={component}
            title={'组件库'}
            label={'专用于钱包的组件库'}
          />
        </div>
      </div>
    </div>
  )
}

export default WalletProduct
