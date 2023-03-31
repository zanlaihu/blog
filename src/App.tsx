import { PAGE_URL } from 'src/constants/router-url'
import Home from 'src/pages/home'
import { Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={PAGE_URL.HOME} element={<Home />} />
        {/* <Route path={PAGE_URL.ME} element={<Me />} />
        <Route path={PAGE_URL.NOTE} element={<Note />} />
        <Route path={PAGE_URL.ABOUT} element={<About />} />
        <Route path="/blog/project/*" element={<Project />} />
        <Route path={PAGE_URL.COMPONENT} element={<MyComponent />} /> */}
      </Routes>
    </div>
  )
}

export default App
