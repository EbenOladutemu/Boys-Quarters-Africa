<template>
  <div class="home">
    <Sidebar></Sidebar>
      <section class="bg-dark" style="padding: 100px 0 50px">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="text-white">Ikare</h2>
              <!-- <h3 class="section-subheading text-muted">The #BoysToo project maiden edition, held at Christ the Redeemer International Secondary School, Akure on the 6th of July, 2018.</h3> -->
            </div>
          </div>
          <div class="row">
            <!-- IMAGE 1 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-11.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-11.53ccaf29.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 2 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-11-2.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-11-2.3133a3de.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 3 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-11-3.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-11-3.a8656e26.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>

            <!-- IMAGE 4 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-11-4.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-11-4.db94fdd1.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 5 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-09.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-09.a4bac00a.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 6 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-11-5.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-11-5.891b6f02.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>

            <!-- IMAGE 7 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-11-6.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-11-6.d520e730.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 8 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-11-7.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-11-7.b5b30c31.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 9 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ikare/Image 2020-02-11-8.jpeg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/Image 2020-02-11-8.aff8fd8f.jpeg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
          </div><br>
          <GoBack/>
        </div>
      </section>
    <Creed/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Creed from '@/components/Creed.vue'
import GoBack from '@/components/GoBack.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Sidebar, Creed, GoBack, Footer
  },
  created() {
    document.title= 'Ikare - #BoysToo | Boys Quarters Africa'
  }
}
</script>

<style scoped>
nav{
  background: #212529!important;
  padding: 10px !important;
  transition: 0.4s;
}
</style>