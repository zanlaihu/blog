import { FC, ReactChild } from 'react'
import './index.css'

interface InsListType {
  photo: ReactChild
  title: string
  desc: string
}

const InsList: FC<InsListType> = ({ photo, title, desc }) => {
  return <div className='ins-list-content'></div>
}

export default InsList
