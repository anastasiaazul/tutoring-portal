import React from 'react'

const SubmitButton = (
  {
    onClick,
    className = ""
  }
) => {
  return (
    <button
      type="submit"
      className={`bg-sky-900 text-white w-full h-12 rounded hover:bg-sky-700 transition my-4 font-semibold ${className}`}
      onClick={onClick}
    >
      Submit
    </button>
  )
}

export default SubmitButton