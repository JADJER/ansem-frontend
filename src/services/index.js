import axios from 'axios'
import constant from '../config/constant'
import authToken from './auth-token'

export const API_URL = 'http://jadjer.pythonanywhere.com/api/v1'

export default axios.create({
  baseURL: constant.webBaseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: authToken()
  }
})
