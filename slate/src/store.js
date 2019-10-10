import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './components/Hub.vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {},
        languageCode: 'auto',
        languageName: 'English',
        currentRoom: ''
    },
    mutations: {
        SOCKET_ONOPEN(state, event) {
            console.log('on open')
        },
        createUser(state, user) {
            state.user = user
        },
        setLanguageCode(state, languageCode) {
            state.languageCode = languageCode
        },
        setLanguageName(state, languageName) {
            state.languageName = languageName
        },
        setCurrentRoom(state, currentRoom) {
            state.currentRoom = currentRoom
        }
    },
    getters: {
        user: state => state.user,
        languageCode: state => state.languageCode,
        languageName: state => state.languageName,
        userName: state => state.user.username,
        currentRoom: state => state.currentRoom
    }
})