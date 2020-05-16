Vue.component('header-boyfessions',{
	template: `<header class="masthead masthead-boyfessions article overlay-header">
      <div class="container">
        <div class="intro-text">
          <!-- Hidden only on xs, Hidden only on sm, Hidden only on md -->
          <!-- <div class="intro-lead-in d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block pad-lg-font-lg text-uppercase text-bold" :style="donateStyleLg">Exchange your pains for purpose, weakness for strength, guilt for hope</div> -->
          <!-- Visible only on xs, Visible only on sm -->
          <!-- <div class="intro-lead-in d-block d-sm-none d-none d-sm-block d-md-none pad-sm-font-sm text-uppercase text-bold" :style="donateStyleSm">Exchange your pains for purpose, weakness for strength, guilt for hope</div> -->
          <!-- <div class="intro-heading text-uppercase"></div> -->
          <!-- <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger learn-mg" href="about-us">Learn More</a> -->
        </div>
      </div>
    </header>`,
  data(){
    return {
      donateStyleLg:{
        marginTop: 0
      },
      donateStyleSm:{
        marginTop: '125px'
      }
    }
  }  
});

Vue.component('boyfessions',{
  template: `<section>
    <div class="container">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase"><em>Boyfessions</em></h2><br>
        <p>
          The Boyfessions is a compendium of healthy confessions for Boys and everyone who loves them.

          This book helps provide clarity on the issue of Sexual abuse of the Boy Child and also profers answers to some teething issues faced by the Boy Child tribe. 
        </p>
        <p>
          This mini-book would serve as a crusade mechanism in furthering our Strategic Pillars of impact;<br> <strong>Leadership, Education, Empowerment and Advocacy.</strong><br>
          Download and Enjoy the read!
        </p>
      </div>
      <div class="text-center">
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="https://boysqafrica.com/assets/docs/BOYFESSIONS.pdf"> <i class="fas fa-download"></i> Download</a>
      </div>
    </div>
  </section>`,
})