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
                        <h4 class="page-title">Edit Feature</h4>
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
                                         
                                        </div>
                                    </div>
            
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Title</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="title" v-model="item.title"/>
                                        </div>
                                    </div>


                                   <!-- <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Description</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <textarea  name="description" v-model="item.description" class="form-control form-control-lg" rows="5"></textarea>
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

import { db } from '../../main'

export default{
     name: 'Edit',
        data(){
            return{
                item:{},
                previewImage:'',
            }
        },
        components:{
            'Header':Header,
            'Sidebar':Sidebar,
            'Footer':Footer,
        
        },

        created: function(){
            this.getItem();
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

            getItem()
            {
                var id = this.$route.params.id;

                db.collection('features').doc(id).get().then((doc) => {
                    console.log(doc.data());
                    this.item = doc.data();
                    this.previewImage = doc.data().image;
                })
            },

            submit()
            {
                var id = this.$route.params.id;
                var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);

                db.collection("features")
                .doc(id)
                .update({
                  title: this.item.title,
                  //description: this.item.description,
                  image:this.previewImage,
                  modified: date,
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  //this.getItem();
                  this.$toasted.success('Success, Updated Successfully!', {
                    icon : 'check',
                     //icon : 'error_outline'
                 })
                 this.$router.push('/features/index');
                 
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            }
        }
    }
</script>