<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section class="bg-light" style="padding-top: 50px; padding-bottom: 50px">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1>THE #BoysToo</h1>
              <p class="section-subheading">The BoysToo Campaign is one of our Flagship Project and this falls under the pillar of ‘Advocacy’. The principal intent is to bring to
              fore the menace of Sexual Abuse of the Boy Child. We believe Abuse is Abuse, irrespective of the Gender.
              Our goal is to <b>take Sexual Education to the Boys, sensitize them on the Menace Of Sexual Abuse on their minds and reiterate the
              Power Of SPEAKING UP.</b>
              We take this crusade to schools, in other bridge the gap of societal background and religious inclination.
              This project afford us the opportunity of gathering data on this cancerous act of Sexual abuse of the Boy Child.</p>
              <iframe src="https://drive.google.com/file/d/1xJ1_ud4ZYyjkfNs4srDRGe3SLPc1z5aw/preview" :width="videoWidth" :height="videoHeight"></iframe>
            </div>

            <div class="col-lg-12 cd-hero pt-5">
              <ul class="cd-hero-slider">
                <!-- Page 1 Gallery One -->
                <li class="selected" style="min-height: 810px!important">                    
                  <div class="cd-full-width">
                    <div class="js-tm-page-content overflow-scroll" data-page-no="1" data-page-type="gallery">
                      <div class="tm-img-gallery-container">
                        <div class="tm-img-gallery gallery-one">
                        <!-- Gallery One pop up connected with JS code below -->

                         <!-- Row 1 -->
                          <!-- <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Ile-Ife/IMG_5221.jpg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Abuja</b></span></h2>
                                <p class="tm-figure-description">FCT</p>
                                <router-link :to="boystoo.abuja">Abuja</router-link>
                              </figcaption>           
                            </figure>
                          </div> -->
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Akungba/IMG-20200131-WA0009.jpg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Akungba</b></span></h2>
                                <p class="tm-figure-description">Ondo</p>
                                <router-link :to="boystoo.akungba">Akungba</router-link>
                              </figcaption>           
                            </figure>
                          </div> 
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Akure/CRISSA/IMG_2185.jpg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Akure</b></span></h2>
                                <p class="tm-figure-description">Ondo</p>
                                <router-link :to="boystoo.akure">Akure</router-link>
                              </figcaption>           
                            </figure>
                          </div>
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Ile-Ife/Ibikunle-Lawal-College/IMG_0040.jpg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Benin</b></span></h2>
                                <p class="tm-figure-description">Edo</p>
                                <a href="#">Benin</a>
                              </figcaption>           
                            </figure>
                          </div>
                        </div>

                        <!-- Row 2 -->

                        <div class="tm-img-gallery gallery-one">
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Ibadan/IMGM2948.jpg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Ibadan</b></span></h2>
                                <p class="tm-figure-description">Oyo</p>
                                <router-link :to="boystoo.ibadan">Ibadan</router-link>
                              </figcaption>           
                            </figure>
                          </div>
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Ile-Ife/IMG_5221.jpg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Ife</b></span></h2>
                                <p class="tm-figure-description">Osun</p>
                                <router-link :to="boystoo.ife">Ife</router-link>
                              </figcaption>           
                            </figure>
                          </div>
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Ikare/Image 2020-02-11-5.jpeg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Ikare</b></span></h2>
                                <p class="tm-figure-description">Ondo</p>
                                <router-link :to="boystoo.ikare">Ikare</router-link>
                              </figcaption>           
                            </figure>
                          </div>
                        </div>

                        <!-- Row 3 -->

                        <div class="tm-img-gallery gallery-one">
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Ilorin/Image 2019-07-13 at 4.52.45 PM.jpeg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Ilorin</b></span></h2>
                                <p class="tm-figure-description">Kwara</p>
                                <a href="#">Ilorin</a>
                              </figcaption>           
                            </figure>
                          </div>
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Lokoja/Image-2019-07-09.jpeg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Lokoja</b></span></h2>
                                <p class="tm-figure-description">Kogi</p>
                                <a href="#">Lokoja</a>
                              </figcaption>           
                            </figure>
                          </div>
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Minna/5cf125eb.jpg" alt="#BoysToo" class="img-fluid tm-img" style="height: 230px">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Minna</b></span></h2>
                                <p class="tm-figure-description">Niger</p>
                                <a href="#">Minna</a>
                              </figcaption>
                            </figure>
                          </div>
                        </div>

                        <!-- Row 4 -->

                        <div class="tm-img-gallery gallery-one">
                          <div class="grid-item">
                            <figure class="effect-sadie">
                              <img src="./../../assets/img/BoysToo/Ota/DSC_0883.jpg" alt="#BoysToo" class="img-fluid tm-img">
                              <figcaption>
                                <h2 class="tm-figure-title">#BoysToo <span><b>Ota</b></span></h2>
                                <p class="tm-figure-description">Ogun</p>
                                <a href="#">Ota</a>
                              </figcaption>           
                            </figure>
                          </div>          
                        </div>                         
                      </div>
                    </div>                                                    
                  </div>                    
                </li>
              </ul>
            </div>
          </div>
          <div class="text-center mt-5">
            <button class="btn btn-primary" type="button">
              <a href="https://res.cloudinary.com/eben-web-krafts/image/upload/v1605313250/BoysToo-Campaign-Report.pdf" target="_blank" rel="noopener noreferrer" style="color: white" download> Download The Boys Too Campaign Report</a>
            </button>
          </div>
        </div>
      </section>
    <Creed/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Creed from '@/components/Creed.vue'
import Footer from '@/components/Footer.vue'
import '@/assets/css/lightbox.css'
import '@/assets/css/imagehover.min.css'
import '@/assets/vendor/fluid-gallery/css/hero-slider-style.css'
import '@/assets/vendor/fluid-gallery/css/magnific-popup.css'
import '@/assets/vendor/fluid-gallery/css/templatemo-style.css'

export default {
  components: {
    Sidebar, Header, Creed, Footer
  },
  data(){
    return{
      boystoo:{
        akungba: { name: 'BoysTooAkungba' },
        akure: { name: 'BoysTooAkure' },
        abuja: { name: 'BoysTooAbuja' },
        ibadan: { name: 'BoysTooIbadan' },
        ife: { name: 'BoysTooIfe' },
        ikare: { name: 'BoysTooIkare' }
      },
      videoHeight: '500',
      videoWidth: '100' + '%'
    }
  },
  created() {
    document.title = '#BoysToo | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Ibadan/IMGM2952.jpg');
}
.cd-hero-slider{
  height: 100%;
}

.overflow-scroll{
  overflow: scroll;
  height: 100%;
}
</style>
