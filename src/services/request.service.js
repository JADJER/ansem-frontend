import axios, { API_URL } from './index'

export default {
  getAllRequests () {
    return axios.get(API_URL + '/requests')
  },
  getRequest (requestId) {
    return axios.get(axios + '/requests/' + requestId)
  },
  updateRequest (requestId, requestData) {
    return axios.put(API_URL + '/requests/' + requestId, {
      country: requestData.country,
      city: requestData.city,
      address: requestData.address,
      school: requestData.school,
      score: requestData.score,
      index: requestData.index
    })
  },
  deleteRequest (requestId) {
    return axios.delete(API_URL + '/requests/' + requestId)
  }
}
