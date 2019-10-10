<template>
  <div>
    <Connection />
    <h1>GLOBAL CHAT</h1>
    <div id="chat-log">
      <div v-for="(message, index) in chatRoomLog" class="chat-messages" v-bind:class="message.userName === $store.getters.user.username ? 'self' : 'other'" :key="index">
        <h3>{{message.userName}}</h3>
        <p class="timestamp">{{message.timestamp}}</p>
        <img class="avatar-image" src="https://outerspace308.files.wordpress.com/2017/11/cropped-space-4-1-cpr.jpg" alt=""/>
        <p class="original-message">{{message.message}}</p>
        <p class="translated-message">{{message.translatedMessage}}</p>
      </div>
    </div>
    <MessageInput class="center"/>
  </div>
</template>

<script>

import MessageInput from './MessageInput.vue'
import Connection from './Connection.vue'

import { Auth } from 'aws-amplify'

export default {
  name: 'ChatRoom',
  components: {
    MessageInput,
    Connection
  },
  data() {
    return {
      isConnected: false,
      userName: this.$store.getters.user.username,
      UUID: this.$store.getters.user.UUID,
      languageCode: this.$store.getters.languageCode,
      chatRoomLog: []
    }
  },
  methods: {
    
    listenForMessages() {
        this.$options.sockets.onmessage = async messageEvent => {
        console.log(JSON.parse(messageEvent.body))

        let messageFromSocket = JSON.parse(messageEvent.data)

      
          let translation = await this.translateMessage(messageFromSocket.message, messageFromSocket.languageCode, this.$store.getters.languageCode)
          messageFromSocket.translatedMessage = translation.message

          this.chatRoomLog.push(messageFromSocket)
        
      }
    },
    async translateMessage(inputMessage, inputLanguage, outputLanguage) {
      const api = 'https://rgtk0416cl.execute-api.us-west-2.amazonaws.com/dev/text'
      let messageBody = {
        message: inputMessage,
        source: inputLanguage,
        destination: outputLanguage
      }
      const response = await fetch(api, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(messageBody),
        cache: 'default'
      })
      let message = response.json()

      return message
    }
  },
  mounted() {
    this.listenForMessages()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#chat-log {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
}

.chat-messages {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% auto;
  height: 25vh;
  width: 25vw;
  font-size: 2vw;
  outline: grey .1em solid;
}

.avatar-image {
  height: 5vh;
  width: 5vw;
  border-radius: 50%;
}

.self {
  justify-self: end;
}

.other {
  justify-self: start;
}

.center {
  margin: auto;
}
    
</style>