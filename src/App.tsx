import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PAGE_URL } from './constants/page-url/router-url'
import { Note } from './pages/note'
import { Project } from './pages/project'
import { Skill } from './pages/skill'
import { Home } from './pages/home'
import { About } from './pages/about'
import Me from './pages/me'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={PAGE_URL.HOME} element={<Home />} />
        <Route path={PAGE_URL.ME} element={<Me />} />
        <Route path={PAGE_URL.NOTE} element={<Note />} />
        <Route path={PAGE_URL.ABOUT} element={<About />} />
        <Route path={PAGE_URL.PROJECT} element={<Project />} />
        <Route path={PAGE_URL.SKILL} element={<Skill />} />
      </Routes>
    </div>
  )
}

export default App
