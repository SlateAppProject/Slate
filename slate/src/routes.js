import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from './components/Auth'

import AboutUs from './components/AboutUs.vue'
import Home from './components/Home'
import Hub from './components/Hub'
import ChatRoom from './components/ChatRoom'

const routes = [
  { path: '/', component: Home },
  { path: '/Auth', component: Auth },
  { path: '/Hub', component: Hub, meta: { requiresAuth: true} },
  { path: '/AboutUs', component: AboutUs },
  { path: '/ChatRoom', component: ChatRoom, meta: { requiresAuth: true} }
]

const router = new VueRouter({ routes })

router.beforeResolve((to, from, next) => {
  let user
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then(data => {
      if (data && data.signInUserSession) {
        user = data;
      }
      next()
    }).catch((e) => {
      next({
        path: '/Auth'
      });
    });
  }
  next()
})

export default router
