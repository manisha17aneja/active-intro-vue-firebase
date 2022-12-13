<template>
<!-- Main Start -->
<section id="entProductSection" class="service-section bg-default-4 pt-15 pb-13 py-lg-20 home_products">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="sec-title gr-text-4 mb-10">
                {{ components.title }}
                </h2>
              </div>
            </div>
            <div class="row justify-content-center position-relative gr-z-index-1">

              <div class="col-md-4" v-for="subscription in subscriptions" :key="subscription.id">
                                  <div class="product_details">
                           <router-link :to="{ path: '/subscriptions/'+ subscription.id}" onclick="showLoader()" class="d-block" tabindex="0"></router-link>
                          <div class="top-content">
                          <router-link :to="{ path: '/subscriptions/'+ subscription.id}" onclick="showLoader()" class="d-block" tabindex="0">
                              <div class="product_img">
                                <img data-src="https://etsitecdn.theentertainerme.com/gallery/product2021/DXB+Classic-Product+d.png" alt="Dubai Classic 2021" class="img-fluid lazyloaded" :src="subscription.image">
                              </div>
                              </router-link>
                            <router-link :to="{ path: '/subscriptions/'+ subscription.id}" tabindex="0">
                              <div class="product_details_inner d-flex flex-column justify-content-center">
                                <h2 class="product_name m-0">{{ subscription.title }}</h2><small class="short_desc">{{ subscription.tag_line }}</small>
                                <div class="product_price">
                                  <div class="tag-wrap">
                                    <span class="badge_transparent d-inline-flex align-items-center justify-content-center">
                                      Special Offer</span>
                                  </div>
                                  <span class="strike"><span class="before_price">AED {{ subscription.price }}</span></span>
                                  <span class="percentage_off ml-1"> {{ subscription.discount }} % Off </span>
                                  <h3 class="after_price">
                                    AED {{ subscription.discountPrice }}
                                    
                                    <span class="vat_info">*AED {{ subscription.vat }} including VAT</span>
                                  </h3>
                                </div>
                              </div>
                              </router-link>
                           <!-- <div data-type="product" data-amount="25725" data-currency="AED" data-num-instalments="3" class="postpay-widget">
                              <div class="postpay-product-widget-container postpay-locale-en light">
                                <div class="postpay-product-widget-text">
                                  Or 3 interest-free instalments every month of
                                  <div class="postpay-product-price-wrapper">
                                    <span class="postpay-pay-later-item-currency">AED</span>
                                    <span class="postpay-product-price"> 85.75 </span>
                                  </div>
                                  with
                                  <a href="https://postpay.io" target="_blank" class="postpay-brand postpay-link">postpay
                                    <svg width="10" height="10" enable-background="new 0 0 27.964 27.964" viewBox="0 0 27.964 27.964" xmlns="http://www.w3.org/2000/svg">
                                      <path d="m13.982.001c-7.723 0-13.982 6.258-13.982 13.983 0 7.721 6.259 13.98 13.982 13.98 7.722 0 13.982-6.26 13.982-13.98.001-7.725-6.26-13.983-13.982-13.983zm0 26.532c-6.933 0-12.551-5.619-12.551-12.549 0-6.935 5.618-12.552 12.551-12.552 6.931 0 12.55 5.617 12.55 12.552 0 6.93-5.619 12.549-12.55 12.549z"></path>
                                      <path d="m12.004 10.551h3.931v12.649h-3.931z"></path>
                                      <path d="m13.995 5.072c-1.265 0-2.095.852-2.095 1.963 0 1.087.802 1.964 2.044 1.964 1.317 0 2.119-.877 2.119-1.964-.026-1.111-.801-1.963-2.068-1.963z"></path>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p class="become-member prospect-user">
                              Get Cheers, Body, Fitness &amp; Adrenaline for an extra
                              <span class="inline-link">AED 95</span>
                            </p>-->
                          </div>
                          <div class="bottom-content">
                            <div class="d-flex">
                              
                              <ul class="product_features list-unstyled d-flex flex-wrap flex-column p-0">
                                <li  v-for="tag in subscription.tags" :key="tag.value">
                                  <span class="text d-block">{{ tag.value }}</span>
                                </li>
                              </ul>
                            </div>
                            <button type="submit" v-on:click="submit(subscription.id, subscription.vat,)" class="btn btn-primary subscribe_btn btn-with-link">Buy Now</button>
                           
                            <div class="btn_bottom">
                            <router-link :to="{ path: '/subscriptions/'+ subscription.id}" class="d-inline-block" tabindex="0">Tell me more</router-link>
                            </div>
                          </div>
                        </div>
              </div>


        
            </div>
          </div>
          <div tabindex="-1" role="dialog" aria-hidden="true" class="modal fade upsellmodal">
            <div role="document" class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header modal-header-top p-0">
                  <button type="button" data-dismiss="modal" aria-label="Close" class="close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <!---->
              </div>
            </div>
          </div>
          <div tabindex="-1" role="dialog" aria-hidden="true" class="modal fade genericModalConsent separateProduct">
            <div role="document" class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header modal-header-top p-0">
                  <button type="button" data-dismiss="modal" aria-label="Close" class="close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body text-center">
                  <p>
                    You already have products in your basket. Do you wish to remove
                    these and start a new order ?
                  </p>
                  <div class="d-flex">
                    <!---->
                    <a href="&amp;cartRefresh=1" class="btn cheersCntBtn subscribe_btn">Yes</a>
                    <a href="javascript:void(0);" data-dismiss="modal" class="btn cheersCntBtn subscribe_btn">No</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button data-toggle="modal" data-target=".upsellmodal" data-keyboard="false" data-backdrop="static" class="tempUpsellBtn" style="display: none"></button>
          <button data-toggle="modal" data-target=".separateProduct" data-keyboard="false" data-backdrop="static" class="tempSeparateBtn" style="display: none"></button>
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
        subscriptions: [],
        category: '',
        components:{},
        sid:'',
        cart: false,
        random_id:"",
        slug:"",
    }
  },

  created: function()
  {
      this.fetchItems();
  },
   watch: {

      // Watch for route changes
      $route(route) {
        console.log(route.params.slug);
        
       this.fetchItems();

      },
    },

  methods: {

    async submit(sid, amount) {

      var uid = localStorage.getItem("userSessionId");
      var randomId = localStorage.getItem("randomId");

      this.sid = sid;
      this.amount = amount;
      
      function makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join('');
      }
      
      if(uid == null && randomId == null){

          console.log('no both ');

          this.random_id = makeid(10);
          localStorage.setItem("randomId", this.random_id);
          this.query = db.collection("cart").where("random_id", "==", this.random_id).where("subscription", "==", this.sid);

      } else if(uid == null && randomId != null){

          console.log('no uid ');

          this.random_id = randomId;
          this.query = db.collection("cart").where("random_id", "==", this.random_id).where("subscription", "==", this.sid);

      } else if(uid != null && randomId != null){
      
          console.log(' both ');

          this.random_id = randomId;
          this.query = db.collection("cart").where("uid", "==", uid).where("subscription", "==", this.sid);
        
      }else{

          console.log('no randid ');

          this.random_id = makeid(10);
          localStorage.setItem("randomId", this.random_id);
          this.query = db.collection("cart").where("uid", "==", uid).where("subscription", "==", this.sid);

      }

      const snapshot = await this.query.get();
      const count = snapshot.size;
      console.log(count);

      if(count <= 0){

        this.cart = true;

        var  date = new Date().toLocaleString();

        db.collection("cart")
        .add({ 
            amount:this.amount,
            subscription: this.sid,
            uid: uid,
            random_id: this.random_id,
            created: date,
            modified: date,
        })
        .then((doc) => {

            db.collection("companies").doc(doc.id).update({ cid: doc.id });

            this.$toasted.success('Success, Added Successfully!', {
                icon : 'check',
            })
            this.$router.push('/cart');
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        }); 

        
      }else{
        this.$toasted.error('Error, Already Added!', {
          //icon : 'check',
          icon : 'error_outline'
      })
      this.$router.push('/cart');
      }
      
    },

    fetchItems()
    {

      this.subscriptions = [];
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
        
              var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
              var vat = discountPrice + discountPrice * doc.data().vat/100;

              this.subscriptions.push({
                id: doc.id,
                title: doc.data().title,
                tag_line: doc.data().tag_line,
                tags: doc.data().tag,
                description: doc.data().description,
                image: doc.data().image,
                price: doc.data().price,
                discount: doc.data().discount,
                discountPrice: discountPrice,
                vat: vat,
                created: doc.data().created,
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


    }
  }
}
  
</script>


