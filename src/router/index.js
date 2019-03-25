import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Found from '@/components/found/Found'
import ShopCar from '@/components/shopCar/ShopCar'
import User from '@/components/user/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/found',
      name: 'found',
      component: Found
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: ShopCar
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
