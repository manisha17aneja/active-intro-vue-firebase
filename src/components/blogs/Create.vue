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
                        <h4 class="page-title">Create Blog</h4>
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
                                        <label class="col-md-12 p-0">Category</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <select name="category" v-model="category" :class="{'is-invalid': validationStatus($v.category)}" class="form-control">
                                            <option v-for="option in options" v-bind:key="option.name" v-bind:value="option.id">
                                                {{ option.name }}
                                            </option>
                                        </select>
                                        <div v-if="!$v.category.required" class="invalid-feedback">The category field is required.</div>
                                     <!-- <span>Selected: {{ category }}</span>--->
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


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Type</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <select name="type" v-model="type" :class="{'is-invalid': validationStatus($v.type)}" class="form-control">
                                            <option value="">Select</option>
                                            <option value="1">Public</option>
                                            <option value="2">Private</option>
                                        </select>
                                        <div v-if="!$v.type.required" class="invalid-feedback">The type field is required.</div>
                                     <!-- <span>Selected: {{ type }}</span>--->
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
            title:'',
            short_description:'',
            description:'',
            category:'',
            image: '',
            type: '', 
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
    },
    
    validations: {
        category: {required},
        title: {required},
        short_description: {required},
        description: {required},
        image: {},
        type:  {required}, 
        meta_title: {},
        meta_description: {},
        meta_keywords: {}
    },

    methods: {

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
     
            db.collection("categories")
            .where("type", "==", '1')
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

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            
            var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);

            //console.log('ddddd');
            console.log(this.previewImage);
            db.collection("blogs")
            .add({ 
                category: this.category,
                title: this.title,
                image: this.previewImage,
                type:this.type,
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
                this.$router.push('/blogs/index');
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

        }
    }
}
</script>