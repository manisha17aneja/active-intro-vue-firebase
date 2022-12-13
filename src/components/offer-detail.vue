<template>

<body>

<!-- preloader -->
<Loader> </Loader>
<!-- preloader -->

    <div class="frame">
  <div class="site-wrapper overflow-hidden">

     <!-- Header Section -->
    <Front-Header> </Front-Header>

    <!-- Main End-->


    <section class="content-sec product-checkout offer-change-on-mobile">
        <div class="product-checkout-wrraper">
               <div class="container holder">
        <div class="row content-sec-area" v-if="item">
            
                  <div data-aos="fade-left" class="col-md-12 col-lg-6 order-1 left-side">
            <div class="content-desc">
               <h1>{{ item.name }}</h1>
               
               <!--<div class="review-links">
                  <img data-src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11068-5.png" alt="rating" style="padding-bottom: 10px;" class=" lazyloaded" title="TripAdvisor Traveler Rating 4.0 out of 5 Based on 23 Reviews" src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11068-5.png">
                  <div class="review-col">
                     <span class="reviews">Based on <b>23</b> reviews</span>
                  </div>
                  <ul class="list-inline links">
                     <li><a id="trip-advisor-review" href="#read_review_widget" class="inline read_views  cboxElement" style=""> Read Reviews</a></li>
                  </ul>
               </div>--->

               <div class="bottom-content">
               {{ item.about }}
                  <div class="merchant-info row p-0">
                     <div class="col-md-4 col-lg-5 d-flex align-items-start">
                        <span class="icon" style="margin-right:10px;">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                              <path fill="#606D7A" d="M4.642 0L.49 1.768c-.295.126-.489.43-.489.768v11.583c0 .585.555.985 1.066.768l3.625-1.542L9.358 15l4.153-1.768c.295-.126.489-.43.489-.768V.881c0-.585-.555-.985-1.066-.768L9.309 1.655 4.642 0zm.802 2.028l3.112 1.104v9.84l-3.112-1.104v-9.84zm-1.555.074v9.802l-2.333.994V3.096l2.333-.994zm8.555 0v9.802l-2.333.994V3.096l2.333-.994z"></path>
                           </svg>
                        </span>
                        <span class="text">
                        {{ item.location }} </span>
                     </div>
                     <div class="col-md-4 col-lg-6 d-flex align-items-start">
                        <span class="icon" style="margin-right:10px;">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path fill="#606D7A" d="M8 0C3.591 0 0 3.591 0 8s3.591 8 8 8 8-3.591 8-8-3.591-8-8-8zm0 1.6c.199 0 .416.081.694.345.277.264.578.707.837 1.29.197.443.359.984.497 1.565H5.972c.138-.581.3-1.122.497-1.566.259-.582.56-1.025.837-1.289.278-.264.495-.345.694-.345zm-2.84.667c-.051.105-.105.208-.154.317-.29.651-.514 1.405-.683 2.216H2.458c.629-1.09 1.57-1.973 2.703-2.533zm5.68 0c1.132.56 2.073 1.443 2.702 2.533h-1.865c-.17-.811-.394-1.565-.683-2.216-.05-.11-.103-.212-.155-.317zM1.81 6.4h2.268C4.03 6.918 4 7.45 4 8s.029 1.082.078 1.6H1.81C1.678 9.088 1.6 8.554 1.6 8s.078-1.088.21-1.6zm3.884 0h4.612c.056.514.094 1.045.094 1.6 0 .555-.038 1.086-.094 1.6H5.694C5.638 9.086 5.6 8.555 5.6 8c0-.555.038-1.086.094-1.6zm6.228 0h2.269c.131.512.209 1.046.209 1.6s-.078 1.088-.21 1.6h-2.268C11.97 9.082 12 8.55 12 8s-.029-1.082-.078-1.6zm-9.464 4.8h1.865c.17.811.394 1.565.683 2.216.05.11.103.212.155.317-1.133-.56-2.074-1.443-2.703-2.533zm3.514 0h4.056c-.138.581-.3 1.122-.497 1.566-.259.582-.56 1.025-.837 1.289-.278.264-.495.345-.694.345-.199 0-.416-.081-.694-.345-.277-.264-.578-.707-.837-1.29-.197-.443-.359-.984-.497-1.565zm5.705 0h1.865c-.629 1.09-1.57 1.973-2.703 2.533.052-.105.106-.208.155-.317.29-.651.514-1.405.683-2.216z"></path>
                           </svg>
                        </span>
                        <span class="text">
                        <a target="_blank" href="http://www.pizzaexpress.ae">{{ item.website }}</a> </span>
                     </div>
                     <div class="col-md-4 col-lg-5 d-flex align-items-start">
                        <span class="icon" style="margin-right:10px;">
                           <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15">
                              <path fill="#606D7A" d="M5.5 0C2.467 0 0 2.353 0 5.245c0 3.362 4.693 8.823 4.893 9.053L5.5 15l.607-.702c.2-.23 4.893-5.691 4.893-9.053C11 2.353 8.533 0 5.5 0zm0 1.5c2.165 0 3.927 1.68 3.927 3.745 0 2.029-2.45 5.518-3.927 7.366-1.477-1.847-3.927-5.334-3.927-7.366C1.573 3.181 3.335 1.5 5.5 1.5zm0 1.867c-1.086 0-1.966.84-1.966 1.875 0 1.036.88 1.875 1.966 1.875 1.086 0 1.966-.84 1.966-1.875 0-1.035-.88-1.875-1.966-1.875z"></path>
                           </svg>
                        </span>
                        <span class="text">{{ item.country }}</span>
                     </div>
                     <div class="col-md-4 col-lg-6 d-flex align-items-start">
                        <span class="icon" style="margin-right:10px;">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path fill="#606D7A" d="M15.132 11.1c-.56-.013-1.265-.046-1.71-.124-.482-.085-1.062-.25-1.47-.378-.32-.1-.668-.011-.906.225l-1.97 1.96C7.714 12.064 6.623 11.228 5.7 10.3c-.93-.923-1.765-2.014-2.482-3.376l1.959-1.971c.236-.237.324-.586.225-.906-.126-.407-.293-.987-.377-1.468-.08-.446-.111-1.15-.125-1.71C4.888.383 4.493 0 4.009 0H.889C.499 0 0 .292 0 .889c0 4.035 1.636 7.888 4.414 10.697C7.224 14.364 11.076 16 15.111 16c.597 0 .889-.5.889-.889v-3.12c0-.484-.384-.879-.868-.89z"></path>
                           </svg>
                        </span>
                        <span class="text">{{ item.phone_no }} </span>
                     </div>
                  </div>
               </div>
               <dl class="info-list" style="display: none;">
                  <div>
                     <dt>Location</dt>
                  </div>
                  <dd>Al Safa Centre (Park-n-Shop)</dd>
                  <dt>Area</dt>
                  <dd>Al Safa</dd>
                  <dt>Phone</dt>
                  <dd class="number">+971 4 394 5616</dd>
                  <dt>Website</dt>
                  <dd><a target="_blank" href="http://www.pizzaexpress.ae">http://www.pizzaexpress.ae</a></dd>
               </dl>
               <!--<a href="#" style="margin-top:30px;" class="btn btn-primary aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">Intro Insider</a>--->
            </div>
         </div>
         
         
         
         
         
         
                  <div data-aos="fade-right" class="col-md-12 col-lg-6 order-lg-1">
                      
            <div class="cover-img-wrap">
               <div class="cover-img">
                  <img alt="PizzaExpress Dubai" class=" lazyloaded main-img" data-src="https://offerengine.theentertainerme.com/pizzaexpress-dubai-x036526/merchant_profile_%22hero%22_image_slide.1_%28retina%29.jpg"  :src="item.background_image">
               </div>
               <div class="merchant-logo">
                  <img alt="PizzaExpress Dubai" class=" lazyloaded" data-src="https://offerengine.theentertainerme.com/pizzaexpress-x036526/merchant_primary_logo_%28retina%29_-_merchant.png" :src="item.image">
               </div>
            </div>
            
         </div>
         
         
      </div>
   </div>
        </div>

