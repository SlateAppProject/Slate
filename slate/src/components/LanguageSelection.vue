<template>
  <div >
    <form > 
        <div>Your language is currently set to: {{ $store.getters.languageName }} </div>
        <label>Choose your language:</label>
        <select v-model="selected" @change="selectedLanguage">
            <option disabled value="">Language</option>
            <option v-for="language in languages.keys()"> {{ language }} </option>
        </select>
    </form>
  </div>
</template>

<script>
import allLanguages from '../assets/language-list.js'

export default {
    name: 'LanguageSelection',
    data() {
        return {
           selected: '',
           languages: allLanguages
        }   
    },
    methods: {
        selectedLanguage() {
            this.$store.commit('setLanguageName', this.selected)
            this.$store.commit('setLanguageCode', allLanguages.get(this.selected))

            let postBody = {
                alias: this.$store.getters.user.username,
                languagePref: this.selected,
                roomId: this.$store.getters.currentRoom
            }

            fetch(`https://y9dzb96swk.execute-api.us-west-2.amazonaws.com/dev/slate-users`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(postBody)
            })
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
