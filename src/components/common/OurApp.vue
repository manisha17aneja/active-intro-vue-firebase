<template>
<!-- Main Start -->

<section class="app_promotion">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
           
            <img :src="components.image" :alt="components.title">
          </div>
          <div class="col-lg-5 col-md-6">
            <h2 data-aos="fade-right" data-aos-duration="800" data-aos-once="true">{{ components.title }}</h2>
            <p class="mt-8 mb-11" data-aos="fade-left" data-aos-duration="800" data-aos-once="true"> {{ components.description }}</p>
            <a v-bind:href="''+links.android+''" class="google_play" data-aos="fade-up" data-aos-duration="800" data-aos-once="true"></a>
            <a v-bind:href="''+links.ios+''" class="apple_store" data-aos="fade-up" data-aos-duration="800" data-aos-once="true"></a>
          </div>
        </div>
      </div>
      
    </section>

   <!-- Main End -->
</template>



<script>
import { db } from '../../main'
    
export default {
  components:{
   
},
data(){
    return{
      links:{},
      components:{},
    }
  },

  created: function()
  {
      this.fetchFeatures();
  },

  methods: {

    fetchFeatures()
    {

      db.collection("links").doc('RH0Mssvb2kzH1nn22v3I')
      .get()
      .then((doc) => {
            //console.log('hhhh22');
            //console.log(doc.id, " => ", doc.data());
            this.links = doc.data();

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

      db.collection("components").doc('92tc2v7vE6jK7cow5V8U')
      .get()
      .then((doc) => {
            //console.log('hhhh33');
            //console.log(doc.id, " => ", doc.data());
            this.components = doc.data();
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    }
  }
}
    
</script>





