import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    // name: 'Home',
    component: Home
  },
  {
    path: '/who-we-are/about-us',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/who-we-are/vision-mission-and-core-values',
    name: 'Vision',
    component: () => import('../views/VisionMission.vue')
  },
  {
    path: '/who-we-are/our-board',
    name: 'Board',
    component: () => import('../views/OurBoard.vue')
  },
  {
    path: '/who-we-are/our-people',
    name: 'People',
    component: () => import('../views/OurPeople.vue')
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GetInvolved.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition){
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
