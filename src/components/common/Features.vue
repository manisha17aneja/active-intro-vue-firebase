<template>
<!-- Main Start -->
    <section class="achievements text-center">
   <!-- <img :src="components.image" style="position: absolute;" :alt="components.title"> --->
      <div class="container">
        <div class="text-center mb-lg-20 mb-10"><h2 class="title gr-text-4">{{ components.title }}</h2></div>
        <div class="row">

          <div v-for="feature in features" :key="feature.id" class="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
            <div class="features">
            <img :src="feature.image" :alt="feature.title">
                
              <h5>{{ feature.title }}</h5>
            </div>
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
        features: [],
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

      db.collection("features")
      .get()
      .then((querySnapshot) => {
        //console.log('hhhh');
        querySnapshot.forEach((doc) => {

          //console.log(doc.id, " => ", doc.data());

              this.features.push({
                id: doc.id,
                title: doc.data().title,
                image: doc.data().image,
                created: doc.data().created,
              });

         // });
          

        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


      db.collection("components").doc('EUVf5XhueEXonHR8TvPt')
      .get()
      .then((doc) => {
                //console.log('hhhh66');
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


