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
                        <h4 class="page-title">Edit Blog</h4>
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
                                        <select name="category" v-model="item.category" class="form-control">
                                            <option v-for="option in options" v-bind:key="option.name" v-bind:value="option.id">
                                                {{ option.name }}
                                            </option>
                                        </select>
                                       <!-- <span>Selected: {{ item.category }}</span>--->
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Title</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="title" v-model="item.title"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Short Description</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <textarea v-model="item.short_description" class="form-control form-control-lg" rows="2"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Description</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <ckeditor :editor="editor" :config="editorConfig" id="description" v-model="item.description" class="form-control form-control-lg"></ckeditor>
                                          <!--  <textarea v-pre id="description" v-model="item.description" class="form-control form-control-lg" rows="5"></textarea>-->
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Image</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <img v-bind:src="previewImage" class="uploading-image" />
                                        <input type="file" accept="image/jpeg" @change=uploadImage>
                                         
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                    <label class="col-md-12 p-0">Type</label>
                                    <div class="col-md-12 border-bottom p-0">
                                    <select name="type" v-model="item.type" class="form-control">
                                            <option value="">Select</option>
                                            <option value="1">Public</option>
                                            <option value="2">Private</option>
                                    </select>
                                   <!-- <span>Selected: {{ item.type }}</span>--->
                                    </div>
                                </div>

    
                                </div>
                            </div>

                            <div class="card profile-card">
                                    <div class="card-body">

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Title</label>
                                        <div class="col-md-12 border-bottom  p-0">
                                            <input type="text" class="form-control" name="" v-model="item.meta_title"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Description</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <textarea  name="meta_description" v-model="item.meta_description" class="form-control form-control-lg" rows="5"></textarea>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Meta Keywords</label>
                                        <div class="col-md-12 border-bottom p-0">
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { db } from '../../main'

export default{
     name: 'Edit',
        data(){
            return{
                item:{},
                selected: '',
                options: [],
                previewImage:'',
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                    
                }
            }
        },
        components:{
            'Header':Header,
            'Sidebar':Sidebar,
            'Footer':Footer,
        
        },

        created: function(){
            this.getItem();
            this.getCategories();
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

                db.collection('blogs').doc(id).get().then((doc) => {
                    console.log(doc.data());
                    this.item = doc.data();
                    this.previewImage = doc.data().image;
                })
            },
            getCategories()
            {
                this.options = [];
         
                db.collection("categories")
                .where("type", "==", '1')
                  .get()
                  .then((querySnapshot) => {
                    //console.log('hhhh');
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

            submit()
            {
                var id = this.$route.params.id;
                var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);
                console.log(this.item);
                db.collection("blogs")
                .doc(id)
                .update({
                  category: this.item.category,
                  title: this.item.title,
                  short_description: this.item.short_description,
                  description: this.item.description,
                  meta_title: this.item.meta_title,
                  meta_description: this.item.meta_description,
                  meta_keywords: this.item.meta_keywords,
                  image:this.previewImage,
                  type: this.item.type,
                  modified: date,
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  //this.readEmployees();
                  this.$toasted.success('Success, Updated Successfully!', {
                    icon : 'check',
                     //icon : 'error_outline'
                 })
                 this.$router.push('/blogs/index');
                 
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            }
        }
    }
</script>