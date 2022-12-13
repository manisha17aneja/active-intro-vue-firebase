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
        <section class="success__section">
          <div class="container">
            <div class="row">
              <!--<div class="col-md-12 head">
                <h2>Payment conformation</h2>
              </div>-->
              <div class="col-md-12 body">
                <div class="payment">
                  <img
                    src="./../assets/front/image/payment-cancel.jpg"
                    alt="imgage"
                  />
                  <h6 class="payment-cancel-heading">Failure to Pay</h6>
                </div>
              </div>
              <div class="col-md-12 footer">
                <h6>Are you sure to cancel payment</h6>
                <router-link to="/" class="btn btn-primary"
                  >Back to home</router-link
                >
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
import Header from "./Front-Header";
import Footer from "./Front-Footer";
import Loader from './Loader';
import { db } from "../main";

export default {
  components: {
    "Front-Header": Header,
    "Front-Footer": Footer,
    'Loader':Loader,
  },
  data() {
    return {
      pages: {},
    };
  },

  created: function() {
    this.fetchPages();
  },

  methods: {
    fetchPages() {
      db.collection("pages")
        .doc("1RlzYqGvTJdi10SUNiDv")
        .get()
        .then((doc) => {
          console.log("hhhh88");
          console.log(doc.id, " => ", doc.data());
          this.pages = doc.data();
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>
