import React from 'react'


const Textbox = ({
  label,
  icon
}) => {
  return (
    <div className="my-8 ">
    <p>{label}</p>
      
       <div className="relative w-[30vw]">
       <div className="absolute left-2 top-1/2 transform -translate-y-1/2 ">
          {icon}
        </div>


      <input
        type="text"
        placeholder={label}
        className="pl-8 pr-2 py-1 border-b-2 w-full outline-none"
      />
    </div>
    </div>
  )
}

export default Textbox
