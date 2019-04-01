import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Found from '@/components/Found/Found'
import ShopCar from '@/components/ShopCar/ShopCar'
import User from '@/components/User/User'
import News from '@/components/Home/News'
import NewsDetail from '@/components/Home/NewsDetail'
import CarPhoto from '@/components/Home/CarPhoto'
import GoodsList from '@/components/Home/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '汽车之家'
      }
    },
    {
      path: '/found',
      name: 'found',
      component: Found,
      meta: {
        title: '汽车之家'
      }
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: ShopCar,
      meta: {
        title: '汽车之家'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        title: '汽车之家'
      }
    },
    {
      path: '/home/news',
      name: 'home.news',
      component: News,
      meta: {
        title: '汽车资讯'
      }
    },
    {
      path: '/home/news/detail',
      name: 'home.news.detail',
      component: NewsDetail,
      meta: {
        title: '汽车资讯'
      }
    },
    {
      path: '/home/carPhoto/:labelId',
      name: 'home.carPhoto',
      component: CarPhoto,
      meta: {
        title: '豪车图鉴'
      }
    },
    {
      path: '/home/goods',
      name: 'home.goods',
      component: GoodsList,
      meta: {
        title: '汽车商城'
      }
    }
  ]
})
