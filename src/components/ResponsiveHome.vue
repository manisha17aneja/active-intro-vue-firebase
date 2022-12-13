<template>

<body>

    <!-- preloader -->
    <Loader> </Loader>
    <!-- preloader -->
    <div class="frame">
  <div class="site-wrapper overflow-hidden">

     <!-- Header Section -->
    <Front-Header> </Front-Header>


    <!-- Main Start-->
    <section class="hero_section text-center">
    <img :src="pages.image" style="position: absolute;" :alt="pages.title">      
  <div class="container">
  <h1 data-aos="fade-right" data-aos-duration="1200">{{ pages.title }}</h1>
  <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">{{ pages.short_description }}</p>
  <a href="#subscription" class="btn btn-primary" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">Explore Free</a>
  </div>
    </section>
    



    <!-- Service section  -->
   <!-- <section class="service-section bg-default-4 pt-15 pb-13 py-lg-20">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="section-title text-center mb-11 mb-lg-19 px-lg-3">
              <h2 class="title gr-text-4">{{ components.title }}</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center position-relative gr-z-index-1">
          <div class="col-lg-4 col-md-6 col-sm-6 col-lg-4 mb-9 mb-lg-0" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
            <div class="service-card rounded-10 gr-hover-shadow-4 pt-7 px-7 pb-10">
              <div class="card-img mb-7">
                <img src="./../assets/front/image/recration.jpg" alt="...11">
              </div>
              <h3 class="card-title gr-text-6 mb-4">Activity</h3>
              <p class="mb-8">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
              <ul>
                <li>Lorem Ipsum 1</li>
                <li>Lorem Ipsum 2</li>
                <li>Lorem Ipsum 3</li>
                <li>Lorem Ipsum 4</li>
              </ul>
              <div class="text-center mt-10"><router-link to="/activity" class="gr-text-9 btn btn-primary">Learn more</router-link></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-lg-4 mb-9 mb-lg-0" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
            <div class="service-card rounded-10 gr-hover-shadow-4 pt-7 px-7 pb-10">
              <div class="card-img mb-7">
                <img src="./../assets/front/image/proffesional.jpg" alt="...">
              </div>
              <h3 class="card-title gr-text-6 mb-4">Professional</h3>
              <p class="mb-8">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
              <ul>
                <li>Lorem Ipsum 1</li>
                <li>Lorem Ipsum 2</li>
                <li>Lorem Ipsum 3</li>
                <li>Lorem Ipsum 4</li>
              </ul>
              <div class="text-center mt-10"><router-link to="/professional" class="gr-text-9 btn btn-primary">Learn more</router-link></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-lg-4 mb-9 mb-lg-0" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
            <div class="service-card rounded-10 gr-hover-shadow-4 pt-7 px-7 pb-10">
              <div class="card-img mb-7">
                <img src="./../assets/front/image/academic.jpg" alt="...">
              </div>
              <h3 class="card-title gr-text-6 mb-4">Academic</h3>
              <p class="mb-8">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
              <ul>
                <li>Lorem Ipsum 1</li>
                <li>Lorem Ipsum 2</li>
                <li>Lorem Ipsum 3</li>
                <li>Lorem Ipsum 4</li>
              </ul>
              <div class="text-center mt-10"><router-link to="/academic" class="gr-text-9 btn btn-primary">Learn more</router-link></div>
            </div>
          </div>
        </div>
      </div>
    </section> -->


    <!-- Subscriptions -->


<subscription id="subscription"></subscription>
<features></features>
<our-app></our-app>
<newsletter></newsletter>
<!-- Main End-->
    
<!-- Footer Section -->
<Front-Footer> </Front-Footer>
  
  </div>
  </div>

  </body>
</template>

<script>

import Header from './Front-Header';
import Footer from './Front-Footer';
import Subscription from './common/Subscription';
import features from './common/Features';
import OurApp from './common/OurApp';
import Newsletter from './common/Newsletter';
import Loader from './Loader';

import { db } from '../main'

  
export default {
  components:{
    'Front-Header':Header,
    'Front-Footer':Footer,
    'Subscription':Subscription,
    'features':features,
    'our-app':OurApp,
    'newsletter':Newsletter,
    'Loader':Loader,

},
data(){
    return{
      components:{},
      pages:{},
    }
  },

  created: function()
  {
      this.fetchComponents();
      this.fetchPages();

  },

  methods: {

    fetchComponents()
    {

      db.collection("components").doc('ahotUyDbxXzk1h99c29N')
      .get()
      .then((doc) => {
        console.log('hhhh77');
          console.log(doc.id, " => ", doc.data());
              this.components = doc.data();

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


    },
    fetchPages()
    {

      db.collection("pages").doc('91T5r0xlt47gme91ObsZ')
      .get()
      .then((doc) => {
        console.log('hhhh88');
          console.log(doc.id, " => ", doc.data());
              this.pages = doc.data();

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


    }
  }
}
    
</script>




