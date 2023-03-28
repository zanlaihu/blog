import classNames from 'classnames'
import { MagicCrossButton } from 'src/Common/components/MagicCrossButton'
import jump from 'src/assets/img/tiaozhuan.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PAGE_URL } from '../../constants/router-url'
import Hu from '../Logo'
import './index.css'

const navigationList = [
  {
    title: (
      <div className='ng-choice-content'>
        Docs
        <div className='np-choice-icon-content'>
          <img className='ng-choice-icon' src={jump}></img>
        </div>
      </div>
    ),
    outLink: 'https://www.yuque.com/klaus-rtgrx/goy4cy',
  },
  {
    title: (
      <div className='ng-choice-content'>
        GitHub
        <div className='np-choice-icon-content'>
          <img className='ng-choice-icon' src={jump}></img>
        </div>
      </div>
    ),
    outLink: 'https://github.com/zanlaihu',
  },
]

const Navigation = () => {
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

  // 移动端下拉导航时，阻止背景滚动
  function disableScroll() {
    const TopScroll = window.pageYOffset || document.documentElement.scrollTop
    const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft

    window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll)
    }
  }

  function enableScroll() {
    window.onscroll = function () {}
  }

  useEffect(() => {
    if (show) {
      disableScroll()
    } else {
      enableScroll()
    }
  }, [show])

  return (
    <div className={classNames('ng-content', `${show && 'ng-content-white'}`)}>
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
                  {item.outLink && <div></div>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='ng-mobile'>
        <div className='ng-mobile-text'>
          <div className='ng-mobile-placeholder'></div>
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
          {navigationList.map((item, index) => (
            <div className='ng-mogile-dropdown-text-content' key={index}>
              <div
                className='ng-mobile-dropdown-text'
                onClick={() => {
                  ClickUrl(item)
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigation