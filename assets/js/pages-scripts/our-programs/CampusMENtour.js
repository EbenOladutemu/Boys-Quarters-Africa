Vue.component('header-campus',{
	template: `<header class="masthead masthead-campus article overlay-header" style="background-position: top">
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

Vue.component('campus-mentour',{
  template: `<section>
    <div class="container">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">CAMPUS MENtour</h2><br>
      </div>
      <div class="about-style">
        <p> 
          This is an event specially designed for Male Young Adults across different
          Universities. This event seeks to transfer knowledge from MENtors who are able
          to share practical steps on how to lead a life worthy of emulation.
        </p>
      </div>
    </div>
  </section>`
})