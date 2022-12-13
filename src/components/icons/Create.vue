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
                        <h4 class="page-title">Create Icon</h4>
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
                                        <label class="col-md-12 p-0">Name</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.name.$model" :class="{'is-invalid': validationStatus($v.name)}" class="form-control form-control-lg">
                                            <div v-if="!$v.name.required" class="invalid-feedback">The name field is required.</div>
                                        </div>
                                    </div>

                                  

                                     <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Icon</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-bind:src="previewImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadImage>
                                         <div v-if="!$v.icon.required" class="invalid-feedback">The icon field is required.</div>
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
            icon: '', 
            previewImage:'',
        }
    }, 
    validations: {
        name: {required},
        icon: {},
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
  
  axios.post("http://127.0.0.1:8000/api/getAll", data)
    .then((response)=>{
        console.warn(response)
    });


            
            db.collection("icons")
            .add({
                name: this.name,
                icon: this.previewImage,
                created: date,
                modified: date,
            })
            .then(() => {
                console.log("Added Successfully!");
                this.$toasted.success('Success, Added Successfully!', {
                   icon : 'check',
                    //icon : 'error_outline'
                })
                this.$router.push('/icons/index');
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

        }
    }
}
</script>