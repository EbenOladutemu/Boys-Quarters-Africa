Vue.component('header-message',{
  template: `<header class="masthead masthead-message article overlay-header">
      <div class="container">
        <div class="intro-text">
          <!-- Hidden only on xs, Hidden only on sm, Hidden only on md -->
          <div class="intro-lead-in d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block pad-lg-font-lg text-uppercase text-bold">We’ve been commissioned to educate, empower & advocate for a new tribe of Boys
            who will deliberately & purposefully transition from Boyhood to Manhood.</div>
          <!-- Visible only on xs, Visible only on sm -->
          <div class="intro-lead-in d-block d-sm-none d-none d-sm-block d-md-none pad-sm-font-sm text-uppercase text-bold hide-second">We’ve been commissioned to educate, empower & advocate for a new tribe of Boys who will deliberately & purposefully transition from Boyhood to Manhood.</div>
        </div>
      </div>
    </header>`
});

Vue.component('message',{
	template: `<section id="contact" class="contact-pad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase" style="margin-bottom: 50px">Contact Us</h2>
            <h3 class="section-subheading text-muted text-white" style="margin-bottom: 20px">Please kindly fill the form below for your enquiries. We love to hear from you.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">  
                    <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone (optional)">
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">  
                    <input class="form-control" id="_subject" name="_subject" type="text" placeholder="Subject *" required="required" data-validation-required-message="Please enter a subject.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div> <br>
        <div class="row text-white">
          <div class="col-lg-4 ml-auto text-center">
            <i class="fas fa-phone fa-3x mb-3 sr-contact-1"></i>
            <p><a href="tel:+2348137367389" style="color: #c3ce62!important;">0813 736 7389</a></p>
          </div>
          <div class="col-lg-4 mr-auto text-center">
            <i class="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
            <p>
              <!-- <a href="mailto:boysqafrica@gmail.com" style="color: #c3ce62!important;">boysqafrica@gmail.com</a> -->
              <a href="mailto:info@boysqafrica.com" style="color: #c3ce62!important;">info@boysqafrica.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>`
});