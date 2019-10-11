import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './components/Hub.vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {},
        languageCode: 'en',
        languageName: 'English',
        currentRoom: '',
        socket: {
            isConnected: false,
            reconnectError: false,
        }
    },
    mutations: {
        SOCKET_ONOPEN(state, event) {
            Vue.prototype.$socket = event.currentTarget
            state.socket.isConnected = true            
        },
        SOCKET_ONCLOSE (state, event)  {
            state.socket.isConnected = false
        },
        SOCKET_ONMESSAGE (state, message)  {
            let todo = message
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
        currentRoom: state => state.currentRoom,
        connectionStatus: state => state.socket.isConnected
    }
})