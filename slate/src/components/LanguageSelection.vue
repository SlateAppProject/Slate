<template>
  <div >
    <form > 
        <select v-model="selected" @change="selectedLanguage">
            <option disabled value="">Select your language preference...</option>
            <option v-for="language in languages.keys()"> {{ language }} </option>
        </select>
        <span>Selected Language: {{ selected }} </span>
    </form>
  </div>
</template>

<script>

export default {
    name: 'LanguageSelection',
    data() {
        return {
           selected: '',
           languages: new Map([
               [ 'Arabic', 'ar' ],
               [ 'Chinese(Simplified)', 'zh' ],
               [ 'Chinese(Traditional)', 'zh-TW' ],
               [ 'Czech', 'cs' ],
               [ 'Danish', 'da' ],
               [ 'Dutch', 'nl' ],
               [ 'English', 'en' ],
               [ 'Finnish', 'fi' ],
               [ 'French', 'fr' ],
               [ 'German', 'de' ],
               [ 'Greek', 'el' ],
               [ 'Hebrew', 'he' ],
               [ 'Hindi', 'hi' ],
               [ 'Hungarian', 'hu' ],
               [ 'Indonesian', 'id' ],
               [ 'Italian', 'it' ],
               [ 'Japanese', 'ja' ],
               [ 'Korean', 'ko' ],
               [ 'Malay', 'ms' ],
               [ 'Norwegian', 'no' ],
               [ 'Persian', 'fa' ],
               [ 'Polish', 'pl' ],
               [ 'Portuguese', 'pt' ],
               [ 'Romanian', 'ro' ],
               [ 'Russian', 'ru' ],
               [ 'Spanish', 'es' ],
               [ 'Swedish', 'sv' ],
               [ 'Thai', 'th' ],
               [ 'Turkish', 'tr' ],
               [ 'Ukranian', 'uk' ],
               [ 'Urdu', 'ur' ],
               [ 'Vietnamese', 'vi' ]
           ])
        }   
    },
    methods: {
        selectedLanguage() {
            console.log('Selected language')
            this.$store.commit('setLanguage', this.languages.get(this.selected))
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
