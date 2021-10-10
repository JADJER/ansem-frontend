import axios from './index'

const API_URL = 'http://jadjer.pythonanywhere.com/api/v1/requests'

export default {
  getAllRequests () {
    return axios.get(API_URL)
  },
  getRequest (requestId) {
    return axios.get(API_URL + '/' + requestId)
  },
  updateRequest (requestId, requestData) {
    return axios.put(API_URL + '/' + requestId, {
      country: requestData.country,
      city: requestData.city,
      address: requestData.address,
      school: requestData.school,
      score: requestData.score,
      index: requestData.index
    })
  },
  deleteRequest (requestId) {
    return axios.delete(API_URL + '/' + requestId)
  }
}
