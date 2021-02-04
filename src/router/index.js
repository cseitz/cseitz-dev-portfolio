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
      title: 'Chris Seitz - Portfolio - Galactic Conquest',
      //rewrite: true,
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

const rewrites = [
  {
    path: '/hacksu-2021',
    redirect: '/portfolios/hacksu/2021',
  },
  {
    path: '/khe-2020',
    redirect: '/portfolios/khe/2020',
  },
  {
    path: '/gc',
    redirect: '/portfolio/galactic-conquest',
  },
  {
    path: '/galactic-conquest',
    redirect: '/portfolio/galactic-conquest',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  /*if (to.meta.rewrite && to.matched && to.matched[0].aliasOf) {
    next(Object.assign({
      ...to,
    }, {
        path: to.matched[0].aliasOf.path,
      }))
  } else {*/
  let rewrited = rewrites.find(({ path }) => path == to.path);
  if (rewrited) {
    location.replace(rewrited.redirect);
  } else {
    next();
  }
  //}
})

router.afterEach((to) => {
  document.title = to.meta.title || to.name || 'Hacksu';
})

export default router
