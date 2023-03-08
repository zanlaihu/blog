import { useNavigate } from 'react-router-dom'
import leftArrow from 'src/assets/img/leftArrow.svg'
import { PAGE_URL } from 'src/constants/router-url'
import './index.css'

interface TitleTopBarProps {
  title: string
  back: string
  backUrl: string
  desc?: string
}

const TitleTopBar = ({ title, desc }: TitleTopBarProps) => {
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
