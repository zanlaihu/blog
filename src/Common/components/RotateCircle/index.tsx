import { FC } from 'react'
import './index.css'

interface RotateCircleProps {}

const RotateCircle: FC<RotateCircleProps> = () => {
  const circleStr =
    '</><></><></><></><></><></><></><></><></><></><></><></><></>'

  return (
    <div className='circle'>
      <svg viewBox='0 0 100 100' width='249' height='249'>
        <defs>
          <path
            id='circle'
            d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
          />
        </defs>
        <text fontSize='7'>
          <textPath xlinkHref='#circle'>{circleStr}</textPath>
        </text>
      </svg>
    </div>
  )
}

export default RotateCircle
