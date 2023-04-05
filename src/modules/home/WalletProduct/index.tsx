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
            label={'使用旋转的转盘随机抽取奖品'}
            background={'rgb(250 235 255)'}
          />
          <div className={styles.col}></div>
          <SingleProject
            img={kyc}
            title={'KYC'}
            label={'是用户信息管理系统。'}
            background={'rgb(222 229 236)'}
          />
          <div className={styles.col}></div>
          <SingleProject
            img={discount}
            title={'折扣券'}
            label={'用于抵扣支付金额。'}
            background={'rgb(255 227 123)'}
          />
        </div>
        {!show && (
          <div
            className={styles.btnContent}
            onClick={() => {
              setShow(true)
            }}
          >
            More
          </div>
        )}
        {show && (
          <div className={styles.oneLine}>
            <SingleProject
              img={coupon}
              title={'券详情页&活动详情页'}
              label={'展示一个活动或券的详细信息'}
              background={'rgb(249 248 242)'}
            />
            <div className={styles.col}></div>
            <SingleProject
              img={pos}
              title={'线下扫码支付'}
              label={'用于用户在门店扫码。'}
              background={'rgb(255 215 215)'}
            />
            <div className={styles.col}></div>
            <SingleProject
              img={component}
              title={'组件库'}
              label={'专用于钱包的组件库'}
              background={'rgb(255 255 255)'}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default WalletProduct
