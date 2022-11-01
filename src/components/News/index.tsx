import './index.css'

const News = () => {
  return (
    <div className='news-content'>
      <div className='news-text'>
        <div>
          2022年10月27日：本站新建中，目前移动端响应式布局还没做好，建议用PC端浏览。也可点此&nbsp;
        </div>
        <a
          className='news-old-ng'
          href='https://zanlaihu.github.io/old-blog/index.html'
          target="view_window"
        >
          进入老站
        </a>
      </div>
    </div>
  )
}

export default News
