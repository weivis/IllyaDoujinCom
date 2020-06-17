import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '../layout/Layout'

const routes = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {title:'首页'}
      },
    ]
  },
  {
    path: '/bangumi',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'listbangumi',
        component: () => import('@/views/bangumi/listbangumi.vue'),
        meta: {title:'番剧管理'}
      },
      {
        path: 'add',
        name: 'addbangumi',
        component: () => import('@/views/bangumi/addbangumi.vue'),
        meta: {title:'添加番剧'}
      },
      {
        path: 'cv',
        name: 'cvlist',
        component: () => import('@/views/bangumi/cv.vue'),
        meta: {title:'CV管理'}
      },
      {
        path: 'edit',
        name: 'editbangumi',
        component: () => import('@/views/bangumi/editbangumi.vue'),
        meta: {title:'CV管理'}
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
