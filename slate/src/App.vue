<template>
  <div id="app">
    <Navbar/>
    <nav>
      <router-link to="/Login">Login</router-link>
      <router-link to="/AboutUs">About Us</router-link>
    </nav>
    <div  class='nav'>
      <router-link tag="p" to="/">
        <a>Home</a>
      </router-link>
      <router-link tag="p" to="/Hub">
        <a>Hub</a>
      </router-link>
      <router-link tag="p" to="/protected">
        <a>Protected</a>
      </router-link>
      <router-link tag="p" to="/ChatRoom" v-if="signedIn">
        <a>Chat Room</a>
      </router-link>
      <router-link tag="p" to="/auth" v-if="!signedIn">
        <a>Sign Up / Sign In</a>
      </router-link>
    </div>
    <div class='sign-out'>
      <amplify-sign-out v-if="signedIn"></amplify-sign-out>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hub from './components/Hub.vue'
import ChatRoom from './components/ChatRoom'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'


export default {
  name: 'app',
  components: {
    Navbar,
    Hub,
    ChatRoom
  },
  data() {
    return {
      signedIn: false
    }
  },
  beforeCreate() {
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.signedIn = true
        this.$router.push('/profile')
      }
      if (info === 'signedOut') {
        this.$router.push('/auth')
        this.signedIn = false
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => {
        this.signedIn = true
      })
      .catch(() => this.signedIn = false)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  display: flex;
}
.nav p {
  padding: 0px 30px 0px 0px;
  font-size: 18px;
  color: #000;
}
.nav p:hover {
  opacity: .7;
}
.nav p a {
  text-decoration: none;
}
.sign-out {
  width: 160px;
  margin: 0 auto;
}
</style>
