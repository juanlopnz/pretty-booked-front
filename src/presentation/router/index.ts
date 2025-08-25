import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../pages/auth/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/form',
      name: 'form',
      component: FormView,
    },
  ],
})

export default router
