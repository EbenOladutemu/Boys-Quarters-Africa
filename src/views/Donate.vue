<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase"><em>Transform A Boy and Touch The World.</em></h2><br>
            <p>
              We truly believe that the Boy Child Transformation movement isn’t a 100 Metre Dash but a Marathon, and the unflinching support of our amazing donors across the world has been making these things happen. You can make donations and support our initiatives by donating, using your preferred donation platform. We would also appreciate that you fill the form below for us to share an appreciation note and keep you up to speed with the development on every of our projects.
            </p>
            <h4>WAYS OF DONATING</h4>
            <p>
              Donations can be made via bank transfer or cheque to the bank detailed outlined below:<br>
              <strong>Bank Name: Stanbic IBTC Bank Plc</strong><br>
              <strong>Account Number: </strong>
            </p>
            <p>To donate online, click the button below</p>
          </div>
          <div class="text-center">
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger mb-3 donate-pd" href="https://paystack.com/pay/bqa-donate">Donate</a>
          </div>
          <div class="text-center mt-3">
            <h4>WE CAN WIN THE WAR AGAINST GENDER-BASED VIOLENCE IN NIGERIA</h4>
            <p>
              You can help us reach 1,000 Families in Nigeria, through our PROJECT SABI campaign.
              Support BOYS QUARTERS AFRICA with your donations as we embark on a street by street awareness and sensitization of Boys/Men, including Women and Girls.
              We can take the news and information beyond twitter handle and Instagram feeds. 
            </p>
            <div class="text-center">
              <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger mb-3 donate-pd" href="https://paystack.com/pay/bqa-donate">Donate</a>
            </div>
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
.donate-pd{
  padding: 12px
}
</style>