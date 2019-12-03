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
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Board of Trustees</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="./../assets/img/bot/Solomon O. Ayodele.JPG" alt="Solomon Ayodele">
            <h4>Solomon Oluwatobi Ayodele</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="./../assets/img/bot/Ruby Onwudiwe.JPG" alt="Ruby Onwudiwe">
            <h4>Ruby Onwudiwe</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="./../assets/img/bot/Segun Alade" alt="Segun Alade">
            <h4>Segun Alade</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="./../assets/img/bot/Ayodele Kenneth.JPG" alt="Ayodele Kenneth">
            <h4>Ayodele Kenneth</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="./../assets/img/bot/Oyindamola Ohwesi.JPG" alt="Oyindamola Ohwesi">
            <h4>Oyindamola Ohwesi</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="./../assets/img/bot/Victor Adewusi.JPG" alt="Victor Adewusi">
            <h4>Victor Adewusi</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-12">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="./../assets/img/bot/Busayo Morakinyo.JPG" alt="Busayo Morakinyo">
            <h4>Busayo Morakinyo </h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </section>`,
  data(){
    return{
      imgBorder:{
        border: '7px solid #e6e6e6'
      }
    }
  }
});