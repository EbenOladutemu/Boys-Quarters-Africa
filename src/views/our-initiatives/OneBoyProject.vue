<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section class="pb-3">
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">The One Boy Project</h2><br>
          </div>
          <div class="about-style">
            <p> 
              As at January 2020, the <a href="https://educeleb.com/nigeria-out-of-school-boys/" style="color:#b4bf5d" rel="noreferrer noopener" target="_blank">educeleb.com</a> reported that there are more boys out of school than girls in Nigeria. According to the report, Kano State leads with 748,468 boys, in comparison with the 6,340,261 Boys who are out of school in Nigeria.
            </p>
            <p>
              This project seeks to EDUCATE one Boy at a time. This sponsorship programme would focus on Boys across different cities in Africa. Boys whose family aren’t financial able to foot the basic education bills or do not have immediate access to education in their area.
            </p>
            <p>
              This falls under the SDG Goal 4 - Quality Education.
            </p>
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

export default {
  components: {
    Sidebar, Header, Creed, Footer
  },
  created() {
    document.title = 'One Boy Project | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Ikare/Image 2020-02-09-9.jpeg');
}
</style>