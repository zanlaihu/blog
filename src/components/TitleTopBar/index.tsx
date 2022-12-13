import { FC } from 'react'
import './index.css'
import leftArrow from '../../assets/img/leftArrow.svg'
import { useNavigate } from 'react-router-dom'
import { PAGE_URL } from '../../constants/router-url'

interface TitleTopBarProps {
  title: string
  back: string
  backUrl: string
  desc?: string
}

const TitleTopBar: FC<TitleTopBarProps> = ({ title, back, backUrl, desc }) => {
  const navigate = useNavigate()

  return (
    <div className='titletopbar-content'>
      <div className='titletopbar-middle-content'>
        <div className='titletopbar-back'>
          <div
            className='titletopbar-back-button-content'
            onClick={() => {
              navigate(PAGE_URL.HOME)
            }}
          >
            <div className='title-top-bar-img-content'>
              <img src={leftArrow} className='titletopbar-img' />
            </div>
            Back to home
          </div>
        </div>
        <div className='titletopbar-title'>{title}</div>
        <div className='title-top-bar-desc'>{desc}</div>
      </div>
    </div>
  )
}

export default TitleTopBar
