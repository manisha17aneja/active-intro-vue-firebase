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
                        <h4 class="page-title">View User</h4>
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
                                        <label class="col-md-12 p-0">First Name</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="firstname" v-model="item.firstname" readonly/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Last Name</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="lastname" v-model="item.lastname" readonly/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Email</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <input type="text" class="form-control" name="email" v-model="item.email" readonly/>
                                        </div>
                                    </div>

  

                       
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Image </label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-if="previewImage" v-bind:src="previewImage" class="uploading-image" />
                                        <img v-else src="./../../assets/front/image/profile_img2.jpg" alt="user image"  class="uploading-image">

                                        </div>
                                    </div>

                         


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Country</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <input type="text" class="form-control" name="country" v-model="item.country" readonly/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Created</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <input type="text" class="form-control" name="created" v-model="item.created" readonly/>
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

                db.collection('users').doc(id).get().then((doc) => {
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