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
    </div>
  </section>`,
})

Vue.component('subscribe-form',{
	template: `<section id="contact" class="contact-pad" style="background-image: none; background-color: white;">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <!-- <h2 class="section-heading text-uppercase" style="margin-bottom: 50px">Contact Us</h2> -->
            <h3 class="section-subheading text-muted" style="margin-bottom: 20px">Please enter your email address and first name to get the download link.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate" method="POST">
              <div class="row">
                <div class="col-md-6 offset-md-3">
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">  
                    <input class="form-control" id="name" type="text" placeholder="Your First Name *" required="required" data-validation-required-message="Please enter your first name.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group form-check form-check-inline">
                    <input class="form-check-input" id="agree" type="checkbox">
                    <label for="agree" class="form-check-label"> Send me BQA's newsletters and programme updates. </label>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <button id="sendMessageButton" class="btn btn-primary btn-l text-uppercase" type="submit">Submit</button>
                </div>
                <div class="col-lg-12">
                  <div id="success" class="mt-2"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`
});