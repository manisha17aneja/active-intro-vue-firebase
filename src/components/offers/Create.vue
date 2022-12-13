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
                        <h4 class="page-title">Create Offer</h4>
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
                                        <label class="col-md-12 p-0">Company</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <select name="company" v-model="company" :class="{'is-invalid': validationStatus($v.company)}" class="form-control">
                                            <option v-for="option in options" v-bind:key="option.name" v-bind:value="option.id">
                                                {{ option.name }}
                                            </option>
                                        </select>
                                        <div v-if="!$v.company.required" class="invalid-feedback">The company field is required.</div>
                                     <!-- <span>Selected: {{ company }}</span>--->
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Title</label>
                                        <div class="col-md-12 border-bottom p-0">
                                       
                                            <input type="text" v-model.trim="$v.title.$model" :class="{'is-invalid': validationStatus($v.title)}" class="form-control form-control-lg">
                                            <div v-if="!$v.title.required" class="invalid-feedback">The title field is required.</div>
                                        </div>
                                    </div>
                                    

                                   

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Estimated savings</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.amount.$model" :class="{'is-invalid': validationStatus($v.amount)}" class="form-control form-control-lg">
                                            <div v-if="!$v.amount.required" class="invalid-feedback">The amount field is required.</div>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Valid until</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="date" v-model.trim="$v.valid_date.$model" :class="{'is-invalid': validationStatus($v.valid_date)}" class="form-control form-control-lg">
                                            <div v-if="!$v.valid_date.required" class="invalid-feedback">The date field is required.</div>
                                        </div>
                                    </div>

                                
                                    <div class="isResuseable form-group mb-4">
                                        <label class="col-md-12 p-0">Is Reuseable ?</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <input type="checkbox" v-model.trim="$v.is_reuseable.$model" :class="{'is-invalid': validationStatus($v.is_reuseable)}" class="form-control form-control-lg">
                                            <div v-if="!$v.is_reuseable.required" class="invalid-feedback">This field is required.</div>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Amenities</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(find, index) in finds" :key="find.id">
                                                <input type="text" v-model="tagg[index]" name="tagg[]" class="form-control form-control-lg">
                                                
                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteFind(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addFind" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                       <!-- <pre>{{ $data }}</pre> --->
                                        </div>
                                    </div>
                                    


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Offer Type</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(offer_type, index) in offer_types" :key="index">
                                                <input type="text" v-model="offer_typee[index]" name="offer_typee[]" class="form-control form-control-lg">
                                                <!--<select name="icon" v-model="offer_type.icon" :class="{'is-invalid': validationStatus($v.icon)}" class="form-control">
                                                    <option v-for="icon in icons" v-bind:key="icon.name" v-bind:value="icon.id">
                                                        {{ icon.name }}
                                                    </option>
                                                </select>-->
                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteOfferTypes(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addOfferTypes" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                       <!-- <pre>{{ $data }}</pre> --->
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Offers</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(offer, index) in offers" :key="index">
                                                <input type="text" v-model="offerr[index]" name="offerr[]" class="form-control form-control-lg">
                                                <!--<select name="icon" v-model="offer.icon" :class="{'is-invalid': validationStatus($v.icon)}" class="form-control">
                                                    <option v-for="icon in icons" v-bind:key="icon.name" v-bind:value="icon.id">
                                                        {{ icon.name }}
                                                    </option>
                                                </select>-->
                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteOffers(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addOffers" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                       <!-- <pre>{{ $data }}</pre> --->
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Tag</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(extra_tag, index) in extra_tags" :key="index">
                                                <input type="text" v-model="extra_tagg[index]" name="extra_tagg[]" class="form-control form-control-lg">
                                                
                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteExtraTag(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addExtraTag" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                       <!-- <pre>{{ $data }}</pre> --->
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Short Description</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <textarea v-model.trim="$v.short_description.$model" :class="{'is-invalid': validationStatus($v.short_description)}" class="form-control form-control-lg" rows="2"></textarea>  
                                           <div v-if="!$v.short_description.required" class="invalid-feedback">The short description field is required.</div>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Description</label>
                                        <div class="col-md-12 border-bottom p-0">

                                        <ckeditor :editor="editor" :config="editorConfig" v-model.trim="$v.description.$model" :class="{'is-invalid': validationStatus($v.description)}" class="form-control form-control-lg"></ckeditor>
                                           <!-- <textarea v-model.trim="$v.description.$model" :class="{'is-invalid': validationStatus($v.description)}" class="form-control form-control-lg" rows="5"></textarea> -->   
                                           <div v-if="!$v.description.required" class="invalid-feedback">The description field is required.</div>
                                        </div>
                                    </div>

                             


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Image</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-bind:src="previewImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadImage>
                                         <div v-if="!$v.image.required" class="invalid-feedback">The image field is required.</div>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
            selected: '',
            options: [],
            icons: [],
            title:'',
            amount:'',
            valid_date:'',
            is_reuseable:'',
            finds: [],
            tagg:[],
            offer_types: [],
            offer_typee:[],
            offers: [],
            extra_tags: [],
            offerr:[],
            extra_tagg:[],
            short_description:'',
            description:'',
            company:'',
            image: '', 
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
            previewImage:'',
            editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                    
                }
        }
    }, 
    created: function(){
        this.getCategories();
        this.getIcons();
    },
    
    validations: {
        company: {required},
        title: {required},
        tagg:[],
        offer_typee:[],
        offerr:[],
        extra_tagg:[],
        amount: {required},
        valid_date: {required},
        is_reuseable: {},
        short_description: {required},
        description: {required},
        image: {},
        meta_title: {},
        meta_description: {},
        meta_keywords: {}
    },

    methods: {

        addOfferTypes: function () {
            this.offer_types.push({ value: '',icon: '' });
        },

        deleteOfferTypes: function (index) {
            console.log(index);
            console.log(this.offer_types);
            this.offer_typee.splice(index, 1);
            this.offer_types.splice(index, 1);
          },
          
        addExtraTag: function () {
            this.extra_tags.push({ value: '',icon: '' });
        },
        deleteExtraTag: function (index) {
            console.log(index);
            console.log(this.extra_tags);
            this.extra_tagg.splice(index, 1);
            this.extra_tags.splice(index, 1);
          },

        addOffers: function () {
            this.offers.push({ value: '',icon: '' });
        },

        deleteOffers: function (index) {
            console.log(index);
            console.log(this.offers);
            this.offerr.splice(index, 1);
            this.offers.splice(index, 1);
          },

        addFind: function () {
            this.finds.push({ value: ''});
        },

        deleteFind: function (index) {
            console.log(index);
            console.log(this.finds);
            this.tagg.splice(index, 1);
            this.finds.splice(index, 1);
          },

        onChange (e) {
            //console.log("Picture changed!")
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.icon = e.target.result;
                console.log('Picture changed!');
            };
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

        getCategories()
        {
            this.options = [];
     
            db.collection("companies")
              .get()
              .then((querySnapshot) => {
                //console.log('hhhh1');
                querySnapshot.forEach((doc) => {
                  this.options.push({
                    id: doc.id,
                    name: doc.data().name,
                  });
                  //console.log(doc.id, " => ", doc.data());
                 
                });

                //console.log(this.options);
              })
              .catch((error) => {
                console.log("Error getting documents: ", error);
              });
        },

        getIcons()
        {
            this.icons = [];
     
            db.collection("icons")
              .get()
              .then((querySnapshot) => {
                //console.log('hhhh1');
                querySnapshot.forEach((doc) => {
                  this.icons.push({
                    id: doc.id,
                    name: doc.data().name,
                  });
                  //console.log(doc.id, " => ", doc.data());
                 
                });

                //console.log(this.icons);
              })
              .catch((error) => {
                console.log("Error getting documents: ", error);
              });
        },

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            
            var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);
            console.log('yess');
            console.log(this.tagg);
           // console.log(this.previewImage);
            db.collection("offers")
            .add({ 
                company: this.company,
                title: this.title,
                amount: this.amount,
                valid_date: this.valid_date,
                is_reuseable: this.is_reuseable,
                tag: this.tagg,
                feature: this.offer_typee,
                offers: this.offerr,
                extra_tags: this.extra_tagg,
                image: this.previewImage,
                short_description: this.short_description,
                description: this.description,
                meta_title: this.meta_title,
                meta_description: this.meta_description,
                meta_keywords: this.meta_keywords,
                created: date,
                modified: date,
            })
            .then(() => {
                console.log("Added Successfully!");
                this.$toasted.success('Success, Added Successfully!', {
                   icon : 'check',
                    //icon : 'error_outline'
                })
                this.$router.push('/offers/index');
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

        }
    }
}
</script>