import { is } from 'ramda'

export default class Request {
  constructor (request = {}) {
    this.id = is(Number, request.id) ? request.id : 0
    this.country = is(String, request.country) ? request.country : ''
    this.city = is(String, request.city) ? request.city : ''
    this.address = is(String, request.address) ? request.address : ''
    this.school = is(String, request.school) ? request.school : ''
    this.score = is(Number, request.score) ? request.score : 0
    this.index = is(Number, request.index) ? request.index : 0
    this.user_id = is(Number, request.user_id) ? request.user_id : 0
  }
}
