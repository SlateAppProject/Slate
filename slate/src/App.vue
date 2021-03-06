<template>
  <div id="app">
    <nav id="navbar">
      <span id="banner">
        <router-link to="/Hub" id="title-link">
          <h1 id="app-title">SLATE</h1>
        </router-link>
        <Slide right>
          <router-link tag="p" to="/">
            <a>SLATE</a>
          </router-link>
          <router-link tag="p" to="/Hub">
            <a>Hub</a>
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
            this.$store.commit('setCurrentRoom', apiObject.roomId)
          })
      })
      .catch(() => this.signedIn = false)
  }
}
  
// Vue font pre built
// font-family: 'Avenir', Helvetica, Arial, sans-serif;
// Another google font option
// font-family: 'Roboto Condensed', sans-serif;

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed|Titillium+Web&display=swap');

  #app {
    font-family: 'Titillium Web', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #B7BFC7;
    min-height: 100vh;
    padding-bottom: 5vh;
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
    height: 20vh;
  }
  #app-title {
    padding-top: 5vh;
    color: #B7BFC7;
    font-weight: bold;
    font-size: 8vh;
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
  .bm-burger-bars {
    background-color: #B7BFC7;
  }
  .bm-cross {
    background: #B7BFC7;
  }
  .bm-menu {
    background-color: #183C43; /* Black*/
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list > * > a {
    margin-left: 10px;
    font-weight: 700;
    color: #B7BFC7;
  }
  #title-link:link {
    text-decoration: none;
  }
  #title-link:visited {
    text-decoration: none;
  }

  @media (max-width: 979px) {
    #current-page {
      width: 95%;
    }
  }
</style>
