import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import './index.css'

interface DropDownBarType {
  show: boolean
  children?: ReactNode
}

const DropDownBar: FC<DropDownBarType> = ({ show, children }) => {
  return (
    <div
      className={classNames(
        'drop-down-bar-content',
        `${show && 'drop-down-bar-show'}`
      )}
    >
      {children}
    </div>
  )
}

export default DropDownBar
