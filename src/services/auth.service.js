import axios from 'axios'

const API_URL = 'http://localhost:4000/api/'

// const signup = (usuario, password, nombre, rol) => {
//   return axios
//     .post(API_URL + 'auth/signup', {
//       usuario,
//       password,
//       nombre,
//       rol,
//     })
//     .then((response) => {
//       if (response.data.token) {
//         localStorage.setItem('user', JSON.stringify(response.data))
//       }
//     })
// }

const signup = async (user) => {
  const { usuario, password, nombre, rol } = user
  const response = await axios.post(API_URL + 'auth/signup', {
    usuario,
    password,
    nombre,
    rol,
  })

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const login = (user, password) => {
  return axios
    .post(
      API_URL + 'auth/login',
      {
        user,
        password,
      },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then((response) => {
      if (response.data) {
        // console.log(JSON.stringify(response.data))
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
}

export default authService
