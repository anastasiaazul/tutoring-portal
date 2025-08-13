import React, { useState } from 'react'
import Textbox from '../components/Textbox'
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';
import SubmitButton from '../components/SubmitButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log("Hi There");
    try{
        if (!userName || !password)
        {
          setError("Please enter both username and password");
          return;
        }
        

        const response = await axios.post('url', { username: userName, password });
        console.log("Login Successful: ", response.data);
        navigate('/dashboard');
    }
    catch(error)
    {
      console.error("Login Failed");
      setError('Invalid username or password');

    }
  }
  return (
    <div >
        <div className="w-[40vw] h-[75vh] bg-white-500 flex  justify-center text-black text-xl m-auto mt-8 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          <div >
            <h1 className="text-center text-3xl font-bold m-8">Login</h1>
            <Textbox 
              label="Username" 
              icon={<UserIcon className="w-5 h-5"/>}
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Textbox 
              label="Password" 
              type="password" 
              icon={<LockClosedIcon className="w-5 h-5"/>}
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <SubmitButton onClick={handleLogin}></SubmitButton>
          </div>
          
          </div>
    </div>
  )
}

export default Login
