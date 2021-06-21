import { createRouter, createWebHashHistory } from 'vue-router'

// Imports
import Home from '@/views/Home.vue'
import Distances from '@/views/Distances.vue'
import Teachers from '@/views/Teachers.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/distancias',
    name: 'Distances',
    component: Distances
  },
  {
    path: '/profesores',
    name: 'Teachers',
    component: Teachers
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
