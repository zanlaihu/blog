import classNames from 'classnames'
import { useState } from 'react'
import './index.scss'

export const MagicCrossButton = () => {
  const [close, setClose] = useState(false)

  return (
    <div
      className={classNames(
        'inner-header-icon',
        `${close && 'inner-header-icon-click'}`,
        `${!close && 'inner-header-icon-out'}`
      )}
      onClick={() => {
        setClose(!close)
      }}
    >
      <span> </span>
      <span> </span>
    </div>
  )
}
