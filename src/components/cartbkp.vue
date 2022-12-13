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

    <div class="feature-img-section user-profile add-to-cart"></div>
    
    <!-- Service section  -->
    <section class="cart_page_outer">
          <div class="container holder cart-holder-new">
            <div class="container">
              <h4 class="mb-10 mt-1 heading">Shopping Cart</h4>
              <table class="table table-xs">
                
                <tbody v-if="!this.subscriptions.length">
                  <tr>You have no items in your shopping cart.</tr> 
                  <br> 
                  <tr>Click <router-link to="/">here</router-link> to continue shopping.</tr>
                </tbody>

                <tbody v-else>
                  <tr>
                    <th class="empty-th"></th>
                    <th class="product-name">Description</th>
                    <th class="product-name product-price">Amount </th>
                    <th class="product-name product-price">Action </th>
                    <th id="clear__cart" class="text-right"></th>
                    
                    
                  </tr>

                  <tr class="item-row" v-for="subscription in this.subscriptions" :key="subscription.title">
                    <td><img :src="subscription.image"></td>
                    <td class="product-discription-td">
                      <h6><strong>{{ subscription.title }}</strong></h6>
                      <p>{{ subscription.description }}</p>
                   
                    </td>
                    <td class="empty-th" title="Amount">AED {{ subscription.vat }}</td>
                    <td class="empty-th text-center" title="Amount"><i class="fas fa-times" @click="deleteItem(subscription.cart_id)"></i></td>
                    
                    
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- payment -->

        <section class="payment-section" v-if="this.subscriptions.length">
          <div class="payment">
            
            <div class="payment-customer">
              <h2>Ivan Yew</h2>
            </div>
            <div class="payment-method">
              <h2>Choose your payment method</h2>
              <div class="pm-item">
                <input id="mpp" type="radio" name="payment-method" checked="checked">
                <label class="pm-label" for="mpp">
                  <div class="pm-text">
                    <h5>Stripe</h5>
                    <p>
                      Safe payment online. Credit card needed. Paypal account is
                      not necessary.
                    </p>
                  </div>
                 <div class="pm-thumb">
                    <img src="./../assets/front/image/Stripe_logo.png">
                  </div>
                </label>
              </div>

              <!--<div class="pm-item">
                <input id="mcc" type="radio" name="payment-method" checked="checked">
                <label class="pm-label" for="mcc">
                  <div class="pm-text">
                    <h5>Credit Card</h5>
                    <p>
                      Safe money transfer using your bank account. Safe payment
                      online. Credit card needed. Visa, Maestro, Discover,
                      American Express
                    </p>
                  </div>
                  <div class="pm-thumb">
                    <img src="data:image/png;base64,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">
                  </div>
                  <div class="pm-thumb">
                    <img src="data:image/png;base64,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">
                  </div>
                </label>
              </div>-->
            </div>

            <div class="payment-input">
            <!--<div class="form-group success">
                <label for="ccnum">Credit Card Number</label>
                <input class="form-control is-valid" id="ccnum" type="text" name="ccnum" value="4542 9931 9292 2293">
              </div>

              <div class="form-group half pr-3">
                <label for="ccmonth">Expiry Date</label>
                <div class="row mx-0">
                  <div class="col-6 pl-0 pr-2">
                    <select class="form-control" id="ccmonth" style="display: none;">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select><div class="nice-select form-control" tabindex="0"><span class="current">1</span><ul class="list"><li data-value="1" class="option selected">1</li><li data-value="2" class="option">2</li><li data-value="3" class="option">3</li><li data-value="4" class="option">4</li><li data-value="5" class="option">5</li><li data-value="6" class="option">6</li><li data-value="7" class="option">7</li><li data-value="8" class="option">8</li><li data-value="9" class="option">9</li><li data-value="10" class="option">10</li><li data-value="11" class="option">11</li><li data-value="12" class="option">12</li></ul></div>
                  </div>
                  <div class="col-6 pl-2 pr-0">
                    <select class="form-control" id="ccyear" style="display: none;">
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select><div class="nice-select form-control" tabindex="0"><span class="current">2018</span><ul class="list"><li data-value="2018" class="option selected">2018</li><li data-value="2019" class="option">2019</li><li data-value="2020" class="option">2020</li><li data-value="2021" class="option">2021</li><li data-value="2022" class="option">2022</li><li data-value="2023" class="option">2023</li><li data-value="2024" class="option">2024</li><li data-value="2025" class="option">2025</li></ul></div>
                  </div>
                </div>
              </div>-->

             <!-- <div class="form-group half pl-3">
                <label for="cccode">CVV Code <span class="question">?</span></label>
                <input class="form-control is-invalid" id="cccode" type="text" name="cccode">
              </div>
              <div class="form-group">
                <label for="ccname">Name on Card</label>
                <input class="form-control" id="ccname" type="text" name="ccname">
              </div>-->
              
                            <div class="form-group rightColumn">
                <!--<ul class="priceInfo pl-0">
                  <li>
                    <span class="title"> Subtotal </span>
                    <span class="value"> AED 1135.00 </span>
                  </li>
                  <li>
                    <span class="title"> VAT <mark class="vat"> 5%</mark> </span>
                    <span class="value"> AED 56.75 </span>
                  </li>
                </ul>-->
                <ul class="priceInfo total">
                  <li>
                    <span class="title"> Total </span>
                    <span class="value">
                      AED 100
                      <input type="hidden" id="__crtamt" value="1191.75" />
                    </span>
                  </li>
                </ul>

              </div>
              
            </div>
            <div class="payment-actions">
            <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
            <button type="submit" v-on:click="submit" class="btn btn-primary">Pay Now</button>
              <!--<a class="return" href="javascript:void(0);">Return to Shipping</a><a class="finish" href="javascript:void(0);">Finish Order <i class="fa fa-long-arrow-alt-left"></i></a>-->
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
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import Header from './Front-Header';
import Footer from './Front-Footer';
import { db } from './../main'

