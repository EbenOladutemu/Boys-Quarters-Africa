<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
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
            </p>
            <p><strong>It’s time to change the world, by touching a life at a time</strong></p>
          </div>
          <div class="text-center">
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="https://paystack.com/pay/theexchange">Donate NOW!</a>
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
    document.title = 'Donate | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('./../assets/img/TheExchange/Lagos/IMG_3443.jpg');
}
</style>