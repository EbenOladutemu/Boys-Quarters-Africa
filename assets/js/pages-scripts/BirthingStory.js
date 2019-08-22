Vue.component('header-birthing',{
  template: `<header class="masthead masthead-birthing-story article overlay-header">
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

Vue.component('birthing-story',{
	template: `<section>
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
              <div class="timeline-image img-1">
                <img class="rounded-circle img-fluid" src="./../assets/img/about/about-2.jpg" alt="Boys Quarter Africa">
              </div>
              <div class="timeline-panel about-1">
                <div class="timeline-body">
                  <p>
                    After reading the Dignity of Manhood by Gbile Akanni for the second time in 2014, the passion to see young boys live out the fullness of destiny became a tingling and subtle burden. The book re-opened my heart to the gap in the boy-child space and need for MEN to stand in their place in Destiny. However, I have in my personal space reached out to a couple of young boys, encouraged them and challenged them on divergent front through one-on-one mentorship and other religious platforms.
                  </p><br>
                  <p>
                    It became crystal clear<span v-if="readMore1"></span><span v-else>...</span>
                    <span v-show="readMore1">in June 2017 when I travelled to Babcock University for the convocation of a family member. We were trying to get a spot under the large canopy when a Governor in the South-Western part of Nigeria started his sincere lamentation about the proportion of the dwindling academic performance of the young men in our schools. The crux of the matter was that, out of the students who made first class degrees at the convocation, the ladies got over 90% of the certificate, awards and recognition.<br><br>
                    
                    This isn’t about academic performance but a slight reflection of the current trends. Go to our churches and mosques, you’ll find out how ‘responsible’ the boys are, strolling away from little commitments, choosing to engage in frivolous activities.<br><br> 

                    The Book, the several lamentations and the current realties has resonated to a call to action.</span><br>
                  </p>
                    <button class="btn btn-primary" @click="readMore1 = !readMore1">Read More</button>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image img-1">
                <img class="rounded-circle img-fluid" src="./../assets/img/about/bqafrica2.jpg" alt="Boys Quarter Africa">
              </div>
              <div class="timeline-panel">
                <!-- <div class="timeline-heading">
                  <h4 class="subheading text-uppercase"></h4>
                  <h6 class="subheading"><i>Solomon O. Ayodele – Lead Execution Officer, Boys Quarters Africa</i></h6>
                </div> -->
                <div class="timeline-body">
                  <p>From the boy with an absent Father in Kampala, to the boy who has just been sexually molested in Abuja, the life trajectory of the African boy is filled with valleys, mountains and divergent experiences they may not be able to share until they become Fathers. Hence, this destructive weight is passed on from generation to generations and from Fathers to their Sons.</p><br>

                  <p>Africa as a continent is encumbered by divergent warring darkness and the need to salvage the boy race must be an important focus, if we must deliver the future we desire for Africa & humanity. It would fatal to assume the movement toward the redemption of the boy-child race is another cross fire in the feminism & anti-feminism war. The Future is of both gender – Male & Female.
                  </p><br>
                    <p>
                      There are countless<span v-if="readMore2"></span><span v-else>...</span> <span v-show="readMore2">courageous falsehood about Manhood and it is quite difficult especially in Africa. How do you explain the calamity of Men who have accidentally found themselves in a society that demands from them what hasn’t been invested, the emotional trauma they undergo being tagged as the less emotional being and the burden of living a lie all through their short life?<br><br>

                      <!-- The assumptions that Men don’t cry, men handle challenges better, they are macho and powerful are part of the underlying root of the Men Crisis in Africa and beyond. It is even said by several studies that Men don’t want love, judging by the masculine craving for respect and honour. Therefore, we have emotionally broken, psychologically battered and mentally inconsistent men who raise men of their kinds.<br><br>

                      The race to rescue the Male Gender isn’t a hundred-meter dash but marathon.<br><br>
                      If we spend all of time raising the feminism and gender equality flags, boosting the esteems of our girls and they end up in the unsecured arms of irresponsible young men, either as husbands, fathers, neighbour, bosses or colleagues, then all the efforts may end up wasted.<br><br>

                      While the world is busy helping, grooming and challenging young African girls to be independent, godly, strong, responsible and accountable, we have left the young boys in the hands of friends, musical videos and the already-endangered society.<br><br>

                      The Boys Quarters Africa movement isn’t another gender inequality argument but gone are the days when we had responsible boys in our schools, mosques, churches and the society at large. The depth of their state of mind is shown in the speedy quest for money without any legal cum productive activity and it is sad to say we may be grooming and raising a group of Showbiz set of Men, whose hearts are far from God, sold out to mammon and lacks usefulness on every front.<br><br>-->

                      Men can do more, it starts with our Boys.</span>
                    </p>
                    <button class="btn btn-primary" @click="readMore2 = !readMore2">Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>`,
  data() {
    return {
      readMore1: false,
      readMore2: false
    }
  }
});

