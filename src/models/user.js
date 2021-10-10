import { is } from 'ramda'

export default class User {
  constructor (user = {}) {
    this.id = is(Number, user.id) ? user.id : 0
    this.email = is(String, user.email) ? user.email : ''
    this.first_name = is(String, user.first_name) ? user.first_name : ''
    this.last_name = is(String, user.last_name) ? user.last_name : ''
    this.isActive = is(Boolean, user.isActive) ? user.isActive : false
  }
}
