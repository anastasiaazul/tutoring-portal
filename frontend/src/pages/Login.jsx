import React from 'react'
import Textbox from '../components/Textbox'
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';
import SubmitButton from '../components/SubmitButton';



const Login = () => {
  return (
    <div >
        <div className="w-[40vw] h-[75vh] bg-white-500 flex  justify-center text-black text-xl m-auto mt-8 shadow-[0_1px_10px_rgba(0,0,0,0.1)] ">
          <div flex flex-col>
            <h1 className="text-center text-3xl font-bold m-8">Login</h1>
            <Textbox label="Username" icon={<UserIcon className="w-5 h-5" />}/>
            <Textbox label="Password" icon={<LockClosedIcon className="w-5 h-5" />}/>
            <SubmitButton></SubmitButton>
          </div>
          
          </div>
    </div>
  )
}

export default Login
