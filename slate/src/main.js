// Vue imports
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueNativeSock from 'vue-native-websocket'

// AWS imports
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

// File imports
import App from './App.vue'
import router from './routes'
import config from './aws-exports'
import { store } from './store'
import reset from './assets/reset.css'


Amplify.configure(config)
Vue.use(VueRouter)

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.use(VueNativeSock, 'wss://i9aw79wsv3.execute-api.us-west-2.amazonaws.com/dev', 
  { format: 'json', connectManually: true, store: store}
)

Vue.use(reset)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


