<template>
  <!-- Footer Start -->
  <div class="footer-section dark-mode-texts">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xs-6 col-lg-3 col-md-3 col-sm-6 col-6">
          <div class="single-footer mb-13 mb-lg-9">
            <h3 class="footer-title mb-7">Company</h3>
            <ul class="footer-list list-unstyled gr-text-9">
              <li class="py-2">
                <router-link to="/" class="gr-text-color">Home</router-link>
              </li>
              <li class="py-2">
                <router-link to="/about" class="gr-text-color"
                  >About us</router-link
                >
              </li>
              <li class="py-2">
                <router-link to="/terms-and-conditions" class="gr-text-color"
                  >Terms and Conditions</router-link
                >
              </li>
              <li class="py-2">
                <router-link to="/privacy-policy" class="gr-text-color"
                  >Privacy Policy</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xs-6 col-lg-3 col-md-3 col-sm-6 col-6">
          <div class="single-footer mb-13 mb-lg-9">
            <h3 class="footer-title mb-7">Explore</h3>
            <ul class="footer-list list-unstyled gr-text-9">
              <li class="py-2">
                <router-link to="/contact" class="gr-text-color"
                  >Contact us</router-link
                >
              </li>
              <li class="py-2">
                <router-link to="/faqs" class="gr-text-color"
                  >FAQ's</router-link
                >
              </li>
              <li class="py-2">
                <router-link to="/blogs" class="gr-text-color"
                  >Blogs</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xs-6 col-lg-3 col-md-3 col-sm-6 col-6">
          <div class="single-footer mb-13 mb-lg-9">
            <h3 class="footer-title mb-7">Address</h3>
            <ul class="footer-list list-unstyled gr-text-9">
              <li class="py-2">
                <router-link to="" class="gr-text-color">{{
                  users.address1
                }}</router-link>
              </li>
              <li class="py-2">
                <router-link to="" class="gr-text-color">{{
                  users.address2
                }}</router-link>
              </li>
              <li class="py-2">
                <router-link to="" class="gr-text-color"
                  >{{ users.city }}, {{ users.state }}</router-link
                >
              </li>
              <li class="py-2">
                <router-link to="" class="gr-text-color"
                  >{{ users.country }} - {{ users.postal_code }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xs-6 col-lg-3 col-md-3 col-sm-6 col-6">
          <div class="single-footer mb-13 mb-lg-9 app_links">
            <h3 class="footer-title mb-7">Connect with Us</h3>
            <ul class="footer-list list-unstyled gr-text-9">
              <li class="py-2">
                <a
                  v-bind:href="'' + links.android + ''"
                  class="gr-text-color google_play"
                ></a>
              </li>
              <li class="py-2">
                <a
                  v-bind:href="'' + links.ios + ''"
                  class="gr-text-color apple_store"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row copyright">
        <div class="col-lg-8 col-md-9">
          <ul class="bottom_footer_menu">
            <li>Active Intro, Inc. 2021</li>
            <!--<li><a href="#">Help</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>-->
          </ul>
        </div>
        <div class="col-lg-4 col-md-3">
          <ul class="footer_social">
            <li>
              <a v-bind:href="'' + sociallinks.facebook + ''"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
            <li>
              <a v-bind:href="'' + sociallinks.twitter + ''"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a v-bind:href="'' + sociallinks.instagram + ''"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>

<script>
/*
import './../assets/front/js/vendor.min.js';

import './../assets/front/plugins/fancybox/jquery.fancybox.min.js';

import '../../assets/front/plugins/aos/aos.min.js';

import './../assets/front/plugins/slick/slick.min.js';

import './../assets/front/plugins/date-picker/js/gijgo.min.js';

import './../assets/front/plugins/counter-up/jquery.waypoints.min.js';

import './../assets/front/counter-up/jquery.counterup.min.js';


*/

import "./../assets/front/plugins/nice-select/jquery.nice-select.min.js";

import "./../assets/front/js/custom.js";

import { db } from "../main";

export default {
  components: {},
  data() {
    return {
      links: {},
      sociallinks: {},
      users: {},
    };
  },

  created: function() {
    this.fetchFeatures();
    this.getUser();
  },

  methods: {
    getUser() {
      db.collection("users")
        .doc("6zoxAapxwxfb3Nu8H8tl")
        .get()
        .then((doc) => {
          // console.log('hhhh99');
          //console.log(doc.id, " => ", doc.data());
          this.users = doc.data();
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },

    fetchFeatures() {
      db.collection("links")
        .doc("RH0Mssvb2kzH1nn22v3I")
        .get()
        .then((doc) => {
          //console.log('hhhh44');
          //console.log(doc.id, " => ", doc.data());
          this.links = doc.data();
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      db.collection("sociallinks")
        .doc("ot3idgvr902v0m6ynLEz")
        .get()
        .then((doc) => {
          //console.log('hhhh55');
          //console.log(doc.id, " => ", doc.data());
          this.sociallinks = doc.data();
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>
