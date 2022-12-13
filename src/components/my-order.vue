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


    <!-- Main Start-->
  
    <br><br>
    <br><br>
<div v-for="order in orders" :key="order.id">
 subscription =   {{ order.subscription }} 
 <br>
 uid =   {{ order.uid }}
 <br>
 order_id =   {{ order.order_id }}
 <br>
 title =   {{ order.title }}
 <br>
 image =   {{ order.image }}
 <br>
 order_id =   {{ order.order_id }}
    
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


import { db } from '../main'

  
export default {
  components:{
    'Front-Header':Header,
    'Front-Footer':Footer,

},
data(){
    return{
      orders:[],

    }
  },

  created: function()
  {
 
      this.myOrders();

  },

  methods: {

    myOrders()
    {

    this.orders = [];

    var uid = localStorage.getItem("userSessionId");

    db.collection("cart").where("uid", "==", uid)
    .get()
    .then((querySnapshot) => {

        querySnapshot.forEach((docs) => {
            
            console.log('hhhh88');
            //console.log(docs.id, " => ", docs.data());
            //this.orders = docs.data();
            db.collection("subscriptions").doc(docs.data().subscription)
            .get().then((doc) => {

                /*this.orders.push({
                    id: docs.id,
                    uid: docs.data().uid,
                    subscription: docs.data().subscription,
                    created: docs.data().created,

                    title: doc.data().title,
                    image: doc.data().image,
                    price: doc.data().price,
                    title: doc.data().title,
                    
                });*/

                var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
                var vat = discountPrice + discountPrice * doc.data().vat/100;

                this.orders.push({

                    order_id: docs.id,
                    uid: docs.data().uid,
                    subscription: docs.data().subscription,

                    title: doc.data().title,
                    tag: doc.data().tag,
                    description: doc.data().description,
                    image: doc.data().image,
                    price: doc.data().price,
                    discount: doc.data().discount,
                    discountPrice: discountPrice,
                    vat: vat,
                    created: doc.data().created,
                });

                console.log(this.orders);
            })
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
    });


    },
   
  }
}
    
</script>




