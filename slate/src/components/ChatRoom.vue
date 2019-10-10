<template>
  <div>
    <Connection />
    <h1>{{$store.getters.currentRoom}}</h1>
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
import allLanguages from '../assets/language-list.js'

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
      chatRoomLog: [],
      languages: allLanguages
    }
  },
  methods: {
    
    listenForMessages() {
        this.$options.sockets.onmessage = async messageEvent => {
        let messageFromSocket = JSON.parse(messageEvent.data)
        if (messageFromSocket.message === 'Internal server error'){

        } else {
          let translationOutputLang = this.$store.getters.languageCode
          if (this.$store.getters.currentRoom !== 'GLOBAL CHAT') {
            console.log(this.$store.getters.currentRoom)
            console.log(this.languages.get(this.$store.getters.currentRoom))
            let current = this.$store.getters.currentRoom
            console.log('German' == `${current}`)
            translationOutputLang = this.languages.get(this.$store.getters.currentRoom)
          }

          console.log("message lang " + messageFromSocket.languageCode)
          console.log('output lang ' + translationOutputLang)

          let translation = await this.translateMessage(messageFromSocket.message, messageFromSocket.languageCode, translationOutputLang)
          messageFromSocket.translatedMessage = translation.message

          this.chatRoomLog.unshift(messageFromSocket)
        }
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
  display: flex;
  flex-direction: column-reverse;
  height: 50vh;
  width: 90%;
  margin: auto;
  overflow: auto;
  background-color: #B7BFC7;
  border-radius: 10px;
  align-content: stretch;
}

.chat-messages {
  height: 25vh;
  width: 25vw;
  font-size: 2vw;
  background-color: white;
  margin: 5px 10px;
  border-radius: 10px;
}

.avatar-image {
  height: 5vh;
  width: 5vw;
  border-radius: 50%;
}

.self {
  align-self: flex-end;
}

.other {
  align-self: flex-end;
}

.center {
  margin: auto;
}
    
</style>