<template>
  <div >
    <Navbar />
    <img id="title-image" src="https://outerspace308.files.wordpress.com/2017/11/cropped-space-4-1-cpr.jpg" alt=""/>
    <form>
        <label>Username: </label>
        <input v-model="username" placeholder="Enter your name here...">
        <label>Password: </label>
        <input v-model="password" type="password" placeholder="Enter your password here...">
    </form>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Login',
  data: {
      username: "",
      password: ""
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #title-image {
        height: 50vh;
        width: 25vw;
        border-radius: 50%;
    }
</style>
