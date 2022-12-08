import { FC } from 'react'
import './index.css'
import leftArrow from '../../../../assets/img/leftArrow.svg'

interface TitleTopBarProps {
  title: string
}

const TitleTopBar: FC<TitleTopBarProps> = ({ title }) => {
  return (
    <div className='titletopbar-content'>
      <div className='titletopbar-middle-content'>
        <div className='titletopbar-back'>
          <div className='titletopbar-back-button-content' onClick={()=>{}}>
            <div className='title-top-bar-img-content'>
              <img src={leftArrow} className='titletopbar-img' />
            </div>
            Back to Home
          </div>
        </div>
        <div className='titletopbar-title'>{title}</div>
      </div>
    </div>
  )
}

export default TitleTopBar
