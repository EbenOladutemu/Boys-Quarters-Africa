Vue.component('header-donate',{
	template: `<header class="masthead masthead-donate article overlay-header">
      <div class="container">
        <div class="intro-text">
          <!-- Hidden only on xs, Hidden only on sm, Hidden only on md -->
          <div class="intro-lead-in d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block pad-lg-font-lg text-uppercase text-bold" :style="donateStyleLg">Exchange your pains for purpose, weakness for strength, guilt for hope</div>
          <!-- Visible only on xs, Visible only on sm -->
          <div class="intro-lead-in d-block d-sm-none d-none d-sm-block d-md-none pad-sm-font-sm text-uppercase text-bold" :style="donateStyleSm">Exchange your pains for purpose, weakness for strength, guilt for hope</div>
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

Vue.component('donate',{
  template: `<section>
    <div class="container">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase"><em>...Towards the Exhange</em></h2><br>
        <h3 class="section-subheading text-muted" :style="aboutStyle">
          <i>‘It is believed that if a Boy is neglected or fed a diet of hate and violence it is obvious he will develop into
            a teenage who is misguided and confused. And the next crucial transition into manhood will be even
            more difficult.’
          </i>
        </h3>
      </div>
      <div class="text-center" :style="aboutStyle">
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger learn-mg" href="./../volunteer">Donate NOW!</a>
      </div>
    </div>
  </section>`,
})