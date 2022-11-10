import NgWord from '../../../../Common/components/NgWord'
import './index.css'

const HomeNote = () => {
  return (
    <div className='home-note-content'>
      <div className='home-note-title'>笔记</div>
      <div className='home-note-desc'>目前的公开笔记都归纳在语雀知识库</div>
      <NgWord words={'点击这里前往我的语雀文档'} outlUrl={'https://www.yuque.com/klaus-rtgrx/goy4cy'} />
      <div className='home-note-desc'>感兴趣也可以关注我的掘金博文</div>
      <NgWord words={'点击这里前往'} outlUrl={'https://juejin.cn/user/4432874423729591/posts'} />
    </div>
  )
}

export default HomeNote
