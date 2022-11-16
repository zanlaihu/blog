import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PAGE_URL } from './constants/pageUrl/router-url'
import Me from './pages/me'
import Home from './pages/home'
import Note from './pages/note'
import Project from './pages/project'
import About from './pages/about'
import MyComponent from './pages/myComponent'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={PAGE_URL.HOME} element={<Home />} />
        <Route path={PAGE_URL.ME} element={<Me />} />
        <Route path={PAGE_URL.NOTE} element={<Note />} />
        <Route path={PAGE_URL.ABOUT} element={<About />} />
        <Route path={PAGE_URL.PROJECT} element={<Project />} />
        <Route path={PAGE_URL.COMPONENT} element={<MyComponent />} />
      </Routes>
    </div>
  )
}

export default App
