import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

interface NgWordType {
  words: string
  url?: string
  outlUrl?: string
}

const NgWord: FC<NgWordType> = ({ words, url, outlUrl }) => {
  const navigate = useNavigate()

  function Jump() {
    if (url) {
      navigate(url)
      return
    }
    if (outlUrl) {
      window.open(outlUrl)
      return
    }
  }

  return (
    <div
      onClick={() => {
        Jump()
      }}
      className='ng-word-content'
    >
      <p className='ng-word-text'>{words}</p>
    </div>
  )
}

export default NgWord
