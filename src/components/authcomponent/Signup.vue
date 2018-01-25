<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign Up</h2>
    <p>Sign up to your account to get some great quotes.</p>
    <div class="alert lert-dancer" v-if="error">
      <p>{{error}}</p>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placehoder="Enter your username" v-model="credentials.username">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placehoder="Enter your password" v-model="credentials.password">
    </div>
    <button class="btn btn-primary" @click="submit()">Sign Up</button>
  </div>
</template>

<script>
import auth from '../../auth'
export default {
  name: 'Signup',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    submit () {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login_or_signup('signup', this, credentials, '/')
    }
  }
}
</script>

<style>

</style>
