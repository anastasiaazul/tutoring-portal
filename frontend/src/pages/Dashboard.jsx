import React from 'react'
import Pdf from '../components/PDF'
import Welcome from '../components/Welcome'

const Dashboard = () => {
  const stored = JSON.parse(window.localStorage.getItem('loggedUser'))

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex flex-col items-center py-8">
      <div className="w-full max-w-3xl">
        <Welcome name={stored?.username} />
        <Pdf />
      </div>
    </div>
  )
}

export default Dashboard