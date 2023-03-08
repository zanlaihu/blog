import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PAGE_URL } from './constants/router-url'
import Home from './pages/home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={PAGE_URL.HOME} element={<Home />} />
        {/* <Route path={PAGE_URL.ME} element={<Me />} />
        <Route path={PAGE_URL.NOTE} element={<Note />} />
        <Route path={PAGE_URL.ABOUT} element={<About />} /> */}
        {/* <Route path="/blog/project/*" element={<Project />} /> */}
        {/* <Route path={PAGE_URL.COMPONENT} element={<MyComponent />} /> */}
      </Routes>
    </div>
  )
}

export default App
