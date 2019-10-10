<template>
  <div >
    <h2>CHAT ROOMS</h2>
    <div id="chatRooms">
      <div>
        <p> ALL CHAT </p>
      </div>
      <div v-for="(room, index) in rooms" :key="index">
          <p> {{ room }} </p>     
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'RoomsList',
    props: {
        rooms: {
            type: Array,
            required: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #chatRooms {
    overflow: scroll;
    margin: auto;
    width: 25vw;
    height: 60vh;
    outline: 3px solid black;
  }
</style>