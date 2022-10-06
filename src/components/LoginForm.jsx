import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'
import useAuth from '../hooks/useAuth'
// import { FaUserCircle } from 'react-icons/fa'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
  })
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  // localStorage.clear()
  // setAuth({})

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // navigate('/home')
    try {
      e.preventDefault()
      const response = await AuthService.login(
        credentials.user,
        credentials.password
      )
      const { nombre, usuario, rol, idUsuario, token } = response
      // const rol = response?.user?.rol
      setAuth({ nombre, usuario, rol, idUsuario, token })
      navigate('/home')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setAuth({})
    localStorage.removeItem('user')
  }, [])

  return (
    <>
      <div class='login-container'>
        <div class='login-info-container'>
          <h1 class='title'>Log in with</h1>
          <form class='inputs-container'>
            <input
              class='input'
              type='text'
              placeholder='Username'
              name='user'
              value={credentials.user}
              onChange={(e) => handleChange(e)}
            />
            <input
              class='input'
              type='password'
              placeholder='Password'
              name='password'
              value={credentials.password}
              onChange={(e) => handleChange(e)}
            />
            <button class='btn' onClick={(e) => handleSubmit(e)}>
              login
            </button>
          </form>
        </div>
        <img class='image-container' src='images/login.svg' alt='' />
      </div>
    </>
  )
}

export default LoginForm
