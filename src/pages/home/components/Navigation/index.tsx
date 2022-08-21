import './index.css'

export const Navigation = () => {
  return (
    <div>
      <div>
        <div className='navigation navigation-grey'>
          <div className='navigation-content'>
            <div className='navigation-choice'>
              <a className='logo logo-white'>
                <div>Hu</div>
              </a>
              <a>
                <div className='choice choice-home'>学习笔记</div>
              </a>
              <a>
                <div className='choice choice-home'>专业技能</div>
              </a>
              <a>
                <div className='choice choice-home'>项目经历</div>
              </a>
              <a>
                <div className='choice choice-home'>关于本站</div>
              </a>
              <a href='https://github.com/zanlaihu'>
                <div className='github github-white'></div>
              </a>
            </div>
            <div className='inner-header-icon'>
              <span> </span>
              <span> </span>
            </div>
          </div>
          <div className='dropdown dropdown-dark'>
            <div className='dropdown-line dropdown-line-white'></div>
            <div className='dropdown-menu dropdown-menu-white'>
              <a>
                <p>主页</p>
              </a>
              <hr />
              <a>
                <p>学习笔记</p>
              </a>
              <hr />
              <a>
                <p>专业技能</p>
              </a>
              <hr />
              <a>
                <p>项目经历</p>
              </a>
              <hr />
              <a>
                <p>关于本站</p>
              </a>
              <hr />
              <a href='https://github.com/zanlaihu'>
                <p>GitHub</p>
              </a>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
