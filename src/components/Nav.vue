<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark fixed-top py-1 px-2">
    <div class="container-fluid">
      <router-link class="navbar-brand js-scroll-trigger" to="/home"><img src="./../assets/img/bqafrica3.png" width="108" height="40px" title="HOME"></router-link>
      <button class="btn btn-primary d-inline-block d-lg-none mx-auto" type="button" id="sidebarCollapse" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-align-center"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="dropdown show nav-item">
            <a class="dropdown-toggle nav-link" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Who We Are
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <router-link class="dropdown-item" :to="routes.about" active-class="">About Us</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.vision" active-class="">Vision, Mission & Core Values</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.board" active-class="">Our Board</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.people" active-class="">Our People</router-link>
              </li>
            </div>
          </li>

          <li class="dropdown show nav-item">
            <a class="dropdown-toggle nav-link" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Our Initiatives
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <router-link class="dropdown-item" :to="routes.boysToo" active-class="">#BoysToo</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.guyversations" active-class="">Guyversations</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.boysSummit" active-class="">International Boys Summit</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.projectSabi" active-class="">Project SABI</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.boysAcademy" active-class="">The Boys Finishing Academy</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.campusMentour" active-class="">The Campus MenTOUR</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.digiStreet" active-class="">The Digi-Street Hub</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.exchange" active-class="">The Exchange</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="routes.oneBoyProject" active-class="">The One Boy Project</router-link>
              </li>
              <a class="dropdown-item" href="#boysCreed" data-toggle="modal">Download <b>THE BOYS CREED</b></a>
            </div>
          </li>

          <li class="dropdown show nav-item">
            <a class="dropdown-toggle nav-link" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pillars of Impact
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="./../pillars-of-impact/leadership"><b>L</b>eadership</a>
              <a class="dropdown-item" href="./../pillars-of-impact/education"><b>E</b>ducation</a>
              <a class="dropdown-item" href="./../pillars-of-impact/empowerment"><b>E</b>mpowerment</a>
              <a class="dropdown-item" href="./../pillars-of-impact/advocacy"><b>Ad</b>vocacy</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link js-scroll-trigger text-bold" href="./../boyfessions" style="">Boyfessions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger text-bold" href="./../volunteer" style="">Get Involved</a>
          </li>

          <li class="dropdown show nav-item">
            <a class="dropdown-toggle nav-link" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="./../contact/send-a-message">Send A Message</a>
              <a class="dropdown-item" href="#">Share A Story</a>
            </div>
          </li>
        </ul>
      </div>
      <a class="nav-link js-scroll-trigger btn btn-primary donate donate-brd-rad-pad donate-animate" :class="donateCount" @click="removeClass" href="donate">DONATE</a>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      donateCount: 'donate-count',
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
        oneBoyProject: { name: 'OneBoyProject' }
      }
    }
  },
  methods:{
    removeClass(){
      this.donateCount = ''
    }
  },
  mounted(){
    var navbar = document.getElementById('nav');
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        navbar.classList.add('nav-class');  
      } else {
        navbar.classList.remove('nav-class');
      }
    } 
  },
  destroyed(){
    this.donateCount
  }
}
</script>

<style scoped lang="scss">
.nav-link{
  font-size: 20px;
}
@media (min-width: 992px){
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1rem;
  }
}
.dropdown-item:focus, .dropdown-item:hover{
  border-radius: 0;
}
.nav-class{
  background: #212529;
  padding: 10px!important;
  transition: .4s;
}
</style>