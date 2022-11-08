import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import './index.css'

interface DropDownBarType {
  show: boolean
  children?: ReactNode
  height: string
}

const DropDownBar: FC<DropDownBarType> = ({ show, children, height }) => {
  function getHeight() {
    if (show) {
      return height
    } else {
      return undefined
    }
  }
  return (
    <div
      className={classNames('drop-down-bar-content')}
      style={{ height: getHeight() }}
    >
      {children}
    </div>
  )
}

export default DropDownBar
