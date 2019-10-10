<template>
  <div >
    <h2>CHAT ROOMS</h2>
    <div id="chatRooms" @click="roomSelect($event)">
      <router-link tag="div" to="/ChatRoom">
        <p id="GLOBAL CHAT"> GLOBAL CHAT </p>
      </router-link>
      <router-link tag="div" to="/ChatRoom" v-for="room in rooms">
          <p :id="room"> {{ room }} </p>     
      </router-link>
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
    },
    methods: {
      roomSelect(event) {
        this.$store.commit('setCurrentRoom', event.target.id)

        let postBody = {
          alias: this.$store.getters.user.username,
          languagePref: this.$store.getters.languageName,
          roomId: this.$store.getters.currentRoom
        }

        fetch(`https://y9dzb96swk.execute-api.us-west-2.amazonaws.com/dev/slate-users`, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(postBody)
        })
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