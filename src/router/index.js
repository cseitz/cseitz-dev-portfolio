import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import GalacticConquest from '../views/roblox/gc/GalacticConquest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Chris Seitz'
    },
    component: Home
  },
  {
    path: '/portfolio/galactic-conquest',
    name: 'GalacticConquest',
    meta: {
      title: 'Chris Seitz - Portfolio - Galactic Conquest'
    },
    component: GalacticConquest
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    meta: {
      title: 'Chris Seitz - Portfolio'
    },
    component: Portfolio
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title || to.name || 'Hacksu';
})

export default router
