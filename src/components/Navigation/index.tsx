import { useNavigate } from 'react-router-dom'
import { PAGE_URL } from '../../constants/pageUrl/router-url'
import './index.css'
import githubIcon from './assets/github-white.svg'
import { MagicCrossButton } from '../../Common/components/MagicCrossButton'
import Hu from '../Logo'
import classNames from 'classnames'
import { useState } from 'react'

const navigationList = [
  { title: '主页', element: <Hu />, url: PAGE_URL.HOME },
  { title: '关于我', url: PAGE_URL.ME },
  { title: '我的项目', url: PAGE_URL.PROJECT },
  { title: '我的笔记', outLink: 'https://www.yuque.com/klaus-rtgrx/goy4cy' },
  // { title: '我的组件', url: PAGE_URL.COMPONENT },
  { title: '关于本站', url: PAGE_URL.ABOUT },
  {
    title: '前往老站',
    outLink: 'https://zanlaihu.github.io/old-blog/index.html',
  },
  {
    title: 'GitHub',
    element: (
      <div className='github-middle-content'>
        <img src={githubIcon} className='icon'></img>
      </div>
    ),
    outLink: 'https://github.com/zanlaihu',
  },
]

const Navigation = () => {
  // hooks
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  function ClickUrl(item: any) {
    if (item.url) {
      navigate(item.url)
    }
    if (item.outLink) {
      window.open(item.outLink)
    }
  }

  return (
    <div className={classNames('ng-content', `${show && 'ng-content-black'}`)}>
      <div className='ng-pc'>
        <div className='ng-pc-choice-content'>
          {navigationList.map((item, index) => {
            if (item.element) {
              return (
                <div
                  key={index}
                  className='ng-pc-choice'
                  onClick={() => {
                    ClickUrl(item)
                  }}
                >
                  {item.element}
                </div>
              )
            } else {
              return (
                <div
                  key={index}
                  className='ng-pc-choice'
                  onClick={() => {
                    ClickUrl(item)
                  }}
                >
                  {item.title}
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className='ng-mobile'>
        <div className='ng-mobile-text'>
          <div className='ng-mobile-Placeholder'></div>
          <Hu />
          <div
            onClick={() => {
              setShow(!show)
            }}
          >
            <MagicCrossButton />
          </div>
        </div>
        <div
          className={classNames(
            'ng-mobile-dropdown',
            `${show && 'ng-mobile-dropdown-show'}`
          )}
        >
          <div className='ng-mobile-dropdown-line'></div>
          {navigationList.map((item) => {
            if (typeof item.title === 'string') {
              return (
                <div className='ng-mogile-dropdown-text-content'>
                  <div
                    className='ng-mobile-dropdown-text'
                    onClick={() => {
                      ClickUrl(item)
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Navigation
