import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-sky-900 mb-4">Welcome to the Tutoring Portal</h1>
        <p className="text-lg text-gray-700 mb-6">
          Organize, manage, and share learning resources with your students. 
          Easily upload PDFs, assign materials, and help your students succeed!
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="/login"
            className="bg-sky-900 text-white py-2 px-6 rounded hover:bg-sky-700 transition"
          >
            Log In
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Home