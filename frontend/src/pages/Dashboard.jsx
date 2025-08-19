import React from 'react'
import Pdf from '../components/PDF'
import Welcome from '../components/Welcome'


const Dashboard = () => {

  const stored = JSON.parse(window.localStorage.getItem('loggedUser'))

  return (
    <div>
      <Welcome name={stored.username} />
      <Pdf/>
    </div>
  )
}

export default Dashboard
