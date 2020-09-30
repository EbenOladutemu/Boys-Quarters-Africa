<template>
  <nav id="sidebar">
    <div id="dismiss" @click="closeSidebar">
      <i class="fas fa-times"></i>
    </div>

    <div class="sidebar-header">
      <!-- <h3>Menu</h3> -->
    </div>

    <ul class="list-unstyled components" id="sidebar-nav">
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li class="">
        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true">Who We Are <i class="fa fa-chevron-down pull-right"></i></a>
        <ul class="collapse list-unstyled" id="homeSubmenu" data-parent="#sidebar-nav">
          <li>
            <router-link :to="routes.about" active-class="active">About Us</router-link>
          </li>
          <li>
            <router-link :to="routes.vision" active-class="active">Vision, Mission & Core Values</router-link>
          </li>
          <li>
            <router-link :to="routes.board" active-class="active">Our Board</router-link>
          </li>
          <li>
            <router-link :to="routes.people" active-class="active">Our People</router-link>
          </li>
        </ul>
      </li>
      <li class="">
        <a href="#programsSubmenu" data-toggle="collapse" aria-expanded="true">Our Initiatives <i class="fa fa-chevron-down pull-right"></i></a>
        <ul class="collapse list-unstyled" id="programsSubmenu" data-parent="#sidebar-nav">
          <li>
            <router-link :to="routes.boysToo" active-class="active">#BoysToo</router-link>
          </li>
          <li>
            <router-link :to="routes.guyversations" active-class="active">Guyversations</router-link>
          </li>
          <li>
            <router-link :to="routes.boysSummit" active-class="active">International Boys Summit</router-link>
          </li>
          <li>
            <router-link :to="routes.projectSabi" active-class="active">Project SABI</router-link>
          </li>
          <li>
            <router-link :to="routes.boysAcademy" active-class="active">The Boys Finishing Academy</router-link>
          </li>
          <li>
            <router-link :to="routes.campusMentour" active-class="active">The Campus MenTOUR</router-link>
          </li>
          <li>
            <router-link :to="routes.digiStreet" active-class="active">The Digi-Street Hub</router-link>
          </li>
          <li>
            <router-link :to="routes.exchange" active-class="active">The Exchange</router-link>
          </li>
          <li>
            <router-link :to="routes.oneBoyProject" active-class="active">The One Boy Project</router-link>
          </li>
          <li>
            <a data-toggle="modal" href="#boysCreed">Download <b>THE BOYS CREED</b></a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="true">Pillars of Impact <i class="fa fa-chevron-down pull-right"></i></a>
        <ul class="collapse list-unstyled" id="pageSubmenu" data-parent="#sidebar-nav">
          <li>
            <router-link :to="routes.leadership"><b>L</b>eadership</router-link>
          </li>
          <li>
            <router-link :to="routes.education"><b>E</b>ducation</router-link>
          </li>
          <li>
            <router-link :to="routes.empowerment"><b>E</b>powerment</router-link>
          </li>
          <li>
            <router-link :to="routes.advocacy"><b>Ad</b>vocacy</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="#newsSubmenu" data-toggle="collapse" aria-expanded="true">News and Materials <i class="fa fa-chevron-down pull-right"></i></a>
        <ul class="collapse list-unstyled" id="newsSubmenu" data-parent="#sidebar-nav">
          <li>
            <router-link :to="routes.boyfessions">Boyfessions</router-link>
          </li>
          <li>
            <router-link :to="routes.blog">Blog</router-link>
          </li>
          <li>
            <router-link :to="routes.newsletters">Newsletters</router-link>
          </li>
          <li>
            <router-link :to="routes.media">Media</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/get-involved">Get Involved</router-link>
      </li>
      <li class="">
        <a href="#contactSubmenu" data-toggle="collapse" aria-expanded="true">Contact Us <i class="fa fa-chevron-down pull-right"></i></a>
        <ul class="collapse list-unstyled" id="contactSubmenu" data-parent="#sidebar-nav">
          <li>
            <a href="#">Send A Message</a>
          </li>
          <li>
            <a href="#">Share A Story</a>
          </li>
        </ul>
      </li>
    </ul>

    <!-- <ul class="list-unstyled CTAs">
      <li>
        <a href="#" class="nav-link js-scroll-trigger btn btn-primary donate" style="background-color: #bec65d">DONATE</a>
      </li>
    </ul> -->
  </nav>
</template>

<script>
import { sidebar } from '../mixins'

export default {
  data(){
    return{
      routes:{
        // Who We Are
        about:{ name: 'About' },
        vision:{ name: 'Vision' },
        board:{ name: 'Board' },
        people:{ name: 'People' },
        // Our Initiatives
        boysToo: { name: 'BoysToo' },
        guyversations: { name: 'Guyversations' },
        boysSummit: { name: 'BoysSummit' },
        projectSabi: { name: 'ProjectSabi' },
        boysAcademy: { name: 'BoysAcademy' },
        campusMentour: { name: 'CampusMentour' },
        digiStreet: { name: 'DigiStreet' },
        exchange: { name: 'Exchange' },
        oneBoyProject: { name: 'OneBoyProject' },
        // Pillars of Impact
        leadership: { name: 'Leadership' },
        education: { name: 'Education' },
        empowerment: { name: 'Empowerment' },
        advocacy: { name: 'Advocacy' },
        // News and Media
        boyfessions: { name: 'Boyfessions' },
        blog: { name: 'Blog' },
        newsletters: { name: 'Newsletters' },
        media: { name: 'Media' }
      }
    }
  },
  mixins: [ sidebar ]
}
</script>

<style>

</style>