</section>



<section class="offer-details-section">
      <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div id="details" v-if="item">
                <div class="head">
                  <img :src="item.image">
                  <h3 class="title">
                   {{ item.title }}
                  </h3>
                  <p class="disc">
                    of equal value or lesser value
                  </p>
                </div>
                
                
                
                
                
                <div class="inner">
                  <ul>
                    <li v-for="feature in item.feature" :key="feature.id"> 	
                      <img :src="item.offer_image">
                        <p>{{ feature }}</p>
                    </li>

                  </ul>
                </div>
                
                
                
                
                <div class="bottom">
                  <p>
                    Your esmated savings
                  </p>
                  <h3>
                  AED {{ item.amount }}
                  </h3>
                  
                  <div class="wrapper" v-if="counts > 0">
                    <p>
                    <!--  you need to buy the mobile product to use this offer -->
                    Enter Company Code
                    </p>
       
                    <form class="form-horizontal form-material" v-on:submit.prevent="submit">
                    <input type="text" v-model.trim="$v.code.$model" :class="{'is-invalid': validationStatus($v.code)}" class="form-control form-control-lg">
                     <div v-if="!$v.code.required" class="invalid-feedback">The code field is required.</div>
                     <br>
                     <button class="btn btn-primary">Redeem</button>
                    </form>


                  </div>


                  <div class="wrapper" v-else>
                    <p> You need to buy the mobile product to use this offer </p>
                    <router-link :to="{ path: '/buy-subscription/'+ item.subscription}" class="btn btn-primary">Purchase </router-link>
                  </div>
                </div>
                
                
                
                
              </div>
            </div>
            <div class="col-md-6">
              <img src="./../assets/front/image/offer-details-bg.jpg">
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
import { required } from 'vuelidate/lib/validators'

