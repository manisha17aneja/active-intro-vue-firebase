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
                    src="./../assets/front/image/payment-success.jpg"
                    alt="imgage"
                  />
                  <h6 class="payment-success-heading">Payment Successful</h6>
                </div>
              </div>
              <div class="col-md-12 footer">
                <h6>
                  Thank you for your payment
                </h6>
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
      total_amount:0,
    };
  },

  created: function() {
    this.fetchPages();
    this.saveOrder();
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

    saveOrder() {

      var uid = localStorage.getItem("userSessionId");
      var  date = new Date().toLocaleString();

      db.collection("orders")
      .add({ 
          
          uid: uid,
          created: date,
          modified: date,
      })
      .then((doc) => {

        

        db.collection("cart")
        .where("uid", "==", uid)
        .get()
        .then((querySnapshot) => {

          querySnapshot.forEach((res) => {

            db.collection("order_details")
            .add({ 
              subscription: res.data().subscription,
              uid: res.data().uid,
              order_id: doc.id,
              created: date,
              modified: date,
            })
            .then((docs) => {
              //alert('done');
              console.log(docs);
              db.collection("cart").doc(res.id).delete();
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

            //this.total_amount = parseFloat(this.total_amount) + parseFloat(res.data().amount);
            this.total_amount = this.total_amount + res.data().amount;
            

          });
         // alert(this.total_amount);
          db.collection("orders").doc(doc.id).update({ total_amount: this.total_amount });
          
        }); 
        
        

      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      }); 
    
    },
  },
};
</script>
