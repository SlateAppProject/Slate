<template>
  <div>
    <img src='../assets/global_chat.jpg' id="global-chat-image"/>
    <p id="app-blurb">
      Our team hails from a diverse background of heritage and experiences, we represent Nepal, Korea, the US, Poland, Africa, and many other countries.
      Our aim was to develop an app that would bring people closer together and serve to make a big world just a little bit smaller and more knowable. 
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
  #app-blurb {
    margin: .5em;
    padding: .5em;
  }
 
  #global-chat-image {
    border: .05em #2c3e50 solid;
    border-radius: .15em;
    margin: .5em;
  }
</style>