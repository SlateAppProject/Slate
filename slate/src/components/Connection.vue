<template>
  <div >
  </div>
</template>

<script>
import { ConsoleLogger } from '@aws-amplify/core'

export default {
    name: 'Connection',
    data() {
      return {
          messageObject: {
            action: 'updateconnection',
            roomId: ''
        }
      }
    },
    computed: {
        onConnectionStatusChange() {
            return this.$store.getters.connectionStatus
        }
    },
    watch: {
        onConnectionStatusChange(newState, oldState) {
            if (newState === true) {
                this.roomConnection()
                console.log('connected, supposedly')
            }
        }
    },
    methods: {
        connectToSocket() {
            return this.$connect() 
        },
        roomConnection() {
            this.messageObject.roomId = this.$store.getters.currentRoom
            this.$socket.sendObj( this.messageObject ) 
        },
        disconnectFromSocket() {
            this.$disconnect()
        }
    },
    mounted() {
        this.connectToSocket()
        this.roomConnection()
    },
    beforeDestroy() {
        this.disconnectFromSocket()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>