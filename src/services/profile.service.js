import axios, { API_URL } from './index'

export default {
  getProfile () {
    return axios.get(API_URL + '/profile')
  },
  updateProfile (user) {
    return axios.put(API_URL + '/profile', {
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name
    })
  },
  deleteProfile () {
    return axios.delete(API_URL + '/profile')
  }
}
