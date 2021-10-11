<template>
  <div>
    <h1 class="mb-0">Sign in</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <sign-in-form email="your@email.com" password="admin123"></sign-in-form>
  </div>
</template>

<script>

import SignInForm from './Forms/SignInForm'

export default {
  name: 'SignIn',
  components: { SignInForm },
  data: () => ({}),
  mounted () {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken !== undefined && accessToken !== null) {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
