import { Route, Routes } from 'react-router-dom'
import ProjectLuckyDraw from './pages/luckydraw'
import ProjectHome from './pages/projectHome/index'

const Project = () => {
  return (
    <Routes>
      <Route path='' element={<ProjectHome />}></Route>
      <Route path='lucky-draw' element={<ProjectLuckyDraw />}></Route>
    </Routes>
  )
}

export default Project
