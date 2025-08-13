import React from 'react'

const SubmitButton = (
  {
    onClick
  }
) => {
  return (
    <div>
      <button className="bg-gray-950 text-white w-[35vw] h-12 hover:bg-sky-600 rounded-sm my-8" onClick={onClick}>Submit</button>
    </div>
  )
}

export default SubmitButton
