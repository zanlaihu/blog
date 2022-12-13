import { Route, Routes } from 'react-router-dom'
import { PROJECT_URL } from '../../constants/router-url'
import ProjectLuckyDraw from './luckydraw'
import ProjectHome from './projectHome/index'

const Project = () => {
  return (
    <Routes>
      <Route path='' element={<ProjectHome />}></Route>
      <Route path={PROJECT_URL.LUCKYDRAW} element={<ProjectLuckyDraw />}></Route>
    </Routes>
  )
}

export default Project
