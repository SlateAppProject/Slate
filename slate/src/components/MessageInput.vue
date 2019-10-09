<template>
  <div id="message-box">
    <form id="input-form"> 
        <textarea id="text-input" v-model="messageObject.message" type=text placeholder="Message..."></textarea>    
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
        languageCode: ''
      }
    }
  },
  methods: {
    sendMessage() {
        this.messageObject.userName = this.$store.getters.userName
        this.messageObject.UUID = this.$store.getters.user.pool.clientId
        this.messageObject.languageCode = this.$store.getters.languageCode
        this.messageObject.timestamp = Math.floor(Date.now() / 1000)
        this.$socket.sendObj( this.messageObject )
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#message-box {
    display: grid;
    justify-items: center;
    background-color: blue;
    outline: .1em red solid;
    height: 15vh;
    width: 50vw;
}

#input-form {
    background-color: aqua;
    outline: .1em red solid;    
}

#text-input {
    height: 10vh;
    width: 25vw;
}    
</style>