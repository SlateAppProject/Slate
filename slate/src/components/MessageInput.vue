<template>
  <div>
    <form > 
        <!-- <p>{{this.$store.getters.userName}}</p> -->
        <!-- <p>{{this.$store.getters.user.pool.clientId}}</p> -->
        <textarea v-model="messageObject.message" type=text placeholder="Message..."></textarea>    
        <button @click.prevent="sendMessage">SEND</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'MessageInput',
  data() {
      return {
      messageObject: {
        action: 'sendmessage',
        userName: '',
        UUID: '',
        message: '',
        timestamp: '',
        languagePreference: this.$store.getters.languagePreference
      }
    }
  },
  methods: {
    sendMessage() {
        this.messageObject.userName = this.$store.getters.userName
        this.messageObject.UUID = this.$store.getters.user.pool.clientId
        this.messageObject.timestamp = Math.floor(Date.now() / 1000)
        this.$socket.sendObj( this.messageObject )
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    
</style>