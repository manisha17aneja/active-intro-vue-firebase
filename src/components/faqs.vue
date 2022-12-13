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
       
    <section class="contact-us-banner hero_section height-half text-center">
    <img :src="pages.image" style="position: absolute;" :alt="pages.title">  
          <div class="container">
              <h1 data-aos="fade-right" data-aos-duration="1200" class="aos-init aos-animate"><span>{{ pages.title }}</span></h1>
              <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" class="aos-init aos-animate">{{ pages.short_description }}</p>
          </div>
    </section>

      
    <!-- faq -->
    
    <section class="faq-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="faq-title text-center pb-3">
          <h2>{{ pages.title }}</h2>
        </div>
      </div>
      <div class="col-md-12">
        <div class="faq" id="accordion" v-for="faq in faqs" :key="faq.id">



<div class="card">
<div class="card-header" :id="['faqHeading-' + faq.id]">
  <div class="mb-0">
    <h5
      class="faq-title"
      data-toggle="collapse"
      :data-target="['#faqCollapse-' + faq.id]"
      data-aria-expanded="false"
      :data-aria-controls="['faqCollapse-' + faq.id]"
    >
      <span class="badge">{{faq.id}}</span> {{ faq.question }}
    </h5>
  </div>
</div>
<div
  :id="['faqCollapse-' + faq.id]"
  class="collapse"
  :aria-labelledby="['faqHeading-' + faq.id]"
  data-parent="#accordion"
>
  <div class="card-body">
    <p>
    {{ faq.answer }}
    </p>
  </div>
</div>
</div>

        </div>
      </div>
    </div>
  </div>
</section>
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

import { db } from './../main'


export default {
    components:{
        'Front-Header':Header,
        'Front-Footer':Footer,
        'Loader':Loader,
    },
    data(){
      return{
          faqs: [],
          pages:{},
      }
    },

    created: function()
    {
        this.fetchItems();
        this.fetchPages();
    },

    methods: {

      fetchItems()
      {
        var i = 1; 

        db.collection("faqs")
        .get()
        .then((querySnapshot) => {
          console.log('hhhh');
          querySnapshot.forEach((doc) => {

            console.log('ggggggg');

            console.log(doc.id, " => ", doc.data());
        
                this.faqs.push({
                  id: i,
                  question: doc.data().question,
                  answer: doc.data().answer,
                  created: doc.data().created,
                });

            i++;
            

          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });


      },
      fetchPages()
      {

        db.collection("pages").doc('Bce6vXMp00IqhGL00Nfv')
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
.collapse{
  display:none;
}
.collapse.show{
  display:block;
}
</style>



