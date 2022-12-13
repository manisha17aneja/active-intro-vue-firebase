<template>


 
<body>


<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

    <Header></Header>



    <Sidebar></Sidebar>

    <div class="page-wrapper">
            <div class="page-breadcrumb">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Create Location</h4>
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
                                        <label class="col-md-12 p-0">Location</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.location.$model" :class="{'is-invalid': validationStatus($v.location)}" class="form-control form-control-lg">
                                            <div v-if="!$v.location.required" class="invalid-feedback">The location field is required.</div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Country</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.country.$model" :class="{'is-invalid': validationStatus($v.country)}" class="form-control form-control-lg">
                                            <div v-if="!$v.country.required" class="invalid-feedback">The country field is required.</div>
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
            location:'',
            country:'',
            company:'',
        }
    }, 
    created: function(){
        this.getCompanies();
    },
    
    validations: {
        company: {required},
        location: {required},
        country: {required},
    },

    methods: {

        getCompanies()
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

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            
            var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);

            //console.log('ddddd');
            //console.log(this.company);
            db.collection("locations")
            .add({ 
                company: this.company,
                location: this.location,
                country: this.country,
                created: date,
                modified: date,
            })
            .then(() => {
                console.log("Added Successfully!");
                this.$toasted.success('Success, Added Successfully!', {
                   icon : 'check',
                    //icon : 'error_outline'
                })
                this.$router.push('/locations/index');
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

        }
    }
}
</script>