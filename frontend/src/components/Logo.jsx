import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer flex items-center gap-4"
      onClick={() => navigate('/')}
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14 text-sky-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="#e0f2fe"/>
        <path d="M7 8h10M7 12h10M7 16h6" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className="font-sans text-4xl font-bold text-white tracking-tight">
        TutorFlow
      </span>
    </div>
  )
}
export default Logo