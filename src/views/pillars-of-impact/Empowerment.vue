<template>
  <div>
    <Sidebar></Sidebar>
    <Header></Header>
      <section class="mb-5">
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">EMPOWERMENT</h2><br>
          </div>
          <div class="about-style">
            <p> 
              Under the Empowerment Pillar, we currently run a Year-Long at Special Correctional Centre for Boys
              called <b>‘THE EXCHANGE’</b>.
            </p>
            <p>
              It’s a Skill and Value Transference Programme for Boys in Correctional Centre and those behind bars.<br>
              Our desire is to see them Exchange their Pains for Purpose, weakness for strength etc.<br>
              We skill up and value Up those Boys and help them become amazing citizens.<br>
            </p>
            <p>
              A lot of them got into remand him because of varying issues. At some point, we’d provide Legal Aid for
              them and hope to get them integrated back into the Society, through our Boys Quarters Safe Home.
            </p>
            <p>
              <b>Boys Quarters Safe Home</b>: This would be an end to end facility for the Transformation, Mind Re-Invention and Future-Skilling for African Boys.
            </p>
            <p>
              Our goal is to have these Homes across 100 Cities in Africa, before 12pm on 31 December, 2030.
            </p>
            <p>
              We had the maiden edition of the Exchange in December 2018 at the Special Correctional Centre Boys, Lagos.
            </p>
          </div>
        </div>
      </section>
    <Creed/>
    <!-- <hr class="footer-hr"> -->
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
  },
  created() {
    document.title = 'Empowerment | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/TheExchange/Lagos/IMG_3522.jpg');
}
</style>