export default {
    components:{
        'Front-Header':Header,
        'Front-Footer':Footer,
        StripeCheckout,
    },
    data(){
      this.publishableKey = 'pk_test_51IvgnHSF16PyZdeZoLgno8JkwOa1asRi6losyI2Bmb0Bi9cYgoNQJiDcOR0uPN5u5dT4QfWAJhuxTQLUdAEbwdTp00jFNCyQAd';
      return{
          subscriptions: [],
          category: '',

          loading: false,
          lineItems: [
            {
              price: 'price_1IvyPgSF16PyZdeZu0RGZkBi', // The id of the recurring price you created in your Stripe dashboard
              quantity: 1,
            },
           /* {
              price: 'price_1IvyL6SF16PyZdeZtWUHqblW', // The id of the recurring price you created in your Stripe dashboard
              quantity: 1,
            },
            {
              price: 'price_1IvyR3SF16PyZdeZDtFGwSjp', // The id of the recurring price you created in your Stripe dashboard
              quantity: 1,
            },*/
          ],
          successURL: 'https://the-active-intro-2021.firebaseapp.com/success',
          cancelURL: 'https://the-active-intro-2021.firebaseapp.com/cancel',
      }
    },

    created: function()
    {
        this.fetchItems();
    },

    methods: {

submit () {
  // You will be redirected to Stripe's secure checkout page
  this.$refs.checkoutRef.redirectToCheckout();
},

mounted() {
  this.fetchItems();
},

deleteItem(id) {
  console.log(id);
  if(confirm("Do you really want to delete?")){
         // alert('dddd');
        db.collection("cart")
          .doc(id)
          //.where("subscription", "==", id)
         .delete()
          .then(() => {
            console.log("Document successfully deleted!");
            this.fetchItems();
            this.$toasted.success('Success, Deleted Successfully!', {
              icon : 'check',
               //icon : 'error_outline'
           })
           location.reload();
           //this.$router.push('/companies/index');
            
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
  
      }
    },

      fetchItems()
      {
        this.subscriptions = [];
        var uid = localStorage.getItem("userSessionId");
        var randomId = localStorage.getItem("randomId");

        //db.collection("cart").where("uid", "==", uid)
        var query = db.collection("cart")

        if (uid != null){
          console.log('yes');
          query = query.where("uid", "==", uid)
        }else{
          console.log('no');
          query = query.where("random_id", "==", randomId)
        }

        query.get()
        .then((querySnapshot) => {
        //  console.log('hhhh');
          querySnapshot.forEach((docs) => {

           // console.log(docs.id, " => ", docs.data());

        db.collection("subscriptions").doc(docs.data().subscription)
        .get()
        .then((doc) => {
         // console.log('hhhh');
          

            console.log(doc.id, " => ", doc.data());
            
            //db.collection('categories').doc(doc.data().category).get().then((res) => {

                //this.category = res.data().name;
                var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
                var vat = discountPrice + discountPrice * doc.data().vat/100;

                this.subscriptions.push({
                  id: doc.id,
                  cart_id: docs.id,
                  //category: this.category,
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

           // });
            

         
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

        });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });


      }
    }
}

</script>

