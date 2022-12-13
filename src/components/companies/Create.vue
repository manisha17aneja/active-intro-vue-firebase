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
                        <h4 class="page-title">Create Company</h4>
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
                                        <select name="country" v-model.trim="$v.subscription.$model" :class="{'is-invalid': validationStatus($v.subscription)}" class="form-control" @change="getCategories()">
                                        <option value="">Select Subscription</option>
                                        <option v-for="subscription in subscriptions" v-bind:key="subscription.name" v-bind:value="subscription.id">
                                                {{ subscription.name }}
                                            </option>
                                        </select>
                                        <div v-if="!$v.subscription.required" class="invalid-feedback">The subscription field is required.</div>
                                     <!-- <span>Selected: {{ subscription }}</span>--->
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Category</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <select name="country" v-model.trim="$v.category.$model" :class="{'is-invalid': validationStatus($v.category)}" class="form-control">
                                        <option value="">Select Category</option>
                                        <option v-for="category in categories" v-bind:key="category.name" v-bind:value="category.id">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                        <div v-if="!$v.category.required" class="invalid-feedback">The category field is required.</div>
                                     <!-- <span>Selected: {{ category }}</span>--->
                                        </div>
                                    </div>
                               
                               
            
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Name</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.name.$model" :class="{'is-invalid': validationStatus($v.name)}" class="form-control form-control-lg">
                                            <div v-if="!$v.name.required" class="invalid-feedback">The name field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">About</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <textarea v-model.trim="$v.about.$model" :class="{'is-invalid': validationStatus($v.about)}" class="form-control form-control-lg" rows="5"></textarea>
                                            <div v-if="!$v.about.required" class="invalid-feedback">The about field is required.</div>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Image (Logo)</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-bind:src="previewImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadImage>
                                         <div v-if="!$v.image.required" class="invalid-feedback">The image field is required.</div>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Background Image</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-bind:src="previewBackgroundImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadBackgroundImage>
                                         <div v-if="!$v.image.required" class="invalid-feedback">The image field is required.</div>
                                        </div>
                                    </div>



                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Location</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.location.$model" :class="{'is-invalid': validationStatus($v.location)}" class="form-control">
                                            <div v-if="!$v.location.required" class="invalid-feedback">The location field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Country</label>
                                        <div class="col-md-12 border-bottom p-0">
                                          
                                            <select name="country" v-model.trim="$v.country.$model" :class="{'is-invalid': validationStatus($v.country)}" class="form-control">
                                            <option value="">Select Country</option>
                                            <option v-for="country in countries" v-bind:key="country.name" v-bind:value="country.id">
                                                {{ country.name }}
                                            </option>
                                        </select>
                                            
                                            
                                            <div v-if="!$v.country.required" class="invalid-feedback">The country field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Postcode</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.postcode.$model" :class="{'is-invalid': validationStatus($v.postcode)}" class="form-control form-control-lg">
                                            <div v-if="!$v.postcode.required" class="invalid-feedback">The postcode field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Phone No</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.phone_no.$model" :class="{'is-invalid': validationStatus($v.phone_no)}" class="form-control form-control-lg">
                                            <div v-if="!$v.phone_no.required" class="invalid-feedback">The phone no field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Website URL</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.website.$model" :class="{'is-invalid': validationStatus($v.website)}" class="form-control form-control-lg">
                                            <div v-if="!$v.website.required" class="invalid-feedback">The website field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Outlets included</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div class="company-add" v-for="(find, index) in finds" :key="find.id">
                                                <input v-model="find.address" class="form-control form-control-lg" placeholder="Enter Address">
                                                <input v-model="find.city" class="form-control form-control-lg" placeholder="Enter City">
                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteFind(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addFind" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                       <!-- <pre>{{ $data }}</pre> --->
                                        </div>
                                    </div>

                                    


                                    </div>
                                   </div>

                                   <div class="card profile-card">
                                    <div class="card-body">
                                    
 
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Title</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.meta_title.$model" :class="{'is-invalid': validationStatus($v.meta_title)}" class="form-control form-control-lg">
                                            <div v-if="!$v.meta_title.required" class="invalid-feedback">The meta title field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Description</label>
                                        <div class="col-md-12 border-bottom p-0">
                                           <textarea v-model.trim="$v.meta_description.$model" :class="{'is-invalid': validationStatus($v.meta_description)}" class="form-control form-control-lg" rows="5"></textarea>
                                            <div v-if="!$v.meta_description.required" class="invalid-feedback">The meta description field is required.</div>
                                        </div>
                                    </div>


                                  


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Keywords</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.meta_keywords.$model" :class="{'is-invalid': validationStatus($v.meta_keywords)}" class="form-control form-control-lg">
                                            <div v-if="!$v.meta_keywords.required" class="invalid-feedback">The meta keywords field is required.</div>
                                        </div>
                                    </div>

                                   
                               
                                    <div class="form-group mb-4">
                                        <div class="col-sm-12 pl-0 mt-10">
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

import { required } from 'vuelidate/lib/validators'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { db } from '../../main'

Vue.use(VueAxios,axios)

export default {
    name: 'Create',
    components:{
        'Header':Header,
        'Sidebar':Sidebar,
        'Footer':Footer,
       
    },
    data: function() {
        return {
            name: '', 
            about: '',
            image: '', 
            background_image: '',
            location: '',
            country: '',
            postcode: '',
            phone_no: '',
            website: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
            previewImage:'',
            previewBackgroundImage:'',
            subscriptions: [],
            categories: [],
            category:'',
            subscription:'',
            finds: [],
            countries: [],
        }
    }, 
    created: function(){
        this.getSubscriptions();
        this.getCountries();
    },
    validations: {
        subscription: {required},
        category: {required},
        name: {required},
        about: {required},
        image: {},
        background_image: {},
        location: {required},
        country: {required},
        postcode: {required},
        phone_no: {required},
        website: {required},
        meta_title: {},
        meta_description: {},
        meta_keywords: {}
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
            //alert(this.subscription);

            this.categories = [];

            db.collection("selected_categories")
            .where("subscription", "==", this.subscription)
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


        getSubscriptions()
        {
            this.subscriptions = [];
     
            db.collection("subscriptions")
              .get()
              .then((querySnapshot) => {
                console.log('hhhh1');
                querySnapshot.forEach((doc) => {
                  this.subscriptions.push({
                    id: doc.id,
                    name: doc.data().title,
                  });
                  //console.log(doc.id, " => ", doc.data());
                 
                });

                console.log(this.subscriptions);
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

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

           // alert(Math.floor(Math.random() * 10000));

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            
            var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);
           
            db.collection("companies")
            .add({ 
                subscription: this.subscription,
                category: this.category,
                name: this.name,
                code: Math.floor(Math.random() * 10000),
                about: this.about,
                image: this.previewImage,
                background_image: this.previewBackgroundImage,
                location: this.location,
                country: this.country,
                postcode: this.postcode,
                phone_no: this.phone_no,
                website: this.website,
                outlets: this.finds,
                meta_title: this.meta_title,
                meta_description: this.meta_description,
                meta_keywords: this.meta_keywords,
                created: date,
                modified: date,
            })
            .then((doc) => {
                console.log("Added Successfully!");
                console.log(doc.id);

                db.collection("companies").doc(doc.id).update({ cid: doc.id });

                this.$toasted.success('Success, Added Successfully!', {
                   icon : 'check',
                    //icon : 'error_outline'
                })
                this.$router.push('/companies/index');
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

        }
    }
}
</script>