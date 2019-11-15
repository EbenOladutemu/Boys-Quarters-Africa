Vue.component('header-about',{
	template: `<header class="masthead masthead-about article overlay-header">
      <div class="container">
        <div class="intro-text">
          <!-- Hidden only on xs, Hidden only on sm, Hidden only on md -->
          <div class="intro-lead-in d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block pad-lg-font-lg text-uppercase text-bold">We’ve been commissioned to educate, empower & advocate for a new tribe of Boys
            who will deliberately & purposefully transition from Boyhood to Manhood.</div>
          <!-- Visible only on xs, Visible only on sm -->
          <div class="intro-lead-in d-block d-sm-none d-none d-sm-block d-md-none pad-sm-font-sm text-uppercase text-bold">We’ve been commissioned to educate, empower & advocate for a new tribe of Boys who will deliberately & purposefully transition from Boyhood to Manhood.</div>
          <!-- <div class="intro-heading text-uppercase"></div> -->
          <!-- <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger learn-mg" href="about-us">Learn More</a> -->
        </div>
      </div>
    </header>`
});

Vue.component('about',{
  template: `<section>
    <div class="container">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">About US</h2><br>
        <h3 class="section-subheading text-muted" :style="aboutStyle">
          <i>‘It is believed that if a Boy is neglected or fed a diet of hate and violence it is obvious he will develop into
            a teenage who is misguided and confused. And the next crucial transition into manhood will be even
            more difficult.’
          </i>
        </h3>
      </div>
      <div class="about-style">
        <p> 
          Boys Quarters Africa is a volunteer-driven developmental organization and a Boy-child transformation
          movement missioned with the core objective of educating, empowering and advocating for the BoyChild. Our vision transcends mere social enterprise but a movement to raise a new tribe of Boys who will
          rise to the demands of life and masculinity in general.
        </p>
        <p>
          We are of the resolve that Boys should be deliberately raised like their female counterpart.
        </p>
        <p>
          The organization kicked off Operations in 2018 and has since then reached out to over 2,500 Boys
          across different cities in Nigeria, different background and religious inclinations. With the growing
          network of over 100 Volunteers across 4 Countries in Africa.
        </p>
        <p>
          At the Centre of the Organization’s objective is the resolve to help Boys transition deliberately, from
          Boyhood to Manhood. The organization paddles this vision through the <b>Four Pillars of Impact</b> below, which we have named <b>L.E.A.D</b>;
        </p><br>
        <div class="row">
          <div class="col-lg-3 mx-auto text-center">
            <a href="./../pillars-of-impact/leadership" class="poi-color">
              <i class="fas fa-user-tie fa-4x"></i>
              <h3>Leadership</h3>
            </a>   
          </div>
          <div class="col-lg-3 mx-auto text-center">
            <a href="./../pillars-of-impact/education" class="poi-color">
              <i class="fas fa-user-graduate fa-4x"></i>
              <h3>Education</h3>
            </a>
          </div>
          <div class="col-lg-3 mx-auto text-center">
            <a href="./../pillars-of-impact/empowerment" class="poi-color">
              <i class="fas fa-hand-rock fa-4x"></i>
              <h3>Empowerment</h3>
            </a>
          </div>
          <div class="col-lg-3 mx-auto text-center">
            <a href="./../pillars-of-impact/advocacy" class="poi-color">
              <i class="fas fa-balance-scale fa-4x"></i>
              <h3>Advocacy</h3>
            </a>
          </div>
        </div><br>
        <p>
          Through our Leadership pillar, we intend to detox the minds of every Boy of the ‘Stereotyped Masculine
          Leadership’ and the damaging toxic masculinity that is subconsciously passed on from generation to
          generation. Our flagship project on Sexual Abuse of the Boy Child, offers up the opportunity to bring to
          fore the damaging reality of how much Boys are left behind in the conversation.
        </p>
        <p>
          Our activities range from providing information on Sexual Education and Sexual Abuse to the Boy-Child,
          provide psychosocial & legal support for abused boys, create platforms for learning the Skills of the
          future for disadvantages boys, reach out to the unreached boys in juvenile homes & special correctional
          centres, advocate for the Boy-Child on varying grounds, host boot-camps and programmes that reorient their minds off the inherited stance of toxic masculinity and teach on the unsaid truth around Leadership.
        </p>
        <p>
          Boys Quarters Africa currently operates from Lagos State, Nigeria and has implemented her flagship
          projeccts across Ibadan, Ife, Akure, Ilorin, Lokoja, Minna, Kaduna, Angola, Ghana & South Africa. 
        </p>
      </div>
      <div class="text-center" :style="aboutStyle">
        <h2 class="intro-heading text-uppercase">BECOME A VOLUNTEER</h2>
        <h5>The Transformation Begins With You</h5>
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger learn-mg" href="./../volunteer">Volunteer NOW!</a>
      </div>
    </div>
  </section>`,
  data(){
      return{
        aboutStyle:{
          marginBottom: '25px'
        }
      }
    }
})