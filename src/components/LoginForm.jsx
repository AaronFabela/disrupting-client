import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'
import useAuth from '../hooks/useAuth'
import logo from '../images/logotipo_ipn.png'
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
    <div className='login-form'>
      <img className='logo-login' src={logo} alt='Holas' />
      <h2 style={{ marginTop: '0' }}>Bienvenido</h2>
      <div className='form'>
        {/* <FaUserCircle style={{ color: '#6c1d45', fontSize: '15px' }} /> */}
        <input
          type='text'
          placeholder='Usuario'
          name='user'
          value={credentials.user}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={credentials.password}
          onChange={(e) => handleChange(e)}
        />
        <button className='btn-enviar' onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginForm
