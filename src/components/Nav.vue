<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-1 px-2">
    <div class="container-fluid">
      <a class="navbar-brand js-scroll-trigger" href="./../home"><img src="./../assets/img/bqafrica3.png" width="108" height="40px" title="HOME"></a>
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
                <router-link to="" active-class="active">About Us</router-link>
              </li>
              <a class="dropdown-item" href="./../who-we-are/about-us">About Us</a>
              <a class="dropdown-item" href="./../who-we-are/vision-and-mission">Vision & Mission</a>
              <a class="dropdown-item" href="./../who-we-are/board-members">Board Members</a>
              <a class="dropdown-item" href="./../who-we-are/execution-team">Execution Team</a>
            </div>
          </li>

          <li class="dropdown show nav-item">
            <a class="dropdown-toggle nav-link" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Our Programs
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="./../our-programs/the-boys-too">The #BoysToo</a>
              <a class="dropdown-item" href="./../our-programs/yahoo-project">YAHOO Project</a>
              <a class="dropdown-item" href="./../our-programs/the-boys-talk">The Boys Talk</a>
              <a class="dropdown-item" href="./../our-programs/campus-mentour" style="text-transform: none!important;">CAMPUS MENtour</a>
              <a class="dropdown-item" href="#">Boy-Lead Academy</a>
              <a class="dropdown-item" href="#">One Boy Project</a>
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
            <a class="nav-link js-scroll-trigger text-bold" href="./../boyfessions" style="">BOYFESSIONS</a>
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
      <a class="nav-link js-scroll-trigger btn btn-primary donate donate-brd-rad-pad donate-animat" :class="donateCount" @click="removeClass" href="donate">DONATE</a>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>

<script>
export default {
  data(){
    return{
      donateCount: 'donate-count'
    }
  },
  methods:{
    removeClass(){
      this.donateCount = ''
    }
  },
  destroyed(){
    this.donateCount
  }
}
</script>

<style scoped lang="scss">
.nav-link{
  font-size: 17px;
}
@media (min-width: 992px){
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1rem;
  }
}
</style>