import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-xl w-full text-center border border-sky-200">
        <div className="flex flex-col items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-sky-900 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="#e0f2fe"/>
            <path d="M7 8h10M7 12h10M7 16h6" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h1 className="text-4xl font-extrabold text-sky-900 mb-2 tracking-tight">Welcome to TutorFlow</h1>
          <p className="text-lg text-gray-700 mb-2">
            Organize, manage, and share learning resources with your students.
          </p>
        </div>
        <div className="mb-6">
          <ul className="text-left text-gray-600 text-base space-y-2 mx-auto max-w-xs">
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-sky-400 rounded-full"></span>
              Upload and assign PDFs to students
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-sky-400 rounded-full"></span>
              Students access resources instantly
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-sky-400 rounded-full"></span>
              Secure and easy-to-use dashboard
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <a
            href="/login"
            className="bg-sky-900 text-white py-2 px-6 rounded-full hover:bg-sky-700 transition font-semibold shadow"
          >
            Log In
          </a>
          
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        <span>
          TutorFlow is your all-in-one solution for personalized learning management.
        </span>
      </div>
    </div>
  )
}

export default Home