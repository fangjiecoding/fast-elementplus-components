import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'container',
      component: () => import('../components/container/src/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/chooseIcon',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/chooseArea',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/trend',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/notification',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/menu',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/chooseTime',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/progress',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/chooseCity',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/form',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/modalForm',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/table',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/calendar',
          component: () => import('../views/Home.vue')
        }
      ]
    }
  ]
})

export default router
