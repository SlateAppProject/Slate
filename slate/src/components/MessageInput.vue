<template>
  <div id="message-box">
    <form id="input-form"> 
        <textarea id="text-input" v-model="messageObject.message" type=text placeholder="Type to chat..." required></textarea>    
        <button @click.prevent="sendMessage">SEND</button>
    </form>
  </div>
</template>

<script>
import moment from 'moment'

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
        languageCode: '',
        roomId: ''
      }
    }
  },
  methods: {
    sendMessage() {
        this.messageObject.userName = this.$store.getters.userName
        this.messageObject.UUID = this.$store.getters.user.pool.clientId
        this.messageObject.languageCode = this.$store.getters.languageCode
        this.messageObject.timestamp = moment().format('LLLL')
        this.messageObject.roomId = this.$store.getters.currentRoom
        this.$socket.sendObj( this.messageObject )
        this.messageObject.message = ''
    }
  },
  
}
</script>

<style scoped>
#message-box {
  margin: 1% auto;
  display: grid;
  justify-items: center;
  height: 15vh;
  width: 50vw;
}

#input-form {
  display: grid;
  width: 100%;
  margin: 0; 
}

#text-input {
  height: 10vh;
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgba(183,191,199,1);
  font-size: calc(12px + 1vw);
  color: #2c3e50;
}    
#text-input:focus {
    outline: none;
}

button {
  justify-self: center;
  align-self: center;
  width: 25%;
  min-width: 100px;
  margin: 1px auto;
  border-radius: 5px;
  border: none;
  background-color: #2c3e50;
  color: #B7BFC7;
  font-size: calc(12px + 1.2vw);
}

button:focus {
    outline: none;
}
button:hover {
    box-shadow: 3px 5px 10px -1px rgba(183,191,199,1);
}
</style>