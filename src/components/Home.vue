<template>

<body>

    <!-- preloader -->
    <Loader> </Loader>
    <!-- preloader -->
    <div class="frame">
  <div class="site-wrapper overflow-hidden">

     <!-- Header Section -->
    <Front-Header> </Front-Header>
    <div class="for-desktop">

    <!-- Main Start-->
    <section class="hero_section text-center">
    <img :src="pages.image" style="position: absolute;" :alt="pages.title">      
  <div class="container">
  <h1 data-aos="fade-right" data-aos-duration="1200">{{ pages.title }}</h1>
  <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">{{ pages.short_description }}</p>
  <router-link to="/signup" class="btn btn-primary" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">Explore Free</router-link>
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
                <img src="./../assets/front/image/academic.jpg" alt="..." />
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

</div>

<div class="for_mobile_view">
        <!-- <header class="header">
            <p class="user_name">Hi, There</p>
            <div class="search">
                <form action="">
                    <div class="input_group">
                        <span class="material-icons">search</span>
                        <input type="text" name="" placeholder="Search by place,name & more" id="">
                    </div>
                    <div class="location">
                        <span>Dubai</span>
                        <span class="material-icons">keyboard_arrow_down</span>
                    </div>
                </form>
            </div>
        </header>

      -->

        <div class="top_slider_section">
          <VueSlickCarousel class="slider-m-12d" :arrows="false" :dots="false">
            <div v-for="subscription in subscriptionss" :key="subscription.id">
                <div class="wrapper">
                    <div class="thumb">
                        <img  :src="subscription.image" alt="default">
                    </div>
                    <div class="content">
                        <h6 class="title">{{ subscription.title }}</h6>
                            <p class="info">Buy it today</p>
                            <router-link :to="{ path: '/subscriptions/'+ subscription.id}" class="d-block" tabindex="0"><button>Buy now</button></router-link>
                    </div>
                </div>
            </div>
          </VueSlickCarousel>

        </div>
        <div class="catagory_section">
        <VueSlickCarousel class="slider-m-1" :arrows="false" :dots="false" v-bind="slickOptions">
                <div class="wrapper">
                    <div class="thumb">
                        <img  src="./../assets/front/image/3.jpg" alt="">
                    </div>
                    <p class="info">Food & Drink</p>
                </div>
                <div class="wrapper">
                    <div class="thumb">
                        <img  src="./../assets/front/image/1.jpg" alt="">
                    </div>
                    <p class="info">Food & Drink</p>
                </div>
                <div class="wrapper">
                    <div class="thumb">
                        <img  src="./../assets/front/image/2.jpg" alt="">
                    </div>
                    <p class="info">Food & Drink</p>
                </div>
                <div class="wrapper">
                    <div class="thumb">
                        <img  src="./../assets/front/image/3.jpg" alt="">
                    </div>
                    <p class="info">Food & Drink</p>
                </div>
                <div class="wrapper">
                    <div class="thumb">
                        <img  src="./../assets/front/image/4.png" alt="">
                    </div>
                    <p class="info">Food & Drink</p>
                </div>
                </VueSlickCarousel>
        </div>
        <div class="related_products">
            <h5 class="heading">Squad picks</h5>
            <VueSlickCarousel class="slider-m-1" :arrows="false" :dots="false">
                <div class="wrapper">
                    <div class="thumb">
                        <img src="./../assets/front/image/3.jpg" alt="">
                        <div class="content">
                            <h6 class="title">Soul Senses Spa & Wellness</h6>
                            <p class="info">Soul Senses Spa - powred by intro </p>
                            <ul class="tag">
                                <li>Buy 1 Get 1 Free</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="thumb">
                        <img src="./../assets/front/image/1.jpg" alt="">
                        <div class="content">
                            <h6 class="title">Soul Senses Spa & Wellness</h6>
                            <p class="info">Soul Senses Spa - powred by intro </p>
                            <ul class="tag">
                                <li>Buy 1 Get 1 Free</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="thumb">
                        <img src="./../assets/front/image/4.png" alt="">
                        <div class="content">
                            <h6 class="title">Soul Senses Spa & Wellness</h6>
                            <p class="info">Soul Senses Spa - powred by intro </p>
                            <ul class="tag">
                                <li>Buy 1 Get 1 Free</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="thumb">
                        <img src="./../assets/front/image/2.jpg" alt="">
                        <div class="content">
                            <h6 class="title">Soul Senses Spa & Wellness</h6>
                            <p class="info">Soul Senses Spa - powred by intro </p>
                            <ul class="tag">
                                <li>Buy 1 Get 1 Free</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </VueSlickCarousel>
        </div>
    </div>
    
<!-- Footer Section -->
<Front-Footer> </Front-Footer>
  
  </div>
  </div>
  <v-offline>
  <p v-if="online"> ( Online: {{ onLine }} ) </p>defs1  {{ onLine }}
  <p v-if="offline"> ( Online: {{ onLine }} ) </p>sfdsdfsd {{ onLine }}
</v-offline>

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
import { VOffline } from 'v-offline';

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

  
export default {
  components:{
    'Front-Header':Header,
    'Front-Footer':Footer,
    'Subscription':Subscription,
    'features':features,
    'our-app':OurApp,
    'newsletter':Newsletter,
    'Loader':Loader,
    'VueSlickCarousel':VueSlickCarousel,
    'VOffline':VOffline,
 

},
data(){
    return{
      onLine: true,
      components:{},
      pages:{},
      slickOptions: {
        //options can be used from the plugin documentation
        slidesToShow: 3,
        infinite: true,
    },
    subscriptionss: [],
    }
  },

  created: function()
  {
      this.fetchComponents();
      this.fetchPages();
      this.fetchItems();

  },

  methods: {

//amIOnline(e) {
////  this.onLine = e;
//},


fetchItems()
{

  this.subscriptionss = [];
  this.slug = this.$route.params.slug;

  db.collection("countries")
  .where("slug", "==", this.slug)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((docs) => {

      db.collection("subscriptions")
      .where("country", "==", docs.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

          // console.log(doc.id, " => ", doc.data());
  
          this.subscriptionss.push({
            id: doc.id,
            title: doc.data().title,
            image: doc.data().image,
          });
          
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    });
  });


  db.collection("components").doc('nlXcHYzVkqDaWGJgixjF')
  .get()
  .then((doc) => {
          this.components = doc.data();
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });


},

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

<style>
    .offline {
  background-color: #fc9842;
  background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);
}
.online {
  background-color: #00b712;
  background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);
}
    </style>




