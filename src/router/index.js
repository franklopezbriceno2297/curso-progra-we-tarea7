import { createRouter, createWebHashHistory } from 'vue-router'

// Imports
import Home from '@/views/Home.vue'
import Distances from '@/views/Distances.vue'
import Weights from '@/views/Weights.vue'
import Teachers from '@/views/Teachers.vue'
import Temperatures from '@/views/Temperatures.vue'

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
    path: '/pesos',
    name: 'Weights',
    component: Weights
  },
  {
    path: '/temperaturas',
    name: 'Temperatures',
    component: Temperatures
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
