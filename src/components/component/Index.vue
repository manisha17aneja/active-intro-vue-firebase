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
                    <h4 class="page-title">List Components</h4>
                </div>
            </div>
        </div>


        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <!--<div class="uper-add-row">                       
                             <h3 class="box-title">List Components</h3>
                            <el-button
                            size="mini"
                            type="success"
                            @click="$router.push({ path: '/components/create'})"
                            >+ Add</el-button>
                        </div>-->
                        <div class="table-responsive">
                         


                            <el-table
      :data="
      faqData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%;"
    >
      <el-table-column label="Sr No." prop="index"> </el-table-column>
      <el-table-column label="Id" prop="id"> </el-table-column>
      <el-table-column label="Title" prop="title"> </el-table-column>
      <el-table-column label="Description" prop="description"> </el-table-column>

      <el-table-column min-width="55"  prop="image" label="Image">
        <template slot-scope="scope">
            <img :src="scope.row.image"/>
        </template>
      </el-table-column>

      <el-table-column label="Created" prop="created"> </el-table-column>
      <el-table-column label="Modified" prop="modified"> </el-table-column>
      

      <el-table-column align="right">
          
        <template slot-scope="scope">

          
        <el-button
            size="mini"
            type="info"
            @click="$router.push({ path: '/components/edit/'+scope.row.id})"
            >Edit</el-button>

         <!-- <el-button
            size="mini"
            type="danger"
            @click="deleteFaq(scope.row.id)"
            >Delete</el-button>--->

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
      description: "",
      date: new Date().toISOString().slice(0, 10),
      faqData: [],
      search: "",
    };
  },
  methods: {

    readFaqs() {
      this.faqData = [];
      var i = 1;
      db.collection("components")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.faqData.push({
              index: i,
              id: doc.id,
              title: doc.data().title,
              description: doc.data().description,
              image: doc.data().image,
              created: doc.data().created,
              modified: doc.data().modified,
            });
            console.log(doc.id, " => ",  doc.data());
            i++;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    deleteFaq(id) {

if(confirm("Do you really want to delete?")){
       // alert('dddd');
      db.collection("components")
        .doc(id)
       .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.readFaqs();
          this.$toasted.success('Success, Deleted Successfully!', {
            icon : 'check',
             //icon : 'error_outline'
         })
         //this.$router.push('/components/index');
          
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

    }
    },
  },
  mounted() {
    this.readFaqs();
  },
};
</script>