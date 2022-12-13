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
                        <h4 class="page-title">Create Country</h4>
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
                                        <label class="col-md-12 p-0">Country</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.country.$model" :class="{'is-invalid': validationStatus($v.country)}" class="form-control form-control-lg">
                                            <div v-if="!$v.country.required" class="invalid-feedback">The country field is required.</div>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Slug</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.slug.$model" :class="{'is-invalid': validationStatus($v.slug)}" class="form-control form-control-lg" readonly>
                                            <div v-if="!$v.slug.required" class="invalid-feedback">The slug field is required.</div>
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
                                        <label class="col-md-12 p-0">Status</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <select name="status" v-model="status" :class="{'is-invalid': validationStatus($v.status)}" class="form-control">
                                            <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.key">
                                                {{ option.value }}
                                            </option>
                                        </select>
                                        <div v-if="!$v.status.required" class="invalid-feedback">The status field is required.</div>
                                        <span>Selected: {{ status }}</span>
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
            selected: '',
            options: [],
            country:'',
            status:'',
            image: '',
            previewImage:'',
        }
    }, 
    created: function(){
        this.getCompanies();
    },
    computed: {
        slug: function () {
          return this.slugify(this.country)
        }
    },
    
    validations: {
        status: {required},
        country: {required},
        slug: {required},
        image: {},
    },

    methods: {

        slugify (text, ampersand = 'and') {
            const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
            const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
            const p = new RegExp(a.split('').join('|'), 'g')
      
            return text.toString().toLowerCase()
              .replace(/[\s_]+/g, '-')
              .replace(p, c =>
                b.charAt(a.indexOf(c)))
              .replace(/&/g, `-${ampersand}-`)
              .replace(/[^\w-]+/g, '')
              .replace(/--+/g, '-')
              .replace(/^-+|-+$/g, '')
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


        getCompanies()
        {
            this.options = [
                {
                    key: '1',
                    value:'Publish' 
                },
                {
                    key: '2',
                    value:'Unpublish' 
                }
            ];
     
            
        },

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            
            var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);

            //console.log('ddddd');
            //console.log(this.status);
            db.collection("countries")
            .add({ 
                
                country: this.country,
                slug: this.slug,
                image: this.previewImage,
                status: this.status,
                created: date,
                modified: date,
            })
            .then(() => {
                console.log("Added Successfully!");
                this.$toasted.success('Success, Added Successfully!', {
                   icon : 'check',
                    //icon : 'error_outline'
                })
                this.$router.push('/countries/index');
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

        }
    }
}
</script>