<template>
  <div>
    <h1>ROOM TITLE</h1>
    <div id="message-history">
      <div v-for="(message, index) in chatRoomLog" v-bind:class="message.sender ? 'self' : 'other'" :key="index">
        <p>{{ message }}</p>
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
      this.$options.sockets.onmessage = (messageEvent) => {
        // fancy stuff like translation
      this.chatRoomLog.push(JSON.parse(messageEvent.data))
      }
    },
    disconnectFromSocket() {
      this.$disconnect()
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

#message-history {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
}

.self {
  justify-self: end;
}

.other {
  justify-self: start;
}

    
</style>