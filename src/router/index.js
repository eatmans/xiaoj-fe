import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Layout,
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [{
      path: '/index',
      name: '首页',
      component: () => import( /* webpackChunkName: "about" */ '@/views/index')
    }, {
      path: '/user',
      name: '用户中心',
      component: () =>
        import( /* webpackChunkName: "views" */ '@/views/user')
    }, {
      path: '/blog',
      name: '博客',
      component: () => import( /* webpackChunkName: "about" */ '@/views/blog')
    }, {
      path: '/tools',
      name: '工具',
      component: () => import( /* webpackChunkName: "about" */ '@/views/tools')
    }, {
      path: '/nav',
      name: '导航',
      component: () => import( /* webpackChunkName: "about" */ '@/views/nav')
    }, {
      path: '/about',
      name: '关于',
      component: () => import( /* webpackChunkName: "about" */ '@/views/about')
    }]
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router