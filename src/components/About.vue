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
    <section class="hero_section height-half text-center">
    <!--<img src="./../assets/front/image/contact-bg.jpg" style="position: absolute;">-->
    <img :src="pages.image" style="position: absolute;" :alt="pages.title"> 
          <div class="container">
              <h1 data-aos="fade-right" data-aos-duration="1200" class="aos-init aos-animate">{{ pages.title }}</h1>
              <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" class="aos-init aos-animate">{{ pages.short_description }}</p>
          </div>
    </section>

    <div class="contact-us-page">
        <!--Contact-us start-->
    <div id="aboutUs">
        <section class="contact_wrapper">
            <div class="container">
                <div class="row text-center">
                    <h2  class="section__heading">{{ pages.title }}</h2>
                </div>
                <div class="row">
                <div v-html="pages.description"></div>
                    
                </div>
                
            </div>
        </section>
    </div>
    
 
        
        
    </div>       
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
import Loader from './Loader';

import { db } from '../main'

  
export default {
  components:{
    'Front-Header':Header,
    'Front-Footer':Footer,
    'Loader':Loader,
},
data(){
    return{
      pages:{},
    }
  },

  created: function()
  {
      this.fetchPages();

  },

  methods: {

    fetchPages()
    {

      db.collection("pages").doc('1RlzYqGvTJdi10SUNiDv')
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

