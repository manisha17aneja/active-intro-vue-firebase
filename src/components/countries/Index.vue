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
                    <h4 class="page-title">List Countries</h4>
                </div>
            </div>
        </div>


        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <div class="uper-add-row">                       
                             <h3 class="box-title">List Countries</h3>
                            <el-button
                            size="mini"
                            type="success"
                            @click="$router.push({ path: '/countries/create'})"
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


      
      <el-table-column label="Country" prop="country"> </el-table-column>
      <el-table-column label="status" prop="status"> </el-table-column>

      <el-table-column min-width="55"  prop="image" label="Image">
        <template slot-scope="scope">
            <img :src="scope.row.image"/>
        </template>
      </el-table-column>
      
      <el-table-column label="Created" prop="created"> </el-table-column>


      
      <el-table-column align="right">
          
        <template slot-scope="scope">
        <el-button
            size="mini"
            type="info"
            @click="$router.push({ path: '/countries/edit/'+scope.row.id})"
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
      db.collection("countries")
        .get()
        .then((querySnapshot) => {
         // console.log('hhhh');
          querySnapshot.forEach((doc) => {
            this.resultData.push({
              index: i,
              id: doc.id,
              country: doc.data().country,
              image: doc.data().image,
              status: doc.data().status,
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
      db.collection("countries")
        .doc(id)
       .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.readEmployees();
          this.$toasted.success('Success, Deleted Successfully!', {
            icon : 'check',
             //icon : 'error_outline'
         })
         //this.$router.push('/countries/index');
          
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