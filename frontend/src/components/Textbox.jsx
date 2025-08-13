import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Textbox = ({
  label,
  icon,
  type,
  value,
  onChange
}) => {
  return (
    <div className="my-8 ">
    <p>{label}</p>
      
       <div className="relative w-[30vw]">
       <div className="absolute left-2 top-1/2 transform -translate-y-1/2 ">
          {icon}
        </div>


      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="pl-8 pr-2 py-1 border-b-2 w-full outline-none"
      />
    </div>
    </div>
  )
}

export default Textbox
