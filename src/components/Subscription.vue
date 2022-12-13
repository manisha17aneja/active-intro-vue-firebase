<template>
<body>
<!-- preloader -->
<Loader> </Loader>
<!-- preloader -->
    
    
     <div class="frame">
  <div class="site-wrapper overflow-hidden">
   
  <Front-Header> </Front-Header>

  <section class="single_hero height-half">
                <div class="container h-100">
                    <div class="row position-relative gr-z-index-1 align-items-start">
                        <div class="col-md-3">
                            <img :src="item.image"/>
                        </div>
                        <div class="col-md-5">
                            <div class="heading">
                                <h1>{{ item.title }}</h1>
                                <p>{{ item.description }}</p>
                            </div>

                            <ul class="offer_list mt-4">
                                <li v-for="tag in this.item.tag" :key="tag.value"><span class="offer_text">{{ tag.value }}</span></li>
                            </ul>
                        </div>
                        <div class="col-md-3 content_side">
                            <div class="info_box">
                                <span class="badge badge-primary">Special Offer</span>
                                <h3 class="price"> <del>AED {{ item.price }}</del> {{ item.discount }} % Off</h3>
                                <h1 class="mb-7">AED {{ item.discountPrice }}</h1>
                                <p>*AED {{ item.vat }} including VAT</p>
           
                                  <button type="submit" v-on:click="submit" class="btn btn-primary w-100">Buy Now</button>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
	
	<section class="package_includes">
	<div class="container">
	<div class="text-center">
	<h2 class="mb-10">{{ company.title }}</h2>

  
	
	<ul class="nav nav-tabs">

  <li class="nav-item">
    <a class="nav-link active" v-bind:class="[isActive ? 'true' : 'false']" data-toggle="tab" v-on:click="getCompanies()">All</a>
  </li>
    
  <li class="nav-item" v-for="category in categories" :key="category.id">
    <a class="nav-link" v-bind:class="[isActive ? 'false' : 'true']" data-toggle="tab" v-on:click="getByCategory(category.id)">{{ category.name }}</a>
  </li>
 
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane container active" id="all">
  
  <div class="row" v-if="!companies.length">No results found</div>
   <div class="row" v-else>   
  <div class="col-md-4 col-sm-6" v-for="company in companies" :key="company.id">
   <router-link :to="{ path: '/single-company/'+ company.id}">
  <div class="package">
 
  <div class="main_img">


  <img  v-if="company.background_image" v-bind:src="company.background_image" alt="tarun">
  <img  v-else src="./../assets/front/image/profile_img2.jpg" alt="tarun">
  <h3>{{ company.name }}</h3>
  <h5>{{ company.category }}</h5>


  <img class="pakage-logo" v-if="company.image" v-bind:src="company.image" alt="tarun">
  <img class="pakage-logo" v-else src="./../assets/front/image/profile_img2.jpg" alt="tarun">
  
  </div>


  <!--<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. </p>-->
   <!--<div class="get-code">-->
   <!--        <a href="#" class="trigger get-code triggerable" >Get code</a>-->
   <!--        <div class="code-partial-hidden">  -->
   <!--        <span class="meta-field coupon ">-->
   <!--              <span class="value">SushiLovers12 -->
   <!--                 <span class="units"></span>-->
   <!--              </span>-->
   <!--         </span> -->
   <!--         </div>-->
   <!--    </div>-->
   <!-- <div class="package-footer">-->
   <!--     <span>Valid till 24th Apr, 21</span>-->
   <!-- </div>-->
     <div class="package_content">
  <ul>
  <li v-for="tag in company.tag" :key="tag.value"> {{ tag.value }}</li>
  </ul>

  </div>
  </div>
  </router-link>
  </div>


  </div>
  </div>
 
</div>


	</div>
	</div>
	</section>
	
	<section class="testimonials">
	<div class="container">
	<div class="text-center">
	<h2 class="mb-15">{{ review.title }}</h2>
	<div class="row align-items-center justify-content-around">

                          <div class="col-lg-4 col-md-6 col-sm-9 mb-16" v-for="review in reviews" :key="review.id">
                            <div class="single-testimonial text-center h-100 d-flex flex-column px-5">
                              <div class="brand-logo mb-9 mb-lg-13">
                                <img :src="review.image" alt="">
                              </div>
                              <p class="review-text mb-0 gr-text-6 font-weight-bold gr-text-color">{{ review.review }}</p>
                              <div class="user-block media pt-9 pt-lg-12 d-flex justify-content-center mt-auto">
                               
                                  <!--<img class="w-100" src="./../assets/front/image/l2/png/l2-testimonial1.png" alt="">-->
                                
                                <div class="user-text text-center align-self-center">
                                  <h4 class="user-title gr-text-9 mb-0">{{ review.name }}</h4>
                                  <span class="user-rank gr-text-11 gr-text-color-opacity">{{ review.designation }}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          
                        </div>
                      
						<!--<div class="row justify-content-center mb-15">
                          <div class="col-lg-7 text-center pt-10">
                            <div class="more-btn testimonial-btn">
                              <a href="#" class="btn-link with-icon text-green">Read more reviews<i class="icon icon-tail-right font-weight-bold"></i></a>
                            </div>
                          </div>
                        </div>-->
	</div>
	</div>
	</section>
	
  <newsletter></newsletter>
    <!-- Footer section -->
    <Front-Footer> </Front-Footer>


  </div>
  </div>

