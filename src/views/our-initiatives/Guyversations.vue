<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Guyversations</h2><br>
          </div>
          <div class="about-style">
            <p>
              This is the Young Men arm of the organization’s operations. This conversation is positioned to metamorphose into our Podcast and Vlog. It's basically positioned to bring to fore real and deep conversations that affect young men across board.
            </p>
            <p>
              <strong> Past Guests:</strong><br>
              Jimmy Odukoya, Bisi Alimi, Tolulope Solutions Adejumo, Toju Oluwatoyinbo, Dr. Wilson Joel, GAISE Baba,Kayode Adeniji,Olumide Oworu, Gaffy, PartyJollof
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
    document.title = 'Guyversations | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Ikare/Image 2020-02-11-8.jpeg');
}
</style>