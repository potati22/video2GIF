import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/record',
  },
  {
    name: 'Record',
    path: '/record',
    component: () => import('@/views/record/index.vue'),
  },
  {
    name: 'Cut',
    path: '/cut',
    component: () => import('@/views/cut/index.vue'),
  },
  {
    name: 'Download',
    path: '/download',
    component: () => import('@/views/download/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
