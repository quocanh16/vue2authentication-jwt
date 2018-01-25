<template>
  <div id="app">
    <app-nav></app-nav>
    <div>
      <router-link to="/"><img src="./assets/logo.png"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import appNav from './components/Nav-bar'
export default {
  name: 'App',
  components: {
    appNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
