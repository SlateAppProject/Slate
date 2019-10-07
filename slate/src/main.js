import Vue from 'vue'
import VueRouter from 'vue-router'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import VueNativeSock from 'vue-native-websocket'

import App from './App.vue'
import router from './routes'
import config from './aws-exports'

Amplify.configure(config)
Vue.use(VueRouter)
Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(VueNativeSock, 'wss://i9aw79wsv3.execute-api.us-west-2.amazonaws.com/dev', 
  { format: 'json', connectManually: true }
)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
