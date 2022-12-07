import { FC } from 'react'
import './index.css'

interface TitleTopBarProps {
  title: string
}

const TitleTopBar: FC<TitleTopBarProps> = ({ title }) => {
  return (
    <div className='titletopbar-content'>
      <div>Back to Home</div>
      <div>{title}</div>
    </div>
  )
}

export default TitleTopBar
