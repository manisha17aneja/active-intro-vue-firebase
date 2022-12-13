<template>

<body>
<!--<div class="preloader">
        <div class="loader">
            <div class="side">
                <div class="left"></div>
                <div class="right"></div>
                <div class="top"></div>
                <div class="bottom"></div>
            </div>
        </div>
        </div>-->
    <div class="frame">
  <div class="site-wrapper overflow-hidden">

     <!-- Header Section -->
    <Front-Header> </Front-Header>

    <!--<section class="hero_section height-half text-center">
    <img src="./../assets/front/image/contact-bg.jpg" style="position: absolute;">

          <div class="container">
              <h1 data-aos="fade-right" data-aos-duration="1200" class="aos-init aos-animate">fdsfsd</h1>
              <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" class="aos-init aos-animate">ddd</p>
          </div>
    </section>-->

    <!-- Main End-->
    <section id="entProductSection" class="bg-default-4 pt-15 pb-13 py-lg-20 home_products">
          <div class="container">
            <!--<div class="row">
              <div class="col-12 text-center">
                <h2 class="sec-title gr-text-4 mb-10">
                Testing
                </h2>
              </div>
            </div>-->
            <div class="row justify-content-center position-relative gr-z-index-1">

              <div class="col-md-4">
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
                                <li  v-for="tag in subscription.tag" :key="tag.value">
                                  <span class="text d-block">{{ tag.value }}</span>
                                </li>
                              </ul>
                            </div>
                            <router-link to="/cart" class="btn btn-primary subscribe_btn btn-with-link" tabindex="0">Buy now</router-link>
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
                    these and start a new order?
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
import { db } from './../main'


export default {
    components:{
        'Front-Header':Header,
        'Front-Footer':Footer
    },
    data(){
      return{
        subscription: '',
      }
    },

    created: function()
    {
        this.fetchItems();
    },

    methods: {

      fetchItems()
      {

        var id = this.$route.params.id;

        db.collection("subscriptions").doc(id)
        .get()
        .then((doc) => {

            var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
            var vat = discountPrice + discountPrice * doc.data().vat/100;

            this.subscription = doc.data();
            this.subscription.discountPrice= discountPrice;
            this.subscription.vat= vat;

        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });


      },
      
    }
}


</script>
