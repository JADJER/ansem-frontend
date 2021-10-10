import axios from 'axios'
import constant from '../config/constant'
import authToken from './auth-token'

const token = document.head.querySelector('meta[name="csrf-token"]') || ''

export default axios.create({
  baseURL: constant.webBaseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: authToken(),
    Origin: 'localhost:8080',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': token
  }
})
