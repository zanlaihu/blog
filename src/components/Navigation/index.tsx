import { useNavigate } from 'react-router-dom'
import { PAGE_URL } from '../../constants/pageUrl/router-url'
import './index.css'
import githubIcon from './assets/github-white.svg'
import { MagicCrossButton } from '../../Common/components/MagicCrossButton'
import Hu from '../Logo'
import classNames from 'classnames'
import { useState } from 'react'

const navigationList = [
  { title: 'Projects', url: PAGE_URL.PROJECT },
  { title: 'Notes', outLink: 'https://www.yuque.com/klaus-rtgrx/goy4cy' },
  // { title: '我的组件', url: PAGE_URL.COMPONENT },
  { title: 'About', url: PAGE_URL.ABOUT },
  { title: 'GitHub' },
  // {
  //   title: 'GitHub',
  //   element: (
  //     <div className='github-middle-content'>
  //       <img src={githubIcon} className='icon'></img>
  //     </div>
  //   ),
  //   outLink: 'https://github.com/zanlaihu',
  // },
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
    <div className={'ng-content'}>
      <div className='ng-pc'>
        <div className='ng-pc-choice-content'>
          <div className='ng-pc-choice-left-content'>
            <div
              onClick={() => {
                navigate(PAGE_URL.HOME)
              }}
            >
              <Hu />
            </div>
          </div>
          <div className='ng-pc-choice-right-content'>
            {navigationList.map((item, index) => {
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
            })}
          </div>
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
          {navigationList.map(item => {
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
