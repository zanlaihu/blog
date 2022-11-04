import classNames from 'classnames'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

interface NgWordType {
  words: string
  url?: string
  outlUrl?: string
  white?: boolean
}

const NgWord: FC<NgWordType> = ({ words, url, outlUrl, white }) => {
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
      <p
        className={classNames(
          'ng-word-text',
          `${white && 'ng-word-text-white'}`
        )}
      >
        {words}
      </p>
    </div>
  )
}

export default NgWord
