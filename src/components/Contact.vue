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
    <img :src="pages.image" style="position: absolute;" :alt="pages.title">       
          <div class="container">
              <h1 data-aos="fade-right" data-aos-duration="1200" class="aos-init aos-animate">{{ pages.title }}</h1>
              <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" class="aos-init aos-animate">{{ pages.short_description }}</p>
          </div>
    </section>

    <!--Contact-us start-->
    <div id="contactUs">
        <section class="contact_wrapper">
        <div class="container">
            <div class="contact_info">
    <h3 class="title">
      Contact Info
    </h3>

    <ul class="icons_wrapp pl-0">
      <li class="d-flex">
        <div class="icon">
          <i class="fas fa-map-marker-alt mr-2"></i>
        </div>
        <div class="text">
        {{ users.address1 }}, {{ users.address2 }}, {{ users.city }}, {{ users.country }}   
        </div>
      </li>
      <li>
        <div class="icon">
          <i class="fas fa-envelope mr-2"></i>
        </div>
        <div class="text">
        {{ users.email }}
        </div>
      </li>
      <li>
        <div class="icon">
          <i class="fa fa-phone-alt mr-2"></i>
        </div>
        <div class="text">
        {{ users.phone }}
        </div>
      </li>
    </ul>

    <ul class="soci_wrap pl-0">
      <li>
        <a v-bind:href="''+sociallinks.facebook+''">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a v-bind:href="''+sociallinks.twitter+''">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a v-bind:href="''+sociallinks.instagram+''">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
     
      <!--<li>
        <a v-bind:href="''+sociallinks.facebook+''">
          <i class="fab fa-youtube"></i>
        </a>
      </li> -->
    </ul>
  </div>
  
  <div class="contact_msg">
    <h3 class="title">
      Send a Message
    </h3>

    <form class="form-horizontal form-material" v-on:submit.prevent="submit">
    <div class="form_fild">
      <div class="input_group w_50">
        <input type="text" class="input" v-model.trim="$v.first_name.$model" :class="{'is-invalid': validationStatus($v.first_name)}">
        <div v-if="!$v.first_name.required" class="invalid-feedback">The first name field is required.</div>
        <label class="placeholder">First Name</label>
      </div>

      <div class="input_group w_50">
        <input type="text" class="input" v-model.trim="$v.last_name.$model" :class="{'is-invalid': validationStatus($v.last_name)}">
        <div v-if="!$v.last_name.required" class="invalid-feedback">The last name field is required.</div>
        <label class="placeholder">Last Name</label>
      </div>

      <div class="input_group w_50">
        <input type="text" class="input" v-model.trim="$v.email.$model" :class="{'is-invalid': validationStatus($v.email)}">
        <div v-if="!$v.email.required" class="invalid-feedback">The email field is required.</div>
        <div v-if="!$v.email.email" class="invalid-feedback">Email is invalid.</div>
        <label class="placeholder">Emal Address</label>
      </div>

      <div class="input_group w_50">
        <input type="tel" class="input" v-model.trim="$v.phone_no.$model" :class="{'is-invalid': validationStatus($v.phone_no)}">
        <div v-if="!$v.phone_no.required" class="invalid-feedback">The phone number field is required.</div>
        <label class="placeholder">Phone Number</label>
      </div>

      <div class="input_group w-100">
        <textarea class="input input_textarea" rows="6" v-model.trim="$v.message.$model" :class="{'is-invalid': validationStatus($v.message)}"></textarea>
        <div v-if="!$v.message.required" class="invalid-feedback">The message field is required.</div>
        <label class="placeholder textarea">Write your message here...</label>
      </div>

      <div class="input_group">
        <input type="submit" class="btn" value="Send">
      </div>

    </div>
    </form>

  </div>

        </div>
    </section>
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
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

  export default {
    components:{
      'Front-Header':Header,
      'Front-Footer':Footer,
      'Loader':Loader,
  },
  data(){
    return{
      pages:{},
      users:{},
      sociallinks:{},

      first_name: '',
      last_name: '',
      email: '',
      phone_no: '',
      message: '',
    }
  },
  validations: {
      first_name: {required},
      last_name: {required},
      email: { required, email },
      phone_no: {required},
      message: {required},
  },

  created: function()
  {
      this.fetchPages();
      this.getUser();
  },

  methods: {

    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit: function() {

      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      //var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);  

      // POST request using axios with set headers
      const data = {
      "email": "admin@gmail.com",
      "password": "admin@gmail.com",
      };


      axios.post("https://demo.fortecsolution.com/laravel6/api/getAll", data)
      .then((response)=>{
        console.warn(response);

        this.$toasted.success('Success, Sent Successfully!', {
          icon : 'check',
           //icon : 'error_outline'
        })

      });
    },


    getUser()
    {
      db.collection("users").doc('6zoxAapxwxfb3Nu8H8tl')
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

    fetchPages()
    {

      db.collection("pages").doc('W3sk77Lpp6GYAS2RXM6F')
      .get()
      .then((doc) => {
        console.log('hhhh88');
          console.log(doc.id, " => ", doc.data());
              this.pages = doc.data();

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

      db.collection("sociallinks").doc('ot3idgvr902v0m6ynLEz')
      .get()
      .then((doc) => {
              //console.log('hhhh55');
              //console.log(doc.id, " => ", doc.data());
              this.sociallinks = doc.data();
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


    }
  }
}
    
</script>

