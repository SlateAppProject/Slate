<template>
  <div class="auth">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Auth',
  beforeDestroy() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.$store.commit('createUser', user)
      })
      .catch(() => console.log('not signed in...'))
  }
}


</script>

<style>
.auth {
  margin: 0 auto;
  width: 460px;
}
</style>