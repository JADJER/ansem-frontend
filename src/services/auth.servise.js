import axios from './index'

const API_URL = 'http://jadjer.pythonanywhere.com'

export default {
  login (user) {
    return axios
      .post(API_URL + '/auth', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  },
  logout () {
    localStorage.removeItem('user')
  },
  register (user) {
    return axios.post(API_URL + '/api/v1/profile', {
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name
    })
  }
}
