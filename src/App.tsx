import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PAGE_URL } from './constants/page-url/router-url'
import { Project } from './pages/project'
import { About } from './pages/about'
import Me from './pages/me'
import Home from './pages/home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={PAGE_URL.HOME} element={<Home />} />
        <Route path={PAGE_URL.ME} element={<Me />} />
        <Route path={PAGE_URL.ABOUT} element={<About />} />
        <Route path={PAGE_URL.PROJECT} element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
