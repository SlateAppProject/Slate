<template>
  <div >
    <h1>CHAT ROOMS</h1>
    <div id="chatRooms" @click="roomSelect($event)">
      <router-link tag="div" to="/ChatRoom" class="room">
        <p id="GLOBAL CHAT"> GLOBAL CHAT </p>
      </router-link>
      <router-link tag="div" to="/ChatRoom" class="room" v-for="room in rooms">
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
    overflow: auto;
    margin: auto;
    width: 25vw;
    height: 60vh;
    border: 2px solid #2c3e50;
    border-radius: 5px;
  }
  #chatRooms::-webkit-scrollbar {
    background-color: #B7BFC7;
  }
  #chatRooms::-webkit-scrollbar-thumb {
    background-color: #2c3e50;
    border-radius: 3px;
  }
  .room:hover {
    background-color: #B7BFC7;
  }
</style>