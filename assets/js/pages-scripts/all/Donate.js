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
        <p>
          In September 2019, Over 170 Boys were rescued from illegal correctional centers across Ibadan, Oyo State. These Boys are already victims of Sexual and Domestic abuse!
        </p>
        <p>On Friday 27 December 2019, we will be visiting the Juvenile Correctional Home in Ibadan to INSPIRE & SHARE with
          them, under our flagship initiative called <strong>‘THE EXCHANGE’</strong>.<br>
          This is the second of it’s kind and we would be giving Clothing Materials, Food Stuff, Toiletries, donating a library to the school and of course have a full blast Party with the Boys.
        </p>
        <p>
          Let’s make this happen TOGETHER. Let’s bring back hope to the hearts and smile to the faces of these Boys.
          <p><strong>It’s time to change the world, by touching a life at a time.</strong></p>
        </p>
      </div>
      <div class="text-center">
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="https://paystack.com/pay/theexchange">Donate NOW!</a>
      </div>
    </div>
  </section>`,
})