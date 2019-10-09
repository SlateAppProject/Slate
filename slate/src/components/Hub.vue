<template>
  <div id="hub-view">
    <div id="profile-details">
        <img id="avatar-image" src="https://outerspace308.files.wordpress.com/2017/11/cropped-space-4-1-cpr.jpg" alt=""/>
        <h1>{{ $store.getters.user.username.toUpperCase() }}</h1>
        <LanguageSelection />
    </div>
    <RoomsList :rooms="chatRooms" id="chat-rooms-list"/>
  </div>
</template>

<script>

import Home from './Home.vue'
import RoomsList from './RoomsList.vue'
import LanguageSelection from './LanguageSelection.vue'

import { Auth } from 'aws-amplify'

export default {
    components: {
        RoomsList,
        LanguageSelection
    },
    name: 'Hub',
    data() {
        return {
            chatRooms: [
                'German',
                'Spanish',
                'Urdu',
                'Swahili',
                'Arabic',
                'Chine',
                'Russian',
                'Farsi'
            ],
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
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto auto;
    }

    #profile-details {
        grid-area: 1 / 1 / 1 / 1;
    }

    #avatar-image {
        height: 25vh;
        width: 25vw;
        border-radius: 50%;
    }

    #favorite-rooms-list {
        grid-area: 2 / 1 / 2 / 1;

    }

    #chat-rooms-list {
        
    }
</style>
