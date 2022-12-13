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
                        <h4 class="page-title">Edit Offer</h4>
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
                                        <select name="company" v-model="item.company" class="form-control">
                                            <option v-for="option in options" v-bind:key="option.name" v-bind:value="option.id">
                                                {{ option.name }}
                                            </option>
                                        </select>
                                       <!-- <span>Selected: {{ item.company }}</span>--->
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Title</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="title" v-model="item.title"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Estimated savings</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="amount" v-model="item.amount"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Valid until </label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="date" class="form-control" name="valid_date" v-model="item.valid_date"/>
                                        </div>
                                    </div>

                                    <div class="isResuseable form-group mb-4">
                                        <label class="col-md-12 p-0">Is Reuseable ?</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="checkbox" class="form-control" name="is_reuseable" v-model="item.is_reuseable"/>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Amenities</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(find, index) in finds" :key="index">
                                                <input v-model="tagg[index]" name="tagg[]" class="form-control form-control-lg">
                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteFind(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addFind" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                     <!--  <pre>{{ $data }}</pre> -->
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Offer Type</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(offer_type, index) in offer_types" :key="index">
                                                <input v-model="offer_typee[index]" name="offer_typee[]" class="form-control form-control-lg">
                                               
                                               <!-- <select name="icon" v-model="offer_type.icon"  class="form-control">
                                                    <option v-for="icon in icons" v-bind:key="icon.name" v-bind:value="icon.id">
                                                        {{ icon.name }}
                                                    </option>
                                                </select>-->

                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteOfferTypes(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addOfferTypes" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                     <!--  <pre>{{ $data }}</pre> -->
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Offers</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(offer, index) in offers" :key="index">
                                                <input v-model="offerr[index]" name="offerr[]" class="form-control form-control-lg">
                                               
                                               <!-- <select name="icon" v-model="offer.icon"  class="form-control">
                                                    <option v-for="icon in icons" v-bind:key="icon.name" v-bind:value="icon.id">
                                                        {{ icon.name }}
                                                    </option>
                                                </select>-->

                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteOffers(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addOffers" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                     <!--  <pre>{{ $data }}</pre> -->
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Tag</label>
                                        <div class="col-md-12 p-0 collapse-col">
                                            <div v-for="(extra_tag, index) in extra_tags" :key="index">
                                                <input v-model="extra_tagg[index]" name="extra_tagg[]" class="form-control form-control-lg">

                                                <span  class="delete btn button-white uppercase fas fa-times" @click="deleteExtraTag(index)">
                                                </span>
                                        </div>
  
                                        <span id="add" @click="addExtraTag" class="btn add-more button-yellow uppercase fas fa-plus"></span>

                                     <!--  <pre>{{ $data }}</pre> -->
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
/*import $ from 'jquery'*/

import { db } from '../../main'

export default{
     name: 'Edit',
        data(){
            return{
                item:{},
                selected: '',
                options: [],
                finds: [],
                tagg: [],
                offer_types: [],
                offer_typee: [],
                offers: [],
                extra_tags: [],
                offerr: [],
                extra_tagg: [],
                icons: [],
                previewImage:'',
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                    
                },
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
            this.getIcons();
        },

        methods: {

            addOfferTypes: function () {
                this.offer_types.push({ value: ''});
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
                this.offers.push({ value: '' });
            },
            deleteOffers: function (index) {
                console.log(index);
                console.log(this.offers);
                this.offerr.splice(index, 1);
                this.offers.splice(index, 1);
            },
            addFind: function () {
                this.finds.push({ value: '' });
            },
            deleteFind: function (index) {
                console.log(index);
                console.log(this.finds);
                this.tagg.splice(index, 1);
                this.finds.splice(index, 1);
            },
   

            uploadImage(e){
                const image = e.target.files[0];
                console.log(image);
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
              
                db.collection('offers').doc(id).get().then((doc) => {
                    console.log(doc.data().tag);
                    console.log(doc.data());
                    this.item = doc.data();
                    this.finds = doc.data().tag;
                    this.tagg = doc.data().tag;
                    this.offer_types = doc.data().feature;
                    this.offer_typee = doc.data().feature;
                    this.offers = doc.data().offers;
                    this.offerr = doc.data().offers;
                    this.previewImage = doc.data().image;
                })
            },
            getCategories()
            {
                this.options = [];
         
                db.collection("companies")
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

            submit()
            {

               // console.log(this.finds);
                var id = this.$route.params.id;
                var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);
                console.log(this.item);
                db.collection("offers")
                .doc(id)
                .update({
                  company: this.item.company,
                  title: this.item.title,
                  amount: this.item.amount,
                  valid_date: this.item.valid_date,
                  is_reuseable: this.item.is_reuseable,
                  tag: this.tagg,
                  feature: this.offer_typee,
                  offers: this.offerr,
                  extra_tags: this.extra_tagg,
                  short_description: this.item.short_description,
                  description: this.item.description,
                  meta_title: this.item.meta_title,
                  meta_description: this.item.meta_description,
                  meta_keywords: this.item.meta_keywords,
                  image:this.previewImage,
                  modified: date,
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  //this.readEmployees();
                  this.$toasted.success('Success, Updated Successfully!', {
                    icon : 'check',
                     //icon : 'error_outline'
                 })
                 this.$router.push('/offers/index');
                 
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            }
        }
    }
</script>