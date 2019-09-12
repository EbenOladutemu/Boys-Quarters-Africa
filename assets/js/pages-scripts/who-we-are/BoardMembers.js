Vue.component('header-board',{
  template: `<header class="masthead masthead-board article overlay-header">
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

Vue.component('board-members',{
  template: `<section>
    <div class="container">
      <h2 class="section-heading text-uppercase text-center">BOARD MEMBERS</h2>
      <p>Solomon O. Ayodele</p>
      <p>Ruby Onwudiwe</p>
      <p>Victor Adewusi</p>
      <p>Ayodele Kenneth</p>
      <p>Busayo Morakinyo</p>
    </div>
  </section>`
})