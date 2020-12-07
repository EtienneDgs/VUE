import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signin from '../views/Signin.vue'
import Dashboard from '../views/Dashboard.vue'
import Register from '../views/Register.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/inscription',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'Signin'
        });
      }
      next();
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
