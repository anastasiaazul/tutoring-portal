import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import TutorUpload from './pages/TutorUpload'
// App.jsx (or a top-level layout component)
import { useEffect, useState } from 'react'
import pdfService from './services/pdfs'


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = window.localStorage.getItem('loggedUser')
    if (stored) {
      const u = JSON.parse(stored)
      setUser(u)
      pdfService.setToken(u.token)
    }
  }, [])
  
  return (
    <div className="m-0 p-0 ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/tutor-upload' element={<TutorUpload/>}/>
      </Routes>
    </div>
  )
}

export default App