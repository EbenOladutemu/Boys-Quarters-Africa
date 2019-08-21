Vue.component('header-about',{
  template: `<header class="masthead masthead-birthing-story article overlay-header" style="height: 535px">
      <div class="container">
        <div class="intro-text">
          <!-- Hidden only on xs, Hidden only on sm, Hidden only on md -->
          <div class="intro-lead-in d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block pad-lg text-uppercase text-bold " style="font-size: 25px">We’ve been commissioned to educate, empower & advocate for a new tribe of Boys
            who will deliberately & purposefully transition from Boyhood to Manhood.</div>
          <!-- Visible only on xs, Visible only on sm -->
          <div class="intro-lead-in d-block d-sm-none d-none d-sm-block d-md-none pad-sm text-uppercase text-bold" style="font-size: 17px">We’ve been commissioned to educate, empower & advocate for a new tribe of Boys who will deliberately & purposefully transition from Boyhood to Manhood.</div>
          <!-- <div class="intro-heading text-uppercase"></div> -->
          <!-- <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger learn-mg" href="about-us">Learn More</a> -->
        </div>
      </div>
    </header>`
});

Vue.component('vision-mission',{
	template: `<section style="padding: 50px 0 0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">THE BIRTHING STORY</h2><br>
          <!-- <h3 class="section-subheading text-muted"></h3> -->
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
          	<li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="./../assets/img/about/about-3.jpeg" alt="Boys Quarter Africa">
              </div>
              <div class="timeline-panel about-1">
                <div class="timeline-heading">
                  <!-- <h4>December 2012</h4> -->
                  <h4 class="subheading">OUR VISION</h4>
                </div>
                <div class="timeline-body">
                  <p>Transforming the society by EMPOWERING, EDUCATING & ADVOCATING for one BOY at a time.
                  </p><br>
                  <div class="timeline-heading">
                    <h4 class="subheading">The Vision Tagline</h4>
                    <p>Intentional and deliberate transition from Boyhood to Manhood.</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="./../assets/img/about/about-4.png" alt="Boys Quarter Africa">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <!-- <h4>July 2014</h4> -->
                  <h4 class="subheading text-uppercase">OUR MISSION</h4>
                </div>
                <div class="timeline-body">
                  <p>Be an inspiring bridge from boyhood to manhood, by redefining the essence of masculinity through godly
										mentorship, exposure to role models, mental cum emotional build-ups and connections that will birth
										destiny fulfilment.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="./../assets/img/about/about-1.jpeg" alt="Boys Quarter Africa">
              </div>
              <div class="timeline-panel about-1">
                <div class="timeline-heading">
                  <!-- <h4>December 2012</h4> -->
                  <h4 class="subheading">OUR CORE VALUES</h4>
                </div>
                <div class="timeline-body">
                  <ul class="font-20">
                  	<li>Leadership by Service</li>
                  	<li>Empathy</li>
                  	<li>Accountability</li>
                  	<li>Integrity</li>
                  	<li>Love</li>
                  	<li>Ingenuity & Innovation</li>
                  </ul>
                  <br>
                </div>
              </div>
            </li>
            <!-- <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="./../assets/img/about/about-1.jpeg" alt="Boys Quarter Africa">
              </div>
              <div class="timeline-panel about-1">
                <div class="timeline-heading">
                  <h4 class="subheading text-uppercase">The Platforms and Reach-out Modalities</h4>
                </div>
                <div class="timeline-body">
                    <ul>
                      <li class="disc"><b>Annual BQa boot camp</b> - A 3 to 5 day mental emersion and psychological reboot. A camp that will have young boys learn people skills, group-study the scripture, explore purpose discovery, engage in skill development, learn the art of prayer, awareness on nation-building and many more</li>

                      <li class="disc" id="theBoysCreed"><b>Secondary School Outreach and Mentorship Session</b> - A timely reach out to secondary school students, focusing on sexuality and academics</li>
                      <span id="dots4"></span><span id="more4">
                      <li class="disc"><b>BQa Campus Idea den</b> - The idea of a young African boy is supported and funded. This decision will be made in an Idea Den, where several ideas will be presented to a Murder board of other boys.</li>

                      <li class="disc"><b>The BQ Tabloid </b>- Newsletters for young African boys.</li>

                      <li class="disc"><b>The BQer Daily Confession hand-book</b> – A quarterly publication that embodies daily confession that reflects Leadership, sound mind and godliness</li>

                      <li class="disc"><b>BQ Street Carnivals</b> - Open Games, Raffle Draws and Music on the street. Attracting the participation of young boys for engagements.</li>

                      <li class="disc"><b>Boys, Bags and Tags (Back to School Outreach)</b> - Distribution of books and academics materials at the beginning of each session. This will be done at selected suburbs and local government across Africa</li><br></span>

                      <button class="btn btn-primary" onclick="myFunction4()" id="myBtn4">Read More</button>
                    </ul>     
                </div>
              </div>
            </li> -->
            <!-- Hidden only on xs, Hidden only on sm, Hidden only on md  (would show on large screens)-->
            <!-- <li class="timeline-inverted d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
              <div class="timeline-image creed-lg">
                <a class="no-line" data-toggle="modal" href="#boysCreed">
                  <div class="">
                    <h3 class="text-white" style="padding-top: 35px">The<br>Boys<br>Creed</h3> 
                </div>
              </a>
              </div>
            </li> -->
            <!-- Visible only on xs, Visible only on sm, Visible only on md (would show on small and medium screens)-->
            <!-- <li class="timeline-inverted d-block d-sm-none d-none d-sm-block d-md-none">
              <div class="timeline-image creed-sm">
                <div class="col-md-4 col-sm-6">
                  <a class="no-line" data-toggle="modal" href="#boysCreed">
                    <h4 class="text-white" style="padding-top: 5px">The<br>Boys<br>Creed</h4>
                  </a>
                </div>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </section>`
})