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
                    <h4 class="page-title">List Locations</h4>
                </div>
            </div>
        </div>


        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <div class="uper-add-row">                       
                             <h3 class="box-title">List Locations</h3>
                            <el-button
                            size="mini"
                            type="success"
                            @click="$router.push({ path: '/locations/create'})"
                            >+ Add</el-button>
                        </div>
                        <div class="table-responsive">
                         


                            <el-table
      :data="
      resultData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%;"
    >
       <el-table-column label="Sr No." prop="index"> </el-table-column>
      <!--<el-table-column label="Id" prop="id"> </el-table-column>--->
      <el-table-column label="Company Id" prop="company"> </el-table-column>
      <!--<el-table-column label="Name" prop="name"> </el-table-column>--->

      <el-table-column label="location" prop="location"> </el-table-column>
      <el-table-column label="Country" prop="country"> </el-table-column>
      <el-table-column label="Created" prop="created"> </el-table-column>



      
      <el-table-column align="right">
          
        <template slot-scope="scope">
        <el-button
            size="mini"
            type="info"
            @click="$router.push({ path: '/locations/edit/'+scope.row.id})"
            >Edit</el-button>

          <el-button
            size="mini"
            type="danger"
            @click="deleteEmployee(scope.row.id)"
            >Delete</el-button>

        </template>
      </el-table-column>
    </el-table>
                        </div>
                    </div>
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


import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { db } from '../../main'

Vue.use(VueAxios,axios)

export default {
    components:{
        'Header':Header,
        'Sidebar':Sidebar,
        'Footer':Footer,
       
    },
  data() {
    return {
      name: "",
      about: "",
      date: new Date().toISOString().slice(0, 10),
      resultData: [],
      search: "",
    };
  },
  methods: {

    readEmployees() {
      this.resultData = [];
      var i = 1;
      db.collection("locations")
      //.where("country", "==", 'Al Garhoud')
      //.where("company", "==", 'yVtjnLlPwzV0FhTDlOLS')
      
        .get()
        .then((querySnapshot) => {
         // console.log('hhhh');
          querySnapshot.forEach((doc) => {
            this.resultData.push({
              index: i,
              id: doc.id,
              company: doc.data().company,
              location: doc.data().location,
              country: doc.data().country,
              created: doc.data().created,
              //modified: doc.data().modified,
            });
            console.log(doc.id, " => ", doc.data());
            i++;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    deleteEmployee(id) {

if(confirm("Do you really want to delete?")){
       // alert('dddd');
      db.collection("locations")
        .doc(id)
       .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.readEmployees();
          this.$toasted.success('Success, Deleted Successfully!', {
            icon : 'check',
             //icon : 'error_outline'
         })
         //this.$router.push('/locations/index');
          
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

    }
    },
  },
  mounted() {
    this.readEmployees();
  },
};
</script>