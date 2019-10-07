import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from './components/Auth'

import Login from './components/Login.vue'
import AboutUs from './components/AboutUs.vue'
import Protected from './components/Protected'
import Home from './components/Home'
import Profile from './components/Profile'
import Hub from './components/Hub'
import ChatRoom from './components/ChatRoom'

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/protected', component: Protected, meta: { requiresAuth: true} },
  { path: '/profile', component: Profile, meta: { requiresAuth: true} },
  { path: '/Hub', component: Hub, meta: { requiresAuth: true} },
  { path: '/Login', component: Login },
  { path: '/AboutUs', component: AboutUs },
  { path: '/ChatRoom', component: ChatRoom }
]

const router = new VueRouter({ routes })

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then(data => {
      if (data && data.signInUserSession) {
        user = data;
      }
      next()
    }).catch((e) => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router
