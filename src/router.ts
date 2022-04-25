
import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules/base/routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router