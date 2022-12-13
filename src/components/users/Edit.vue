<template>


 
<body>


<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

    <Header></Header>



    <Sidebar></Sidebar>

    <div class="dashboard-wrapper page-wrapper">
            <div class="page-breadcrumb">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Edit Company</h4>
                    </div>
                </div>
            </div>
                        <div class="container-fluid">
                <div class="row">
             
                    <div class="col-lg-12 col-xlg-9 col-md-12">
                        
                        <form class="form-horizontal form-material" v-on:submit.prevent="submit">
                            <div class="card profile-card">
                                <div class="card-body">

                                <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Subscription</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <select name="subscription" v-model="item.subscription" class="form-control" @change="getCategories()">
                                        <option value="">Select Subscription</option>
                                        <option v-for="subscription in subscriptions" v-bind:key="subscription.name" v-bind:value="subscription.id">
                                                {{ subscription.name }}
                                            </option>
                                        </select>
                                       <!-- <span>Selected: {{ item.subscription }}</span>--->
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Category</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <select name="category" v-model="item.category" class="form-control">
                                        <option value="">Select Category</option>
                                        <option v-for="category in categories" v-bind:key="category.name" v-bind:value="category.id">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                       <!-- <span>Selected: {{ item.category }}</span>--->
                                        </div>
                                    </div>

            
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Name</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="name" v-model="item.name"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">About</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <textarea  name="about" v-model="item.about" class="form-control form-control-lg" rows="5"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Offer Redeem Code</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="code" v-model="item.code"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Image (Logo)</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-bind:src="previewImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadImage>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Background Image</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-bind:src="previewBackgroundImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadBackgroundImage>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Location</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="location" v-model="item.location"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Country</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <!--<input type="text" class="form-control" name="country" v-model="item.country"/>-->
                                            <select name="country" v-model="item.country" class="form-control">
                                            <option value="">Select Country</option>
                                            <option v-for="country in countries" v-bind:key="country.name" v-bind:value="country.id">
                                                {{ country.name }}
                                            </option>
                                        </select>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Postcode</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="postcode" v-model="item.postcode"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Phone No</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="phone_no" v-model="item.phone_no"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Website</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="website" v-model="item.website"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Outlets included</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(find, index) in finds" :key="find.value">
                                               <input v-model="find.address" class="form-control form-control-lg" placeholder="Enter Address">
                                               <input v-model="find.city" class="form-control form-control-lg" placeholder="Enter City">
                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteFind(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addFind" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                     <!--  <pre>{{ $data }}</pre> -->
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="card profile-card">
                                <div class="card-body">

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Title</label>
                                        <div class="col-md-12 border-bottom  p-0">
                                            <input type="text" class="form-control" name="" v-model="item.meta_title"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Description</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <textarea  name="meta_description" v-model="item.meta_description" class="form-control form-control-lg" rows="5"></textarea>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Keywords</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="meta_keywords" v-model="item.meta_keywords"/>
                                        </div>
                                    </div>

                                    <br>
                                    <div class="form-group mb-4">
                                        <div class="col-sm-12">
                                        <input type="submit" class="btn btn-primary" value="Submit"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
           
        </div>
    
    <Footer></Footer>

</div>





</body>


</template>







<script>

import Header from './../admin-header';
import Footer from './../admin-footer';
import Sidebar from './../admin-sidebar';

import { db } from '../../main'

export default{
     name: 'Edit',
        data(){
            return{
                item:{},
                previewImage:'',
                previewBackgroundImage:'',
                options: [],
                subscriptions: [],
                categories: [],
                finds: [],
                countries: [],
            }
        },
        components:{
            'Header':Header,
            'Sidebar':Sidebar,
            'Footer':Footer,
        
        },

        created: function(){
            this.getItem();
            this.getSubscription();
            this.getCountries();
        },

        methods: {
            addFind: function () {
                this.finds.push({ address: '',city: '' });
            },
            deleteFind: function (index) {
                console.log(index);
                console.log(this.finds);
                this.finds.splice(index, 1);
            },


            getCategories(){
               // alert(this.item.subscription);
    
                this.categories = [];
    
                db.collection("selected_categories")
                .where("subscription", "==", this.item.subscription)
                .get()
                .then((querySnapshot) => {
                    //console.log('hhhh1');
                    querySnapshot.forEach((doc) => {
    
    
                db.collection("categories").doc(doc.data().category)
                .get()
                .then((docs) => {
    
                    this.categories.push({
                        id: docs.id,
                        name: docs.data().name,
                        //slug: doc.data().slug,
                    });
                    //console.log(doc.id, " => ", doc.data());
                    
                    });
    
                });
    
                
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
    
    
            },
    
    
            getCountries()
            {
            this.countries = [];
    
                db.collection("countries")
                .get()
                .then((querySnapshot) => {
                    //console.log('hhhh1');
                    querySnapshot.forEach((doc) => {
                    this.countries.push({
                        id: doc.id,
                        name: doc.data().country,
                        slug: doc.data().slug,
                    });
                    //console.log(doc.id, " => ", doc.data());
                    
                    });
    
                
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
            },


            getSubscription()
            {
                this.subscriptions = [];

                db.collection("subscriptions")
                .get()
                .then((querySnapshot) => {
                    //console.log('hhhh');
                    querySnapshot.forEach((doc) => {
                    this.subscriptions.push({
                        id: doc.id,
                        name: doc.data().title,
                    });
                    //console.log(doc.id, " => ", doc.data());
                    
                    });

                    //console.log(this.subscriptions);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
            },

            uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log('dd');
                };
            },

            uploadBackgroundImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewBackgroundImage = e.target.result;
                    console.log('dd');
                };
            },
            getItem()
            {
                var id = this.$route.params.id;

                db.collection('companies').doc(id).get().then((doc) => {
                    console.log(doc.data());
                    this.item = doc.data();
                    this.finds = doc.data().outlets;
                    this.previewImage = doc.data().image;
                    this.previewBackgroundImage = doc.data().background_image;

                    this.categories = [];
    
                db.collection("selected_categories")
                .where("subscription", "==", doc.data().subscription)
                .get()
                .then((querySnapshot) => {
                    //console.log('hhhh1');
                    querySnapshot.forEach((doc) => {
    
    
                db.collection("categories").doc(doc.data().category)
                .get()
                .then((docs) => {
    
                    this.categories.push({
                        id: docs.id,
                        name: docs.data().name,
                        //slug: doc.data().slug,
                    });
                    //console.log(doc.id, " => ", doc.data());
                    
                    });
    
                });
    
                
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
    
                })
            },

            submit()
            {
                var id = this.$route.params.id;
                var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);

                db.collection("companies")
                .doc(id)
                .update({
                  cid: id,
                  subscription: this.item.subscription,
                  category: this.item.category,
                  name: this.item.name,
                  code: this.item.code,
                  about: this.item.about,
                  image: this.previewImage,
                  background_image: this.previewBackgroundImage,
                  location: this.item.location,
                  country: this.item.country,
                  postcode: this.item.postcode,
                  phone_no: this.item.phone_no,
                  website: this.item.website,
                  outlets: this.finds,
                  meta_title: this.item.meta_title,
                  meta_description: this.item.meta_description,
                  meta_keywords: this.item.meta_keywords,
                  position: { lat: 53.462118, lng: -2.249097 },
                  lat: 53.462118,
                  lng: -2.249097,
                  modified: date,
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  //this.readEmployees();
                  this.$toasted.success('Success, Updated Successfully!', {
                    icon : 'check',
                     //icon : 'error_outline'
                 })
                 this.$router.push('/companies/index');
                 
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            }
        }
    }
</script>