<template>
  <div>
    <h1>ROOM TITLE</h1>
    <div id="message-history">
      <div v-for="(message, index) in messages" v-bind:class="message.sender ? 'self' : 'other'" :key="index">
        <h2>{{ message.username }}</h2>
        <p>{{ message.original }}</p>
        <p>{{ message.translation }}</p>
      </div>
    </div>
    <div>
      <form>
        <input type=text placeholder="type here">
      </form>
      <button v-on:click="sendMessage">click me</button>
      <p>{{ chatRoomLog }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatRoom',
  data() {
    return {
      messages: [
        {
          username: "marisha",
          original: "test",
          translation: "blablabla",
          sender: true
        },
        {
          username: "marisha",
          original: "second message",
          translation: "also more stuff",
          sender: false
        }
      ],
      isConnected: false,
      chatRoomLog: []
    }
  },
  props: {
    
  },
  methods: {
    connectToSocket() {
      this.$connect()
    },
    sendMessage() {
      this.$socket.sendObj( {"action":"sendmessage", "data":"hello"})
    },
    listenForMessages() {
      this.$options.sockets.onmessage = (messageEvent) => {
        // fancy stuff like translation
        this.chatRoomLog.push(messageEvent.data)
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