export default {
    components:{
        'Front-Header':Header,
        'Front-Footer':Footer,
        'Loader':Loader,
    },
    data(){
      return{
          item: '',
          code: '',
          counts: '',
      }
    },
    validations: {
        code: {required},
    },

    created: function()
    {
        this.fetchItems();
    },

    methods: {

      validationStatus: function(validation) {
         return typeof validation != "undefined" ? validation.$error : false;
      },

      async submit() {

         this.$v.$touch();
         if (this.$v.$pendding || this.$v.$error) return;
        // alert(this.item.id);
         this.query = db.collection("companies")
         .where("cid", "==", this.item.id)
         .where("code", "==", this.code);
         const snapshot = await this.query.get();
         this.count  = snapshot.size;
         if(this.count != 0){

            var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);
            var uid = localStorage.getItem("userSessionId");

            db.collection("redeem_offers")
            .add({
                uid: uid,
                amount: this.item.amount,
                offer_id: this.item.offer_id,
                created: date,
                modified: date,
            }).then(() => {
               console.log("Added Successfully!");
               this.$toasted.success('Success, Offer Redeemed Successfully!', {
                  icon : 'check',
                   //icon : 'error_outline'
               })
               
           })
           .catch((error) => {
               console.error("Error writing document: ", error);
           }); 


           
         }else{
            this.$toasted.error('Error, Wrong value!', {
               //icon : 'check',
                icon : 'error_outline'
            })

         }
         //alert(this.count);
         
      },

      fetchItems()
      {

        var id = this.$route.params.id;

        db.collection("offers").doc(id)
        .get()
        .then((doc) => {

            
            
            db.collection('companies').doc(doc.data().company).get().then( async (res) => {
                console.log('dd');
                console.log(res.data());
                
                this.item = res.data();
                this.item.id = res.id;
                this.item.logo = res.data().image;
                this.item.subscription = res.data().subscription;

                this.item.offer_id = doc.id;
                this.item.title = doc.data().title;
                this.item.offer_image = doc.data().image;
                this.item.amount = doc.data().amount;
                this.item.feature = doc.data().feature;

               // console.log(res.id);


               var uid = localStorage.getItem("userSessionId");

               if(uid != null){

               this.query =  db.collection("order_details").where("uid", "==", uid).where("subscription", "==", res.data().subscription);
               const snapshot =  await this.query.get();
               this.counts  = snapshot.size;
               //console.log('kkk');
               //console.log(this.count);
               
               }

              
            });
           


        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      },
      
    }
}


</script>



