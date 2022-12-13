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
                        <h4 class="page-title">Edit location</h4>
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
                                        <label class="col-md-12 p-0">Location</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="location" v-model="item.location"/>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Country</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" class="form-control" name="country" v-model="item.country"/>
                                        </div>
                                    </div>

          
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
                selected: '',
                options: [],
            }
        },
        components:{
            'Header':Header,
            'Sidebar':Sidebar,
            'Footer':Footer,
        
        },

        created: function(){
            this.getItem();
            this.getCompanies();
        },

        methods: {


            getItem()
            {
                var id = this.$route.params.id;

                db.collection('locations').doc(id).get().then((doc) => {
                    console.log(doc.data());
                    this.item = doc.data();
                    //this.previewImage = doc.data().image;
                })
            },
            getCompanies()
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

            submit()
            {
                var id = this.$route.params.id;
                var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);
                console.log(this.item);
                db.collection("locations")
                .doc(id)
                .update({
                  company: this.item.company,
                  location: this.item.location,
                  country: this.item.country,
                  modified: date,
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  //this.readEmployees();
                  this.$toasted.success('Success, Updated Successfully!', {
                    icon : 'check',
                     //icon : 'error_outline'
                 })
                 this.$router.push('/locations/index');
                 
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            }
        }
    }
</script>