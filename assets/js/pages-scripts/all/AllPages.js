
Vue.component('the-footer',{
  template:`<footer :style="footerStyle">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list">
              <p :style="contactDetails"><i class="fas fa-map-marker-alt" :style="bqaColor"></i> 2, Adenekan Street, Fadeyi, Lagos, Nigeria</p>
            </li>
            <li class="list">
              <p :style="contactDetails"><i class="fas fa-phone" :style="bqaColor"></i>
                <a href="tel:+2348137367389" :style="bqaColor"> 0813 736 7389</a>
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
          <span class="copyright">Boys Quarters Africa &copy;<span id="year"></span>. Crafted by 
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
  </footer>`,
  data(){
     return {
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
 },
});

Vue.component('creed',{
  template: `<section style="padding: 0">
    <div class="portfolio-modal modal fade" id="boysCreed" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <h2 class="text-uppercase">The Boys Creed</h2>
                  <!-- <h4 class="text-uppercase">(MAN ON A MISSION)</h4> -->
                  <p>I am a deliberate product of God’s intentional action. My birth isn’t by mistake. I am a Child of God and I am loved unconditionally.</p> 
                  <p>I am not a result of wrong decisions or accidental mating. My Destiny was carefully crafted before the foundation of the world. I am not an Error, I am a Solution sent to the World now, for a Specific reason.</p>
                  <p>I am not my past! I am not my mistake! I take full responsibility for my life and I live for my better tomorrow and not my yesterday.</p>
                  <p>I am a Man on a Mission and a carrier of a Divine destiny. Therefore, I face my fears with faith and fight my battles with hope.</p>
                  <p>I am Responsible, Honourable, Reliable, Humble, Resourceful and Noble. My life is guided by truth and Integrity.</p>
                  <p>I am a Leader- I am led by God’s Spirit, I lead by Example, I Lead with Humility and lead to gather.</p>
                  <p>I am led by Love and I walk in peace. I am a Global resource and not a problem to my society. My impact reaches eternity and my wealth spreads across the globe.</p>
                  <p>I am wealthy! I am healthy! I am Strong and powerful! My heart is directed by Wisdom and my thoughts are pure and true. Everything I touch turns to Gold and Excellence is the least I can ever offer.</p>
                  <p>I am immune to the sickness of my days. I carry the Spirit of Distinction.</p>
                  <p>I am an Influential Man! I am a Warrior.</p> 
                  <p>I submit to the process of my rising and choose to go through the path of hard work. I won’t cut corners, avoid the curve or opt for a fast-food option to success.</p>
                  <p>I cannot be little and I won’t play small. My words carry authority, I won’t utter them carelessly. I am not an ordinary Boy, nothing is permitted to be ordinary about me and around me.</p>
                  <p>I hate gossip, backbiting, backstabbing, small talks, cheap popularity, abuse, corruption, immorality and ungodliness.</p>
                  <p>My heart is filled with Creative ideas and my legs are ready to run. I have a seeing eye, ears that ear and a bridled tongue.</p>
                  <p>I am a Righteous Man. I am a Warrior!</p>
                  <p>I rise above the slavery of Money, Fame, and popularity. I am Purpose-driven, Vision-driven, God-driven, Love-Driven and Peace-Driven. I am committed to serving my Maker, I won’t stop until He tells me to return to him.</p>
                  <p>I am not just a Super Star. I am a Star Role Model. The world shall come to learn and lend from Me. They shall also gather to learn of me.</p>
                  <p>I shall lead my home with the purity of my heart. I shall protect my friends, girls and women against every form of oppression and inequality.</p>

                  <p>I am a Man, I am a god! When I cry, I am not weak. When I rise, I am not proud. I won’t give up until I become all of God’s intent for my life. I won’t sit back until I achieve my goals. I won’t rest until I hear my maker say to me, WELL DONE.</p>
                  <p>My life is planted in the hands of the Creator of the heavens and the Earth. I cannot die by mistake, by error or by accident.</p> 
                  <p class="text-uppercase"><b>I am a Warrior and this is my Creed!</b></p>
                  <button class="btn btn-primary" type="button">
                    <i class="fas fa-download"></i>
                    <a href="http://boysqafrica.com/assets/docs/Boys Creed.pdf" style="color: white">Download Creed</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
});
new Vue ({
  el: '#app',
  data:{
    donate: 'donate'
  }
});

//Date and time
date = document.getElementById('year');
date.innerHTML = new Date().getFullYear();