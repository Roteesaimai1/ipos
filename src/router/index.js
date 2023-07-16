import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import BillView from '../views/BillView.vue'
import MenuView from '../views/MenuView.vue'
import UserView from '../views/UserView.vue'
import DevView from '../views/DevView.vue'

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
      component: OrderView
    },
    {
      path: '/Bill',
      name: 'Bill',
      component: BillView
    },
    {
      path: '/menuedit',
      name: 'menuedit',
      component: MenuView
    },
    {
      path: '/useredit',
      name: 'useredit',
      component: UserView
    },
    {
      path: '/devpage',
      name: 'devpage',
      component: DevView
    }
  ]
})

export default router
