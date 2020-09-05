<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header style="margin-bottom:150px"></Header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">VISION, MISSION & CORE VALUES</h2><br>
            <!-- <h3 class="section-subheading text-muted"></h3> -->
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="./../assets/img/about/about-3.jpeg" alt="Boys Quarter Africa">
                </div>
                <div class="timeline-panel about-1">
                  <div class="timeline-heading">
                    <!-- <h4>December 2012</h4> -->
                    <h4 class="subheading">OUR VISION</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Transforming the society by EMPOWERING, EDUCATING & ADVOCATING for one BOY at a time.
                    </p><br>
                    <div class="timeline-heading">
                      <h4 class="subheading">The Vision Tagline</h4>
                      <p>Intentional and deliberate transition from Boyhood to Manhood.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="./../assets/img/about/about-4.png" alt="Boys Quarter Africa">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <!-- <h4>July 2014</h4> -->
                    <h4 class="subheading text-uppercase">OUR MISSION</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Be an inspiring bridge from boyhood to manhood, by redefining the essence of masculinity through godly
                      mentorship, exposure to role models, mental cum emotional build-ups and connections that will birth
                      destiny fulfilment.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="./../assets/img/about/about-1.jpeg" alt="Boys Quarter Africa">
                </div>
                <div class="timeline-panel about-1">
                  <div class="timeline-heading">
                    <!-- <h4>December 2012</h4> -->
                    <h4 class="subheading">OUR CORE VALUES</h4>
                  </div>
                  <div class="timeline-body">
                    <ul class="font-20">
                      <li>Leadership by Service</li>
                      <li>Empathy</li>
                      <li>Accountability</li>
                      <li>Integrity</li>
                      <li>Love</li>
                      <li>Ingenuity & Innovation</li>
                    </ul>
                    <br>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Creed/>
    <Footer></Footer>
    <div class="overlay"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Creed from '@/components/Creed.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Sidebar, Header, Creed, Footer
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../assets/img/TheExchange/Lagos/IMG_3521.webp');
}
</style>