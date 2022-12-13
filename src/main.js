import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
//import firebaseApp from 'firebase/app';
import firebase from "firebase";
import store from "./store";
import './plugins/element.js'

//import "./assets/style.css";
//import "./assets/style1.css";
import Toasted from 'vue-toasted';
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
//import routes from './routes'
//import jQuery from 'jquery'
import VOffline from 'v-offline';

window.$ = window.jQuery = require('jquery')


import jquery from 'jquery';

window.$ = window.jQuery = jquery; //If you have normal javascript file (main.js)
import 'bootstrap';

import BootstrapSideBar from 'b-sidebar';

import axios from 'axios'
import VueAxios from 'vue-axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//import CKEditor from 'ckeditor4-vue';


import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use( CKEditor );

//global.jQuery = jQuery
//global.$ = jQuery

Vue.config.productionTip = false;


import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMMM, Y hh:mm A')
    }
});

Vue.filter('validDate', function(value) {
  if (value) {
      return moment(String(value)).format('DD MMMM, Y')
  }
});

import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC-Nup2C6bBID94zvlqSfDcq6IQ03zy7pI',
    libraries: 'places',
  },
})

import VueSidebarMenu from 'vue-sidebar-menu'
//import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

/*
import VueCardPayment from 'vue-card-payment'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-card-payment/dist/vue-card-payment.css'

Vue.use(VueCardPayment)

import { StripePlugin } from '@vue-stripe/vue-stripe';

const options = {
  pk: 'pk_test_51IvgnHSF16PyZdeZoLgno8JkwOa1asRi6losyI2Bmb0Bi9cYgoNQJiDcOR0uPN5u5dT4QfWAJhuxTQLUdAEbwdTp00jFNCyQAd',
  stripeAccount: 'acct_1IvgnHSF16PyZdeZ',
  apiVersion: '2020-08-27',
  locale: 'en',
};

Vue.use(StripePlugin, options);
*/
Vue.use(VOffline);

Vue.use( CKEditor );
Vue.use(VueAxios,axios)
Vue.use(BootstrapVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(Vuelidate);
Vue.use(Toasted, {
  duration: 2000
})
Vue.use(BootstrapSideBar);

/*
var configOptions = {
  apiKey: "AIzaSyCCq52doafLrCgEtBbxClk4zwmvACFfKqg",
  authDomain: "tryproject-2ac32.firebaseapp.com",
  databaseURL: "https://tryproject-2ac32-default-rtdb.firebaseio.com",
  projectId: "tryproject-2ac32",
  storageBucket: "tryproject-2ac32.appspot.com",
  messagingSenderId: "210588634555",
  appId: "1:210588634555:web:97e0c17344bc4f64f0489e",
  measurementId: "G-00GE88C3D5"
};
*/
/*
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const configOptions = {
  apiKey: "AIzaSyATGKVNKZ4YYOd2KMu6Z_sPhO2ARmcQ2rA",
  authDomain: "active-intro.firebaseapp.com",
  databaseURL: "https://active-intro-default-rtdb.firebaseio.com/",
  projectId: "active-intro",
  storageBucket: "active-intro.appspot.com",
  messagingSenderId: "848593232708",
  appId: "1:848593232708:web:4c6b6c2622f3eadfbb6d11",
  measurementId: "G-CDC8DEXETD"
};*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const configOptions = {
  apiKey: "AIzaSyDwMjsJK-G_lyBvOsGsq_ELOLzG3S2pZhM",
  authDomain: "the-active-intro-2021.firebaseapp.com",
  databaseURL: "https://the-active-intro-2021-default-rtdb.firebaseio.com/",
  projectId: "the-active-intro-2021",
  storageBucket: "the-active-intro-2021.appspot.com",
  messagingSenderId: "481542348965",
  appId: "1:481542348965:web:e63e22e3e46a1b27916d4c",
  measurementId: "G-GKXGLJWFZS"
};


/* Initialize firebase with your configuration */
firebase.initializeApp(configOptions);

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;
//console.log('dasda');
//console.log(firebase.auth());

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
 // console.log(user);
});


export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



