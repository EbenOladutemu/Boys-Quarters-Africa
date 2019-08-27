Vue.component('sidebar',{
  template:`<nav id="sidebar" class="sb-mg-top">
      <div id="dismiss">
        <i class="fas fa-times"></i>
      </div>

      <div class="sidebar-header">
        <h3>Menu</h3>
      </div>

      <ul class="list-unstyled components" id="sidebar-nav">
        <li>
          <a href="./../home">Home</a>
        </li>
        <li class="">
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true">Who We Are <i class="fa fa-chevron-down pull-right"></i></a>
          <ul class="collapse list-unstyled" id="homeSubmenu" data-parent="#sidebar-nav">
            <li>
              <a href="./../who-we-are/about-us">About Us</a>
            </li>
            <li>
              <a href="./../who-we-are/birthing-story">Birthing Story</a>
            </li>
            <li>
              <a href="./../who-we-are/vision-and-mission">Vision & Mission</a>
            </li>
            <!-- <li>
              <a href="./../who-we-are/core-values">Core Values</a>
            </li> -->
            <li>
              <a href="./../who-we-are/board-members">Board Members</a>
            </li>
            <li>
              <a href="./../who-we-are/execution-team">Execution Team</a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="#programsSubmenu" data-toggle="collapse" aria-expanded="true">Our Programs <i class="fa fa-chevron-down pull-right"></i></a>
          <ul class="collapse list-unstyled" id="programsSubmenu" data-parent="#sidebar-nav">
            <li>
              <a href="./../our-programs/the-boys-too">The #BoysToo</a>
            </li>
            <li>
              <a href="./../our-programs/yahoo-project">YAHOO Project</a>
            </li>
            <li>
              <a href="./../our-programs/the-boys-talk">The Boys Talk</a>
            </li>
            <li>
              <a href="./../our-programs/campus-mentour">Campus MENtour</a>
            </li>
            <li>
              <a href="#">Boy-Lead Academy</a>
            </li>
            <li>
              <a href="#">One Boy Project</a>
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
              <a href="./../pillars-of-impact/leadership"><b>L</b>eadership</a>
            </li>
            <li>
              <a href="./../pillars-of-impact/education"><b>E</b>ducation</a>
            </li>
            <li>
              <a href="./../pillars-of-impact/empowerment"><b>E</b>powerment</a>
            </li>
            <li>
              <a href="./../pillars-of-impact/advocacy"><b>Ad</b>vocacy</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">VOLUNTEER</a>
        </li>
        <li class="">
          <a href="#contactSubmenu" data-toggle="collapse" aria-expanded="true">Contact Us <i class="fa fa-chevron-down pull-right"></i></a>
          <ul class="collapse list-unstyled" id="contactSubmenu" data-parent="#sidebar-nav">
            <li>
              <a href="./../contact/send-a-message">Send A Message</a>
            </li>
            <li>
              <a href="./../contact/invite-a-speaker">Invite A Speaker</a>
            </li>
            <li>
              <a href="./../contact/share-a-story">Share A Story</a>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="list-unstyled CTAs">
        <li>
          <a href="#" class="nav-link js-scroll-trigger btn btn-primary donate" style="background-color: #bec65d">DONATE</a>
        </li>
      </ul>
    </nav>`
});

Vue.component('nav-all',{
	template:`<nav class="navbar navbar-expand-lg navbar-dark fixed-top py-1 px-2">
      <div class="container-fluid">
        <a class="navbar-brand js-scroll-trigger" href="./../home"><img src="./../assets/img/bqafrica3.png" width="108" height="40px" title="HOME"></a>
        <button class="btn btn-primary d-inline-block d-lg-none ml-auto" type="button" id="sidebarCollapse" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-align-center"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
          	<li class="dropdown show nav-item">
              <a class="dropdown-toggle nav-link" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Who We Are
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="./../who-we-are/about-us">About Us</a>
                <a class="dropdown-item" href="./../who-we-are/birthing-story">Birthing Story</a>
                <a class="dropdown-item" href="./../who-we-are/vision-and-mission">Vision & Mission</a>
                <!-- <a class="dropdown-item" href="./../who-we-are/core-values">Core Values</a> -->
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
              <a class="nav-link js-scroll-trigger text-bold" href="#" style="">BLOG</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger text-bold" href="#" style="">VOLUNTEER</a>
            </li>

            <li class="dropdown show nav-item">
              <a class="dropdown-toggle nav-link" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="./../contact/send-a-message">Send A Message</a>
                <a class="dropdown-item" href="./../contact/invite-a-speaker">Invite A Speaker</a>
                <a class="dropdown-item" href="./../contact/share-a-story">Share A Story</a>
              </div>
            </li>
          </ul>
        </div>
        <a class="nav-link js-scroll-trigger btn btn-primary donate donate-brd-rad-pad" href="#">DONATE</a>
      </div>
    </nav>`
});
