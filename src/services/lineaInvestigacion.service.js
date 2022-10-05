import axios from 'axios'
import authHeader from './auth-header.service'

const API_URL = 'http://localhost:4000/api/'

const getLineaInvestigacion = () => {
  return axios.get(API_URL + 'lineaInvestigacion/', {
    headers: authHeader(),
  })
}

const lineaInvestigacionService = {
  getLineaInvestigacion,
}

export default lineaInvestigacionService
