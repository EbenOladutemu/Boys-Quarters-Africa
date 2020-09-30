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

  // Pillars of Impact
  {
    path: '/pillars-of-impact/leadership',
    name: 'Leadership',
    component: () => import('../views/pillars-of-impact/Leadership.vue')
  },
  {
    path: '/pillars-of-impact/education',
    name: 'Education',
    component: () => import('../views/pillars-of-impact/Education.vue')
  },
  {
    path: '/pillars-of-impact/empowerment',
    name: 'Empowerment',
    component: () => import('../views/pillars-of-impact/Empowerment.vue')
  },
  {
    path: '/pillars-of-impact/advocacy',
    name: 'Advocacy',
    component: () => import('../views/pillars-of-impact/Advocacy.vue')
  },

  // News and Materials
  {
    path: '/news-and-materials/boyfessions',
    name: 'Boyfessions',
    component: () => import('../views/news-and-materials/Boyfessions.vue')
  },
  {
    path: '/news-and-materials/blog',
    name: 'Blog',
    component: () => import('../views/news-and-materials/Blog.vue')
  },
  {
    path: '/news-and-materials/newsletters',
    name: 'Newsletters',
    component: () => import('../views/news-and-materials/Newsletters.vue')
  },
  {
    path: '/news-and-materials/media',
    name: 'Media',
    component: () => import('../views/news-and-materials/Media.vue')
  },



  // #BoysToo
  {
    path: '/our-initiatives/boys-too/abuja',
    name: 'BoysTooAbuja',
    component: () => import('../views/our-initiatives/BoysTooProjects/Abuja.vue')
  },
  {
    path: '/our-initiatives/boys-too/akungba',
    name: 'BoysTooAkungba',
    component: () => import('../views/our-initiatives/BoysTooProjects/Akungba.vue')
  },
  {
    path: '/our-initiatives/boys-too/akure',
    name: 'BoysTooAkure',
    component: () => import('../views/our-initiatives/BoysTooProjects/Akure.vue')
  },
  {
    path: '/our-initiatives/boys-too/ibadan',
    name: 'BoysTooIbadan',
    component: () => import('../views/our-initiatives/BoysTooProjects/Ibadan.vue')
  },
  {
    path: '/our-initiatives/boys-too/ife',
    name: 'BoysTooIfe',
    component: () => import('../views/our-initiatives/BoysTooProjects/Ife.vue')
  },
  {
    path: '/our-initiatives/boys-too/ikare',
    name: 'BoysTooIkare',
    component: () => import('../views/our-initiatives/BoysTooProjects/Ikare.vue')
  },



  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: () => import('../views/GetInvolved.vue')
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import('../views/Donate.vue')
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
