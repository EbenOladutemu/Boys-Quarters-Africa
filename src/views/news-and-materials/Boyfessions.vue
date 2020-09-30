<template>
  <div>
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
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
            <p>
              <a class="btn btn-primary btn-l text-uppercase js-scroll-trigger" href="../../assets/docs/BOYFESSIONS.pdf" target="_blank"> <i class="fas fa-download"></i> Download</a>
            </p>
          </div>
        </div>
      </section>
    <Creed/>
    <!-- <hr class="footer-hr"> -->
    <Footer></Footer>
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
    document.title = 'Boyfessions - The Book | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/boysq/boyfessions.jpeg');
}
</style>