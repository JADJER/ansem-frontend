<template>
  <div>
    <h1 class="mb-0">Sign Up</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <sign-up-form></sign-up-form>
  </div>
</template>

<script>
import SignUpForm from './Forms/SignUpForm'

export default {
  name: 'SignUp',
  components: { SignUpForm },
  data: () => ({}),
  mounted () {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken !== undefined && accessToken !== null) {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
