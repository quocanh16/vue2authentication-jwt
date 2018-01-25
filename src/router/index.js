import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/authcomponent/Login'
import Signup from '@/components/authcomponent/Signup'
import Home from '@/components/Home'
import PageNotFound from '@/components/PageNotFound'
import Coins from '@/components/Coins/Coins'
import ListCoins from '@/components/Coins/ListCoins'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins,
      meta: {requiresAuth: true}
    },
    {
      path: '/coins',
      name: 'ListCoins',
      component: ListCoins,
      meta: {requiresAuth: true}
    },
    { path: '*',
      component: PageNotFound
    }
  ]
})
