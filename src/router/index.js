import Layout from '@/Layout/index.vue'
import dashboard from '@/pages/dashboard/index.vue'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: 'preview',
        name: 'preview',
        component: () => import('@/pages/preview/index.vue')
      }
    ]
  },

]

export default new Router({
  routes
})