<template>
  <div>
    <div id="hub-view">
        <div id="profile-details">
            <img id="avatar-image" src="https://outerspace308.files.wordpress.com/2017/11/cropped-space-4-1-cpr.jpg" alt=""/>
            <h1>Welcome, {{ $store.getters.user.username }}.</h1>
            <LanguageSelection />
        </div>
        <RoomsList :rooms="languages.keys()" id="chat-rooms-list"/>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

import Home from './Home.vue'
import RoomsList from './RoomsList.vue'
import LanguageSelection from './LanguageSelection.vue'
import allLanguages from '../assets/language-list.js'


export default {
    components: {
        RoomsList,
        LanguageSelection
    },
    name: 'Hub',
    data() {
        return {
            languages: allLanguages
        }   
    },
    beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.$store.commit('createUser', user)
      })
      .catch(() => console.log('not signed in...'))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #hub-view {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
    }

    #profile-details {
        grid-area: 1 / 1 / 1 / 1;
    }

    #avatar-image {
        height: 25vh;
        width: 25vh;
        border-radius: 50%;
    }

    #chat-rooms-list {
        grid-area: 1 / 2 / 1 / 2;
    }
</style>
