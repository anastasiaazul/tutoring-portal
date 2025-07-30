import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="m-0 p-0 ">
      <Navbar />
      <Routes>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App