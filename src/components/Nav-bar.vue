<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand"> Login Example</router-link>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li v-if="user.authenticated"><router-link :to="{ name: 'ListCoins' }">All Coins</router-link></li>
      <li v-if="user.authenticated"><router-link to="/coins/ethereum">Ethereum</router-link></li>
      <li v-if="user.authenticated"><router-link to="/coins/bitcoin">Bitcoin</router-link></li>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="!user.authenticated"><router-link to="/login">Login</router-link></li>
      <li v-if="!user.authenticated"><router-link to="/signup">Sign Up</router-link></li>
      <li v-if="user.authenticated" @click="logout()"><router-link to="/login">Logout</router-link></li>
    </ul>
  </nav>
</template>

<script>
import auth from '../auth'

export default {
  name: 'app-nav',
  data () {
    return {
      user: auth.user
    }
  },
  methods: {
    logout () {
      auth.logout()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-right { margin-right: 0px !important}

.log {
  margin: 5px 10px 0 0;
}
</style>
