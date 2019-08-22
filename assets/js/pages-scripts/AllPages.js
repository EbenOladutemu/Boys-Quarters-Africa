
Vue.component('the-footer',{
  template:`<footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; Boys Quarters Africa 2019. Developed by 
              <a href="https://eben.com.ng" title="Ebenezer Oladutemu" target="blank" style="color: #c3ce62!important; text-decoration: none;">Eben. </a>All Rights Reserved.
          </span>
        </div>
        <div class="col-md-4"> Follow Us:
          <ul class="list-inline social-buttons">
            <li class="list-inline-item bg-facebook">
              <a href="https://facebook.com/boysqafrica" target="_blank">
                <i class="fab fa-facebook-f"></i>
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
              <a href="https://youtube.com/boysqafrica" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>   
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#boysCreed" data-toggle="modal" class="nav-link js-scroll-trigger" style="color: #c3ce62!important;">The Boys Creed</a>
            </li>
            <li class="list-inline-item">
              <a href="" style="color: #c3ce62!important;">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>`
})

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
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">The Boys Creed</h2>
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
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fas fa-download"></i>
                    Download Creed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
});
new Vue ({
  el: '#app'
})