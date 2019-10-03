<template>
  <span id="banner">
    <h1>SLATE</h1>
    <Slide right>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>  
  </span>
</template>

<script>
import { Slide } from 'vue-burger-menu'  

export default {
    components: {
        Slide 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #banner {
        background-color: aqua
    }
</style>
