import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './components/Hub.vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {},
        languagePreference: 'auto'
    },
    mutations: {
        createUser(state, user) {
            state.user = user
        },
        setLanguage(state, languagePreference) {
            state.languagePreference = languagePreference
        }
    },
    getters: {
        user: state => state.user,
        languagePreference: state => state.languagePreference,
        userName: state => state.user.username
    }
})