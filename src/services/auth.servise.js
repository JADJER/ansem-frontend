import axios, { API_URL } from './index'

export default {
  login (user) {
    return axios
      .post(API_URL + '/auth', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('access_token', response.data.access_token)
        }
        return response.data.access_token
      })
  },
  logout () {
    localStorage.removeItem('user')
  },
  register (user) {
    return axios.post(API_URL + '/profile', {
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name
    })
  }
}
