import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page3 from '../views/Page3.vue'
import MenuView from '../views/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3
    },
    {
      path: '/MenuView',
      name: 'MenuView',
      component: MenuView
    }
  ]
})

export default router
