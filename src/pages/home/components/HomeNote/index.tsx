import NgWord from '../../../../Common/components/NgWord'
import './index.css'

const HomeNote = () => {
  return (
    <div className='home-note-content'>
      <div className='home-note-title'>笔记</div>
      <div className='home-note-desc'>目前的笔记都发布在掘金平台</div>
      <NgWord words={'点击这里前往'} outlUrl={'https://juejin.cn/user/4432874423729591/posts'} />
      <div className='home-note-desc'>更完整的归纳可以查看语雀知识库</div>
      <NgWord words={'点击这里前往我的语雀文档'} outlUrl={'https://www.yuque.com/klaus-rtgrx/goy4cy'} />
    </div>
  )
}

export default HomeNote
