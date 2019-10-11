<template>
  <div>
    <Connection />
    <h1>{{$store.getters.currentRoom ? $store.getters.currentRoom : 'PLEASE RETURN TO HUB'}}</h1>
    <div id="chat-log">
      <div v-for="(message, index) in chatRoomLog" class="chat-messages" v-bind:class="message.userName === $store.getters.user.username ? 'self' : 'other'" :key="index">
        <div class="mini-flex">
        <!-- <img class="avatar-image" src="https://outerspace308.files.wordpress.com/2017/11/cropped-space-4-1-cpr.jpg" alt="profile"/> -->
          <h3 class="username">{{message.userName}}</h3>
          <p class="timestamp">{{message.timestamp}}</p>
        </div>
        <hr/>
        <div class="mini-flex">
          <h4 class="explanation">Original ({{message.languageCode}}):</h4>
          <p class="original-message">{{message.message}}</p>
        </div>
        <hr/>
        <div class="mini-flex">
          <h4 class="explanation">Translation:</h4>
          <p class="translated-message">{{message.translatedMessage}}</p>
        </div>
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

            let current = this.$store.getters.currentRoom
            translationOutputLang = this.languages.get(this.$store.getters.currentRoom)
          }

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
  background-color: white;
  border: 2px solid rgba(183,191,199,1);
  box-shadow: inset 3px 5px 10px -1px rgba(183,191,199,1);
  border-radius: 10px;
  /* align-content: flex-start; */
}

.mini-flex {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.chat-messages {
  flex-basis: 0;
  text-align: left;
  width: 40vw;
  font-size: 2vw;
  background-color: white;
  border: 2px solid rgba(183,191,199,1);
  box-shadow: 3px 5px 10px -1px rgba(183,191,199,1);
  margin: 5px 10px;
  border-radius: 10px;
}

.username {
  display: inline-block;
  margin-left: 3%;
  font-size: calc(10px + 1vw);
}

.timestamp {
  display: inline-block;
  font-size: calc(10px + .5vw);
  margin-right: 3%;
}

.original-message {
  width: 80%;
  font-size: calc(10px + 1vw);
}

.translated-message {
  width: 78%;
  font-size: calc(10px + 1vw);
}

.avatar-image {
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  margin-left: 5%;
  margin-right: -5%;
}

.self {
  align-self: flex-end;
}

.other {
  align-self: flex-start;
}

.center {
  margin: 2% auto;
}

.explanation {
  text-align: left;
  font-size: calc(10px + .5vw);
  font-weight: bold;
  width: 22%;
  margin-top: 3px;
  align-self: flex-start;
  margin-left: 2%;
}

hr {
  margin: 5px;
  border: 1px solid rgba(183,191,199,1);
}

@media (max-width: 979px) {
    .chat-messages {
      width: 80%;
    }
    .username {
      width: 40%;
    }
    .explanation {
      width: 30%;
    }
    .original-message {
      width: 70%;
    }
    .translated-message {
      width: 70%;
    }
}
    
</style>