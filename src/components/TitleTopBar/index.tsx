import leftArrow from 'src/assets/img/leftArrow.svg'
import { PAGE_URL } from 'src/constants/router-url'
import { useNavigate } from 'react-router-dom'
import './index.css'

interface TitleTopBarProps {
  title: string
  back: string
  backUrl: string
  desc?: string
}

const TitleTopBar = (props: TitleTopBarProps) => {
  const navigate = useNavigate()
  const { title, desc } = props

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
