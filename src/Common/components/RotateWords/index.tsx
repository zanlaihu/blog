import { FC } from 'react'
import './index.css'

interface RotateWordsProps {}

const RotateWords: FC<RotateWordsProps> = () => {
  const circleStr =
    '</><></><></><></><></><></><></><></><></><></><></><></><></>'

  const dot = ' . . / . . / '
  const brace = ' { { {  } } }'

  return (
    <div className='circle'>
      <svg
        viewBox='0 0 100 100'
        width='250'
        height='250'
        className='circle-one'
      >
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
        <text font-size='7'>
          <textPath xlinkHref='#circle' stroke="grey" stroke-width="0.1">{circleStr}</textPath>
        </text>
      </svg>
      <svg
        viewBox='0 0 100 100'
        width='400'
        height='400'
        className='circle-two'
      >
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
        <text font-size='4.8'>
          <textPath xlinkHref='#circle'>
            {dot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dot}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </textPath>
        </text>
      </svg>
      <svg viewBox='0 0 100 100' width='550' height='550' className='circle-three'>
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
        <text font-size='4.1'>
          <textPath xlinkHref='#circle'>{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brace}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</textPath>
        </text>
      </svg>
    </div>
  )
}

export default RotateWords
