<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="name" name="Full Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="name">Your Full Name</label>
          <input type="text" v-model="user.name" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="name" aria-describedby="emailHelp" placeholder="Your Full Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="Email" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" v-model="user.email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="email" aria-describedby="emailHelp" placeholder="Enter email">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="user.password" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="password" placeholder="Password">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" :id="formType">
          <label class="custom-control-label" :for="formType">I accept <a href="#">Terms and Conditions</a></label>
        </div>
        <button type="submit" class="btn btn-primary float-right">Sign Up</button>
      </div>
      <div class="sign-info">
          <span class="dark-color d-inline-block line-height-2">
            Already Have Account ?
            <router-link :to="{ name: 'auth.login' }" class="iq-waves-effect pr-4">
                Sign in
              </router-link>
          </span>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SignUpForm',
  props: ['formType'],
  computed: {
    ...mapGetters({
      users: 'setting/usersState'
    })
  },
  data: () => ({
    user: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      address: '',
      mobile_no: '',
      country: '',
      city: ''
    }
  }),
  methods: {
    onSubmit () {
      this.message = ''
      this.$store.dispatch('auth/register', this.user).then(
        data => {
          this.message = data.message
          this.successful = true
          this.$router.push({ name: 'auth.login' })
        },
        error => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    }
  }
}
</script>
