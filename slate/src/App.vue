<template>
  <div id="app">
    <Navbar/>
    <nav>
      <router-link to="/Login">Login</router-link>
      <router-link to="/AboutUs">About Us</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
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
  margin-top: 60px;
}
</style>
