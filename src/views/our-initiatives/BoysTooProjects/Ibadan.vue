<template>
  <div class="home">
    <Sidebar></Sidebar>
      <section class="bg-dark" style="padding: 100px 0 50px">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="text-white">Ibadan</h2>
              <!-- <h3 class="section-subheading text-muted">The #BoysToo project maiden edition, held at Christ the Redeemer International Secondary School, Akure on the 6th of July, 2018.</h3> -->
            </div>
          </div>
          <div class="row">
            <!-- IMAGE 1 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGM2878.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGM2878.80249771.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 2 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGM2945.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGM2945.d22cab31.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 3 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGM2823.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGM2823.de5205dd.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>

            <!-- IMAGE 4 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGM2843.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGM2843.66d71e2a.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 5 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGM2857.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGM2857.c0c2eaed.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 6 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGM2861.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGM2861.c4b2fa5f.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>

            <!-- IMAGE 7 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGM2834.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGM2834.c4b21822.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 8 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGS2951.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGS2951.849a07db.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
              </figure>
            </div>
            <!-- IMAGE 9 -->
            <div class="col-md-4 col-sm-6 portfolio-item">
              <figure class="imghvr-shutter-in-out-diag-2">
                <img src="@/assets/img/BoysToo/Ibadan/IMGM2849.jpg" class="img-fluid rounded" alt="Boys Quarter Africa">
                <figcaption>
                  <i class="fas fa-search-plus fa-3x i-search"></i>
                </figcaption>
                <a href="/img/IMGM2849.da007503.jpg" data-toggle="lightbox" data-gallery="gallery"></a>
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
    document.title= 'Ibadan - #BoysToo | Boys Quarters Africa'
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