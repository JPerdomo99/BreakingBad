import Vue from 'vue'
import VueRouter from 'vue-router'
import Characters from '../views/Characters.vue'
import CharactersId from '../views/CharactersId.vue'
import Episodes from '../views/Episodes.vue'
import EpisodesId from '../views/EpisodesId.vue'
import Quotes from '../views/Quotes.vue'
import QuotesId from '../views/QuotesId.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  
    name: 'Characters',
    component: Characters
  },
  {
    path: '/Characters/:id',
    name: 'CharactersId',
    component: CharactersId
  },
  {
    path: '/Episodes',
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/Episodes/:id',
    name: 'EpisodesId',
    component: EpisodesId
  },
  {
    path: '/Quotes',
    name: 'Quotes',
    component: Quotes
  },
  {
    path: '/Quotes/:id',
    name: 'QuotesId',
    component: QuotesId
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
