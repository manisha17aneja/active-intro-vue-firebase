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
                        <h4 class="page-title">Create Feature</h4>
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
                                        <label class="col-md-12 p-0">Icon</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-bind:src="previewImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadImage>
                                         <div v-if="!$v.image.required" class="invalid-feedback">The image field is required.</div>
                                        </div>
                                    </div>
                               
            
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Title</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" v-model.trim="$v.title.$model" :class="{'is-invalid': validationStatus($v.title)}" class="form-control form-control-lg">
                                            <div v-if="!$v.title.required" class="invalid-feedback">The title field is required.</div>
                                        </div>
                                    </div>

                                    <!--<div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Description</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <textarea v-model.trim="$v.description.$model" :class="{'is-invalid': validationStatus($v.description)}" class="form-control form-control-lg" rows="5"></textarea>
                                            <div v-if="!$v.description.required" class="invalid-feedback">The description field is required.</div>
                                        </div>
                                     </div>-->
                                     

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
            title: '',
            //description: '',
            image: '',
            previewImage:'',

        }
    }, 
    validations: {
        title: {required},
        //description: {required},
        image: {},

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

            
            db.collection("features")
            .add({
                title: this.title,
                //description: this.description,
                image: this.previewImage,
                created: date,
                modified: date,
            })
            .then(() => {
                console.log("Added Successfully!");
                this.$toasted.success('Success, Added Successfully!', {
                   icon : 'check',
                    //icon : 'error_outline'
                })
                this.$router.push('/features/index');
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

        }
    }
}
</script>