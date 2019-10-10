<template>
  <div id="app">
    <nav id="navbar">
      <span id="banner">
        <h1 id="app-title">SLATE</h1>
        <Slide right>
          <router-link tag="p" to="/">
            <a>Home</a>
          </router-link>
          <router-link tag="p" to="/Hub">
            <a>Hub</a>
          </router-link>
          <router-link tag="p" to="/ChatRoom" v-if="signedIn">
            <a>Chat Room</a>
          </router-link>
          <router-link tag="p" to="/Auth" v-if="!signedIn">
            <a>Sign Up / Sign In</a>
          </router-link>
          <router-link tag="p" to="/AboutUs" >
            <a>About Us</a>
          </router-link>
          <div class='sign-out'>
            <amplify-sign-out v-if="signedIn"></amplify-sign-out>
          </div>
        </Slide>  
      </span>
    </nav>
    <router-view id="current-page"/>
  </div>
</template>

<script>

import Hub from './components/Hub.vue'
import ChatRoom from './components/ChatRoom'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'
import { Slide } from 'vue-burger-menu'  

import allLanguages from './assets/language-list.js'


export default {
  name: 'app',
  components: {
    Hub,
    ChatRoom,
    Slide
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
        this.$router.push('/Hub')
      }
      if (info === 'signedOut') {
        this.$router.push('/Auth')
        this.signedIn = false
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => {
        this.signedIn = true
        this.$store.commit('createUser', user)

        return fetch( `slate-users/${user.username}`, {
          method: 'GET',
          mode: 'cors'
        })
          .then(response => response.json())
          .then(apiObject => {
            this.$store.commit('setLanguageName', apiObject.languagePref)
            this.$store.commit('setLanguageCode', allLanguages.get(apiObject.languagePref))
          })

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
    background-color: #B7BFC7;
    min-height: 100vh;
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
  #navbar {
    background-color: #2c3e50;
    height: 15vh;
  }
  #app-title {
    padding-top: 5vh;
    color: #B7BFC7;
  }
  #current-page {
    background-color: white;
    width: 80%;
    min-height: 75vh;
    margin: 5vh auto;
    border: 2px solid #183C43;
    /* GREEN FOUND ABOVE */
    border-radius: 5px;
  }
</style>
