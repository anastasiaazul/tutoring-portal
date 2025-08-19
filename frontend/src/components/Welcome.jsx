import React from 'react'

const Welcome = ({ name }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-sky-900 text-center pt-4 pb-2">
        Welcome back, {name}!
      </h1>
      <p className="text-lg text-gray-700 text-center">
        View your assigned PDFs below.
      </p>
    </div>
  )
}
export default Welcome