import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { PAGE_URL } from './constants/page-url/router-url'
import { Note } from './pages/Note'
import { Project } from './pages/Project'
import { Skill } from './pages/Skill'
import { Home } from './pages/Home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={PAGE_URL.HOME} element={<Home />} />
        <Route path={PAGE_URL.NOTE} element={<Note />} />
        <Route path={PAGE_URL.ABOUT} element={<About />} />
        <Route path={PAGE_URL.PROJECT} element={<Project />} />
        <Route path={PAGE_URL.SKILL} element={<Skill />} />
      </Routes>
    </div>
  )
}

export default App
