import './index.css';

export const MainItems = () => {
  return (
    <div className='bar'>
      <div className='up-single-bar single-bar'>
        <div className='single-bar-back'>学习笔记</div>
        <div className='single-bar-content single-bar-content-dark'>
          <p>学习笔记</p>
          <p>
            看了各方面资料后自己总结的一点知识。来自各类教科书、菜鸟教程、MDN等资源。
          </p>
          <p></p>
        </div>
      </div>
      <div className='up-single-bar single-bar'>
        <div className='single-bar-back'>专业技能</div>
        <div className='single-bar-content single-bar-content-dark'>
          <p>专业技能</p>
          <p>全面地罗列一次自己的全部技能。</p>
          <p></p>
        </div>
      </div>
      <div className='down-single-bar single-bar'>
        <div className='single-bar-back single-bar-dark'>项目经历</div>
        <div className='single-bar-content single-bar-content-light'>
          <p>项目经历</p>
          <p>
            包含企业项目和个人项目。企业项目只涉及技术栈，不包含业务类内容。
          </p>
          <p></p>
        </div>
      </div>
      <div className='down-single-bar single-bar'>
        <div className='single-bar-back single-bar-dark'>关于本站</div>
        <div className='single-bar-content single-bar-content-light'>
          <p>关于本站</p>
        </div>
      </div>
    </div>
  )
}
