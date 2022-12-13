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
                        <h4 class="page-title">Create Subscription</h4>
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
                                        <label class="col-md-12 p-0">Categories</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <select multiple name="category" v-model="category" :class="{'is-invalid': validationStatus($v.company)}" class="form-control">
                                            <option v-for="category in categories" v-bind:key="category.name" v-bind:value="category.id">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                        <div v-if="!$v.category.required" class="invalid-feedback">The category field is required.</div>
                                     <!-- <span>Selected: {{ category }}</span>--->
                                        </div>
                                    </div>
                               
            
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Title</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" v-model.trim="$v.title.$model" :class="{'is-invalid': validationStatus($v.title)}" class="form-control form-control-lg">
                                            <div v-if="!$v.title.required" class="invalid-feedback">The title field is required.</div>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Description</label>
                                        <div class="col-md-12 p-0">
                                            <textarea v-model.trim="$v.description.$model" :class="{'is-invalid': validationStatus($v.description)}" class="form-control form-control-lg" rows="5"></textarea>
                                            <div v-if="!$v.description.required" class="invalid-feedback">The description field is required.</div>
                                        </div>
                                     </div>

                                     <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Tag Line</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" v-model.trim="$v.tag_line.$model" :class="{'is-invalid': validationStatus($v.tag_line)}" class="form-control form-control-lg">
                                            <div v-if="!$v.tag_line.required" class="invalid-feedback">The tag line line field is required.</div>
                                        </div>
                                    </div>     
                                    
                                    
                                    
                                    
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Country</label>
                                        <div class="col-md-12 p-0">
                                        <select name="country" v-model="country" :class="{'is-invalid': validationStatus($v.country)}" class="form-control">
                                            <option v-for="option in options" v-bind:key="option.name" v-bind:value="option.id">
                                                {{ option.name }}
                                            </option>
                                        </select>
                                        <div v-if="!$v.country.required" class="invalid-feedback">The country field is required.</div>
                                     <!-- <span>Selected: {{ country }}</span>--->
                                        </div>
                                    </div>




                                     <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Image</label>
                                        <div class="col-md-12 p-0">
                                        <img v-bind:src="previewImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadImage>
                                         <div v-if="!$v.image.required" class="invalid-feedback">The image field is required.</div>
                                        </div>
                                    </div>



                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Price</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" v-model.trim="$v.price.$model" :class="{'is-invalid': validationStatus($v.price)}" class="form-control form-control-lg">
                                            <div v-if="!$v.price.required" class="invalid-feedback">The price field is required.</div>
                                        </div>
                                    </div>



                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Discount (%)</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" v-model.trim="$v.discount.$model" :class="{'is-invalid': validationStatus($v.discount)}" class="form-control form-control-lg">
                                            <div v-if="!$v.discount.required" class="invalid-feedback">The discount field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Vat (%)</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" v-model.trim="$v.vat.$model" :class="{'is-invalid': validationStatus($v.vat)}" class="form-control form-control-lg">
                                            <div v-if="!$v.vat.required" class="invalid-feedback">The vat field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Tag</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(find, index) in finds" :key="find.id">
                                                <input v-model="find.value" class="form-control form-control-lg">
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
                                        <div class="col-md-12 p-0">
                                            <input type="text" v-model.trim="$v.meta_title.$model" :class="{'is-invalid': validationStatus($v.meta_title)}" class="form-control form-control-lg">
                                            <div v-if="!$v.meta_title.required" class="invalid-feedback">The meta title field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Description</label>
                                        <div class="col-md-12 p-0">
                                           <textarea v-model.trim="$v.meta_description.$model" :class="{'is-invalid': validationStatus($v.meta_description)}" class="form-control form-control-lg" rows="5"></textarea>
                                            <div v-if="!$v.meta_description.required" class="invalid-feedback">The meta description field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Keywords</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" name="tag[]" v-model.trim="$v.meta_keywords.$model" :class="{'is-invalid': validationStatus($v.meta_keywords)}" class="form-control form-control-lg">
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
import $ from 'jquery'
import jQuery from 'jquery'

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
            country: '',
            title: '',
            image: '', 
            description: '',
            price: '',
            discount: '',
            vat: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
            previewImage:'',
            options: [],
            tag_line: '',
            finds: [],
            categories: [],
            category:'',
        }
    },
    created: function(){
        this.getCountries();
        this.getCategories();
    }, 
    validations: {
        country: {},
        title: {required},
        category: {required},
        tag_line: {},
        image: {},
        description: {},
        price: {},
        discount: {},
        vat: {},
        meta_title: {},
        meta_description: {},
        meta_keywords: {},
        
    },

    methods: {


        getCategories()
        {
            this.categories = [];
     
            db.collection("categories")
              .get()
              .then((querySnapshot) => {
                console.log('hhhh1');
                querySnapshot.forEach((doc) => {
                  this.categories.push({
                    id: doc.id,
                    name: doc.data().name,
                  });
                  //console.log(doc.id, " => ", doc.data());
                 
                });

                console.log(this.categories);
              })
              .catch((error) => {
                console.log("Error getting documents: ", error);
              });
        },

        addFind: function () {
            this.finds.push({ value: '' });
          },
          deleteFind: function (index) {
            console.log(index);
            console.log(this.finds);
            this.finds.splice(index, 1);
          },


        add(){
            console.log('hghghf');
        
        event.preventDefault();
        var field_forms = '<fieldset>' +  
                            '<div class="form-group">' +
                            '<label class="control-label" for="textinput">Name</label>' +
                              '<div class="col-md-12 margin-bottom collapse-col">' +
                              '<input name="tag[]" type="text" placeholder="Enter name" class="form-control input-md"></input>' +
                                    '<button class="delete btn button-white uppercase fas fa-times"></button>' +
                              '</div>' +
                       '</div>' +
                   '</fieldset>';
                   
                   
         $(field_forms).insertBefore( $( "#add" ) );
          },

        getCountries()
        {
            this.options = [];
     
            db.collection("countries")
            .where("status", "==", '1')
              .get()
              .then((querySnapshot) => {
                console.log('hhhh1');
                querySnapshot.forEach((doc) => {
                  this.options.push({
                    id: doc.id,
                    name: doc.data().country,
                  });
                  //console.log(doc.id, " => ", doc.data());
                 
                });

                console.log(this.options);
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

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);


            console.log('123');
            console.log(this.previewImage);
                    
           // const response = axios.get('http://localhost/interactive_intro/api/login1', {
               // headers: { "Access-Control-Allow-Origin": "*", }
           // });
            //console.log(response);

       /*     Vue.axios.get('http://localhost/interactive_intro/api/login1').then((response)=>{
                console.warn(response.data)
               // this.$router.push('dashboard');

            })*/

            /*axios.post('http://localhost/interactive_intro/api/login', this.form,)
                .then(function( response ){
                    console.warn(response)
                }.bind(this));
*/

  // POST request using axios with set headers
  const data = {
    "email": "admin@gmail.com",
    "password": "admin@gmail.com",
};
  //const headers = { 
   // 'Content-type': 'application/x-www-form-urlencoded',
   
  //};
  
  axios.post("http://localhost/interactive_intro/api/login", data)
    .then((response)=>{
        console.warn(response)
    });
   


        db.collection("subscriptions")
            .add({
                country: this.country,
                title: this.title,
                tag: this.finds,
                tag_line: this.tag_line,
                image: this.previewImage,
                description: this.description,
                price: this.price,
                discount: this.discount,
                vat: this.vat,
                meta_title: this.meta_title,
                meta_description: this.meta_description,
                meta_keywords: this.meta_keywords,
                created: date,
                modified: date,
            })
            .then((res) => {

                console.log("Added Successfully!");

                this.category.forEach((doc) => {

                    console.log(doc);
                    
                    db.collection("selected_categories")
                    .add({
                        subscription: res.id,
                        category: doc,
                        created: date,
                        modified: date,
                    })
                    .then(() => {
                        console.log("Added Successfully!");       
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    }); 
        
                });

                this.$toasted.success('Success, Added Successfully!', {
                icon : 'check',
                    //icon : 'error_outline'
                })
                this.$router.push('/subscriptions/index');

            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

        }
    }
}


jQuery('body').on('click', '.delete', function(){
    event.preventDefault();
   jQuery(this).parent().parent().parent().remove();
  
});

jQuery('.delete_all').click(function(){
	event.preventDefault();
   jQuery('fieldset').remove();
  
});
</script>