<template>
  <div>
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
    <MessageInput />
  </div>
</template>

<script>
import MessageInput from './MessageInput.vue'

export default {
  name: 'ChatRoom',
  components: {
    MessageInput
  },
  data() {
    return {
      isConnected: false,
      userName: this.$store.getters.user.username,
      UUID: this.$store.getters.user.UUID,
      languagePreference: this.$store.getters.languagePreference,
      chatRoomLog: []
    }
  },
  methods: {
    connectToSocket() {
      this.$connect()
    },
    listenForMessages() {
      this.$options.sockets.onmessage = async (messageEvent) => {
        let messageFromSocket = JSON.parse(messageEvent.data)

        let translation = await this.translateMessage(messageFromSocket.message, messageFromSocket.languagePreference, 'en')
        messageFromSocket.translatedMessage = translation.message

        this.chatRoomLog.push(messageFromSocket)
      }
    },
    disconnectFromSocket() {
      this.$disconnect()
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
  beforeMount() {
    this.connectToSocket()
    this.listenForMessages()
  },
  beforeDestroy() {
    this.disconnectFromSocket()
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

    
</style>