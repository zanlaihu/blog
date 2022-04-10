import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { PAGE_URL } from './constants/page-url/router-url';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PAGE_URL.HOME} element={<Home />} />
        <Route path={PAGE_URL.ABOUT} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
