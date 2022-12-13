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
                        <h4 class="page-title">Edit Subscription</h4>
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
                                        <select multiple name="category" v-model="category" class="form-control">
                                            <option v-for="category in categories" v-bind:key="category.name" v-bind:value="category.id">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                       
                                     <!-- <span>Selected: {{ category }}</span>--->
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Country</label>
                                        <div class="col-md-12 p-0">
                                        <select name="country" v-model="item.country" class="form-control">
                                            <option v-for="option in options" v-bind:key="option.name" v-bind:value="option.id">
                                                {{ option.name }}
                                            </option>
                                        </select>
                                       <!-- <span>Selected: {{ item.country }}</span>--->
                                        </div>
                                    </div>
            
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Title</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" class="form-control" name="title" v-model="item.title"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Description</label>
                                        <div class="col-md-12 p-0">
                                            <textarea  name="description" v-model="item.description" class="form-control form-control-lg" rows="5"></textarea>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Tag Line</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" class="form-control" name="tag_line" v-model="item.tag_line"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Image</label>
                                        <div class="col-md-12 p-0">
                                        <img v-bind:src="previewImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadImage>
                                         
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Price</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" class="form-control" name="price" v-model="item.price"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Discount (%)</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" class="form-control" name="discount" v-model="item.discount"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Vat (%)</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" class="form-control" name="vat" v-model="item.vat"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Tag</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(find, index) in finds" :key="find.value">
                                                <input v-model="find.value" class="form-control form-control-lg">
                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteFind(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addFind" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                     <!--  <pre>{{ $data }}</pre> -->
                                        </div>
                                    </div>

                                    </div>
                                    </div>

                                    <div class="card profile-card">
                                    <div class="card-body">

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Title</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" class="form-control" name="" v-model="item.meta_title"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Description</label>
                                        <div class="col-md-12 p-0">
                                            <textarea  name="meta_description" v-model="item.meta_description" class="form-control form-control-lg" rows="5"></textarea>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Keywords</label>
                                        <div class="col-md-12 p-0">
                                            <input type="text" class="form-control" name="meta_keywords" v-model="item.meta_keywords"/>
                                        </div>
                                    </div>


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
                options: [],
                finds: [],
                categories: [],
                category:'',
            }
        },
        components:{
            'Header':Header,
            'Sidebar':Sidebar,
            'Footer':Footer,
        
        },

        created: function(){
            this.getItem();
            this.getCountries();
            this.getCategories();
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
            getCountries()
            {
                this.options = [];

                db.collection("countries")
                .where("status", "==", '1')
                .get()
                .then((querySnapshot) => {
                    //console.log('hhhh');
                    querySnapshot.forEach((doc) => {
                    this.options.push({
                        id: doc.id,
                        name: doc.data().country,
                    });
                    //console.log(doc.id, " => ", doc.data());
                    
                    });

                    //console.log(this.options);
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
            getItem()
            {
                var id = this.$route.params.id;

                db.collection('subscriptions').doc(id).get().then((doc) => {
                    console.log(doc.data());
                    this.item = doc.data();
                    this.finds = doc.data().tag;
                    this.previewImage = doc.data().image;
                })
            },

            submit()
            {
                var id = this.$route.params.id;
                var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);

                db.collection("subscriptions")
                .doc(id)
                .update({
                  country: this.item.country,
                  title: this.item.title,
                  description: this.item.description,
                  tag_line: this.item.tag_line,
                  tag: this.finds,
                  price: this.item.price,
                  discount: this.item.discount,
                  vat: this.item.vat,
                  meta_title: this.item.meta_title,
                  meta_description: this.item.meta_description,
                  meta_keywords: this.item.meta_keywords,
                  image:this.previewImage,
                  modified: date,
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  //this.getItem();



                var query = db.collection('selected_categories').where("subscription", "==", id);
                query.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log('hhhhhjjjk');
                    console.log(doc.data().category);
                    //doc.ref.delete();

                    /*this.category.forEach((doc) => {

                        console.log(doc);
                        
                        db.collection("selected_categories")
                        .add({
                            subscription: id,
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
        
                    });*/
                    
                });
                })



   

                  this.$toasted.success('Success, Updated Successfully!', {
                    icon : 'check',
                     //icon : 'error_outline'
                 })
                 this.$router.push('/subscriptions/index');
                 
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            }
        }
    }
</script>