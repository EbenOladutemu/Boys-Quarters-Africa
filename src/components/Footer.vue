<template>
  <footer :style="footerStyle">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list">
              <p :style="contactDetails"><i class="fas fa-map-marker-alt" :style="bqaColor"></i> 2, Adenekan Street, Fadeyi, Lagos, Nigeria</p>
            </li>
            <li class="list">
              <p :style="contactDetails"><i class="fas fa-phone" :style="bqaColor"></i>
                <a href="tel:+2348034829520" :style="bqaColor">0803 482 9520</a>
              </p>
            </li>
            <li class="list">
              <p :style="contactDetails"><i class="fas fa-envelope" :style="bqaColor"></i>
                <a href="mailto:info@boysqafrica.com" :style="bqaColor"> info@boysqafrica.com</a>
              </p>
              <p :style="contactDetails"><i class="fas fa-envelope-open" :style="bqaColor"></i>
                <a href="mailto:boysqafrica@gmail.com" :style="bqaColor"> boysqafrica@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
        <div class="col-md-4 pt-3 pb-3">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item bg-facebook">
              <a href="https://facebook.com/boysqafrica" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item bg-linkedin">
              <a href="https://linkedin.com/company/boys-quarters-africa" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.instagram.com/boysqafrica" class="bg-instagram" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="list-inline-item bg-twitter">
              <a href="https://twitter.com/boysqafrica" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item bg-youtube">
              <a href="https://www.youtube.com/channel/UCvJ2ImQmvhKP-XPNgGe6utw" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>   
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a class="twitter-timeline" data-width="300" data-height="300" href="https://twitter.com/boysqafrica?ref_src=twsrc%5Etfw" :style="bqaColor">Tweets by boysqafrica</a> <script async src="https://platform.twitter.com/widgets.js" type="application/javascript" charset="utf-8"></script>
            </li>
          </ul>
        </div>
        
        <div class="col-md-12"><hr class="footer-hr">
          <span class="copyright">Boys Quarters Africa &copy;{{ year }} Crafted by 
            <a href="https://eben.com.ng" title="Eben Web Krafts" target="_blank" :style="bqaColor">
              <strong>Eben</strong>. 
            </a>All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
    <!-- <div id="loader-wrapper"> 
      <div id="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div> -->
  </footer>
</template>

<script>
export default {
  data(){
    return {
      year: new Date().getFullYear(),
      footerStyle: {
        backgroundColor:'#e6e6e6'
      },
      bqaColor:{
        color:'#212856'
      },
      bqaLinkStyle:{
        color:'#c3ce62!important',
        textDecoration: 'none'
      },
      contactDetails:{
        marginBottom: '0.5rem',
        fontSize: '18px'
      }
    }
  }
}
</script>

<style>

</style>
