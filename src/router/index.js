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
    component: Home
  },
  // Who We Are
  {
    path: '/who-we-are/about-us',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/who-we-are/About.vue')
  },
  {
    path: '/who-we-are/vision-mission-and-core-values',
    name: 'Vision',
    component: () => import('../views/who-we-are/VisionMission.vue')
  },
  {
    path: '/who-we-are/our-board',
    name: 'Board',
    component: () => import('../views/who-we-are/OurBoard.vue')
  },
  {
    path: '/who-we-are/our-people',
    name: 'People',
    component: () => import('../views/who-we-are/OurPeople.vue')
  },

  // Our Initiatives
  {
    path: '/our-initiatives/boys-too',
    name: 'BoysToo',
    component: () => import('../views/our-initiatives/BoysToo.vue')
  },
  {
    path: '/our-initiatives/guyversations',
    name: 'Guyversations',
    component: () => import('../views/our-initiatives/Guyversations.vue')
  },
  {
    path: '/our-initiatives/international-boys-summit',
    name: 'BoysSummit',
    component: () => import('../views/our-initiatives/BoysSummit.vue')
  },
  {
    path: '/our-initiatives/project-sabi',
    name: 'ProjectSabi',
    component: () => import('../views/our-initiatives/ProjectSabi.vue')
  },
  {
    path: '/our-initiatives/the-boys-finishing-academy',
    name: 'BoysAcademy',
    component: () => import('../views/our-initiatives/BoysAcademy.vue')
  },
  {
    path: '/our-initiatives/the-campus-mentour',
    name: 'CampusMentour',
    component: () => import('../views/our-initiatives/CampusMentour.vue')
  },
  {
    path: '/our-initiatives/the-digi-street-hub',
    name: 'DigiStreet',
    component: () => import('../views/our-initiatives/DigiStreet.vue')
  },
  {
    path: '/our-initiatives/the-exchange',
    name: 'Exchange',
    component: () => import('../views/our-initiatives/Exchange.vue')
  },
  {
    path: '/our-initiatives/the-one-boy-project',
    name: 'OneBoyProject',
    component: () => import('../views/our-initiatives/OneBoyProject.vue')
  },


  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: () => import('../views/GetInvolved.vue')
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
