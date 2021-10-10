import axios from './index'

const API_URL = 'http://jadjer.pythonanywhere.com/api/v1/profile'

export default {
  getProfile () {
    return axios.get(API_URL)
  },
  updateProfile (user) {
    return axios.put(API_URL, {
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name
    })
  },
  deleteProfile () {
    return axios.delete(API_URL)
  }
}
