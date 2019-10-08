<template>
  <div>
    <form > 
        <p>{{this.$store.getters.user.userName}}</p>
        <p>{{this.$store.getters.user.UUID}}</p>
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
        userName: this.$store.getters.userName,
        UUID: this.$store.getters.user.UUID,
        message: '',
        timestamp: '',
        action: 'sendmessage',
        languagePreference: this.$store.getters.languagePreference
      }
    }
  },
  methods: {
    sendMessage() {
        console.log(this.messageObject)
        this.messageObject.timestamp = Math.floor(Date.now() / 1000)
        const messageJSONString = JSON.stringify(this.messageObject);
        this.$socket.sendObj( messageJSONString )
        console.log(messageJSONString)
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    
</style>