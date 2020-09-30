<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section class="pb-3">
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">The Exchange</h2><br>
          </div>
          <div class="about-style">
            <p> 
              The <strong>EXCHANGE</strong> PROJECT has been positioned to help boys in juvenile correctional centres re-integrate into the society without operating in a worse state than they were before they got into these remand homes.
            </p> 
            <p>
              The intentional use of the word <strong>‘Exchange’</strong> is to emphasize the need for Boys to exchange their pains for purpose and their guilt for a budding greatness within them.
              This project currently runs in partnership with the Ministries of Women Affairs & Social Works across different states of the federation. In the last two years, we have successfully activated a total of 550 boys with the EXCHANGE PROJECT at two(2) correctional homes in Nigeria, namely;
            </p>
            <ul>
              <li>
                Special Correctional Centre for Boys, Oregun Ikeja, LAGOS STATE, on the 28th of December, 2018 and;
              </li>
              <li>Juvenile & Child Care Unit, Ijokodo Ibadan, OYO STATE, on the 28th of December 2019.</li>
            </ul>
            <p>
              We have just recently secured the partnership of the OGUN STATE government to activate the EXCHANGE PROJECT at the Special Correctional Centre for Boys, Abeokuta, OGUN STATE, scheduled to hold on the 28th of December, 2020.
            </p>
            <p>
              The fall-off of the twin engagements in LAGOS and OYO precipitated the passion to commence a long lasting and sustainable project that would empower the boys to become valuable and responsible citizens. Hence, the ‘The Exchange TraDigital Transformation Academy' at the Special Correctional Centre for Boys in Ikeja and Juvenile & Child Care Unit, Ijokodo Ibadan Oyo State. 
            </p>
            <p>
              The Exchange TraDigital Transformation Academy is a 6-Month skill and value acquisition programme for Boys in remand and correctional homes. The Academy is positioned to principally prepare these Boys for the Future of Work (most importantly, when they leave the house) and train those who may not be able to catch Digital skills on the identified skills they may be interested in. 
            </p>
          </div>
          <div class="text-center mt-3 fs-24 text-bold">
            The Exchange Lagos
          </div>
          <div class="row">
            <div class="col-lg-4">
              <a href="/img/IMG_3449.87f2fd6d.jpg" data-gallery="exchangeLagos" data-toggle="lightbox" rel="noreferrer noopener" class="img-zoom">
                <div class="img-box">
                  <div class="">
                    <img src="../../assets/img/TheExchange/Lagos/IMG_3449.jpg" class="img-fluid mx-auto d-block rounded" alt="The Exchange Lagos">
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a href="/img/IMG_3521.4b1d8252.jpg" data-gallery="exchangeLagos" data-toggle="lightbox" rel="noreferrer noopener" class="img-zoom">
                <div class="img-box">
                  <div class="">
                    <img src="../../assets/img/TheExchange/Lagos/IMG_3521.jpg" class="img-fluid mx-auto d-block rounded" alt="The Exchange Lagos">
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a href="/img/IMG_3502.71d4bce5.jpg" data-gallery="exchangeLagos" data-toggle="lightbox" rel="noreferrer noopener" class="img-zoom">
                <div class="img-box">
                  <div class="">
                    <img src="../../assets/img/TheExchange/Lagos/IMG_3502.jpg" class="img-fluid mx-auto d-block rounded" alt="The Exchange Lagos">
                  </div>
                </div>
              </a>
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
    document.title = 'Exchange | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/TheExchange/Lagos/IMG_3449.jpg');
}
.img-box:hover{
  width: 97%;
}
.img-box{
  width: 100%;
  transition: width .5s ease-in-out;
}
</style>