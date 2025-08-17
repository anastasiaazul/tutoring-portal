import React from 'react'

const Welcome = ({name}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-4 pb-6">Welcome back, {name}! View your pdfs below.</h1>
    </div>
  )
}

export default Welcome
