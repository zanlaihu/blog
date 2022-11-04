import { FC } from "react"
import './index.css'

interface DropDownBarType {
  show: boolean
}

const DropDownBar: FC<DropDownBarType> = () => {
  return <div className='drop-down-bar-content'></div>
}

export default DropDownBar
