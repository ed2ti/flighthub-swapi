import { createRouter, createWebHistory } from 'vue-router'
import People from '../views/PeopleView.vue'
import Starships from '../views/StarshipsView.vue'
import Planets from '../views/PlanetsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: People
  },
  {
    path: '/starships',
    name: 'starships',
    component: Starships
  },
  {
    path: '/planets',
    name: 'planets',
    component: Planets
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
