import React from 'react'
import Pdf from '../components/PDF'
import Welcome from '../components/Welcome'
const Dashboard = () => {
  return (
    <div>
      <Welcome name="Cassandra"/>
      <Pdf/>
    </div>
  )
}

export default Dashboard
