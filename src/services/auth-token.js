export default function authToken () {
  const accessToken = localStorage.getItem('access_token')

  if (accessToken) {
    return 'Bearer ' + accessToken
  } else {
    return ''
  }
}