</body>
</template>

<script>
import Header from './Front-Header';
import Footer from './Front-Footer';
import Loader from './Loader';
import Newsletter from './common/Newsletter';

import { db } from '../main'


export default {
   components:{
    'Front-Header':Header,
    'Front-Footer':Footer,
    'Loader':Loader,
    'newsletter':Newsletter,
  },

  data(){
      return{
        item:{},
        reviews:[],
        companies: [],
        categories: [],
        bac: [],
        isActive: true,
        company:{},
        review:{},
        sid:'',
        cart: false,
        random_id:"",

      }
  },

  created: function()
  {
      this.getSubscription();
      this.getCompanies();
      this.getCategories();
      this.getReviews();
      this.fetchComponents();
  },

 
methods: {
  
    async submit() {

        var uid = localStorage.getItem("userSessionId");
        var randomId = localStorage.getItem("randomId");
        
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
              subscription: this.sid,
              amount:this.item.vat,
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
          this.$toasted.error('Success, Already Added!', {
            icon : 'check',
        })
        this.$router.push('/cart');
        }
        
    },
    fetchComponents()
    {

      db.collection("components").doc('Hn0b7cl07XYkkKd7ChY0')
      .get()
      .then((doc) => {
          //console.log(doc.id, " => ", doc.data());
              this.company = doc.data();

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


      db.collection("components").doc('VfhHWqNcmo0MUOaT3cz5')
      .get()
      .then((doc) => {
          console.log(doc.id, " => ", doc.data());
              this.review = doc.data();

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


    },

    getByCategory(category){

      this.isActive = !this.isActive;

      this.companies =[];
      var id = this.$route.params.id;

        db.collection("companies").where("subscription", "==", id).where("category", "==", category)
        .get()
        .then((querySnapshot) => {

          querySnapshot.forEach((doc) => {

            //console.log(doc.id, " => ", doc.data());
            
            db.collection('categories').doc(category).get().then((res) => {

                //this.category = res.data().name;
                //var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
                //var vat = discountPrice + discountPrice * doc.data().vat/100;
                //console.log(res.data().name);
                this.companies.push({
                  id: doc.id,
                  category: res.data().name,
                  name: doc.data().name,
                  tag: doc.data().tag,
                  //description: doc.data().description,
                  image: doc.data().image,
                  background_image: doc.data().background_image,
                  //discount: doc.data().discount,
                  //discountPrice: discountPrice,
                  //vat: vat,
                  created: doc.data().created,
                });

           });
            

          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

    },


    getCategories()
    {

    var id = this.$route.params.id;
    db.collection('selected_categories').where("subscription", "==", id)
    .get()
    .then((querySnapshot) => {

      querySnapshot.forEach((docs) => {

        db.collection("categories").doc(docs.data().category)
        .get()
        .then((doc) => {
         
          this.categories.push({
            id: doc.id,
            name: doc.data().name,
          });
  
         // console.log(this.categories);

        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      });
    });
  
    },

    getSubscription()
    {
        var id = this.$route.params.id;

        db.collection('subscriptions').doc(id).get().then((doc) => {
            console.log(doc.id);
            this.sid = doc.id;
            this.item = doc.data();

            var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
            var vat = discountPrice + discountPrice * doc.data().vat/100;

            this.item.discountPrice  = discountPrice;
            this.item.vat = vat;

            this.previewImage = doc.data().image;
        })
    },

    getReviews()
    {

        db.collection('reviews').get()
        .then((querySnapshot) => {
          //console.log('hhhh');
          querySnapshot.forEach((doc) => {
           // console.log(doc.data());

            this.reviews.push({
              id: doc.id,
              review: doc.data().review,
              name: doc.data().name,
              image: doc.data().image,
              designation: doc.data().designation,
              created: doc.data().created,
            });
          })
        })
    },

    getCompanies()
    {

      this.companies =[]; 

      var id = this.$route.params.id;

      db.collection("companies").where("subscription", "==", id)
      .get()
      .then((querySnapshot) => {
        //console.log('hhhh');
        querySnapshot.forEach((doc) => {

          //console.log(doc.id, " => ", doc.data());
          
          db.collection('categories').doc(doc.data().category).get().then((res) => {

              //this.category = res.data().name;
              //var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
              //var vat = discountPrice + discountPrice * doc.data().vat/100;
              //console.log(res.data().name);

              this.companies.push({
                id: doc.id,
                category: res.data().name,
                name: doc.data().name,
                tag: doc.data().tag,
                //description: doc.data().description,
                image: doc.data().image,
                background_image: doc.data().background_image,
                //discount: doc.data().discount,
                //discountPrice: discountPrice,
                //vat: vat,
                created: doc.data().created,
              });

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