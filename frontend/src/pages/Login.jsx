import React, { useState } from 'react'
import Textbox from '../components/Textbox'
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';
import SubmitButton from '../components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import loginService from '../services/login'
import pdfService from '../services/pdfs'

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null)
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: userName, password,
      })
      setUser(user)
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      localStorage.setItem('token', user.token);  
      pdfService.setToken(user.token)
      setUsername('')
      setPassword('')
      navigate("/dashboard")
    } catch (exception) {
      setError('Wrong credentials');
      setTimeout(() => setError(''), 5000)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 px-2">
      <form 
        onSubmit={handleLogin} 
        className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-auto"
        style={{ minWidth: 0 }}
      >
        <h1 className="text-center text-3xl font-bold text-sky-900 mb-8">Login</h1>
        {error && (
          <div className="mb-4 text-red-600 text-center font-semibold">
            {error}
          </div>
        )}
        <Textbox 
          label="Username" 
          icon={<UserIcon className="w-5 h-5 text-sky-900" />}
          value={userName}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Textbox 
          label="Password" 
          type="password" 
          icon={<LockClosedIcon className="w-5 h-5 text-sky-900" />}
          value={password}
          onChange={({ target }) => setPassword(target.value)} 
        />
        <div className="mt-8">
          <SubmitButton className="bg-sky-900 text-white py-2 px-6 rounded hover:bg-sky-700 transition w-full" />
        </div>
      </form>
    </div>
  )
}

export default Login