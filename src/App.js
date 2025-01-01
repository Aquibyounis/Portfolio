import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home/Home';
import Links from './pages/Links/Links';
import Education from './pages/Education/Education';
import Work from './pages/Work/Work';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/links' element={<Links />} />
          <Route path='/education' element={<Education />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
