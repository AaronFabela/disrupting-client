import React from 'react'
import LoginForm from '../components/LoginForm'
import '../styles/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className='box-form'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
