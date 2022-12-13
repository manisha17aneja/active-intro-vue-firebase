<template>
  <body>
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
      <Header></Header>

      <Sidebar></Sidebar>

      <div class="dashboard-wrapper page-wrapper">
        <div class="page-breadcrumb">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 class="page-title">List Users</h4>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="white-box">
                <div class="uper-add-row">
                  <h3 class="box-title">List Users</h3>
                 <!-- <el-button
                    size="mini"
                    type="success"
                    @click="$router.push({ path: '/users/create' })"
                    >+ Add</el-button
                  > -->
                </div>
                <div class="table-responsive users_table">
                  <el-table
                    :data="
                      employeesData.filter(
                        (data) =>
                          !search ||
                          data.name.toLowerCase().includes(search.toLowerCase())
                      )
                    "
                    style="width: 100%;"
                  >
                    <el-table-column label="Sr No." prop="index">
                    </el-table-column>
                    <el-table-column label="Id" prop="id"> </el-table-column>
                    <el-table-column label="First Name" prop="firstname">
                    </el-table-column>
                    <el-table-column label="Last Name" prop="lastname">
                    </el-table-column>

                    <el-table-column label="Email" prop="email">
                    </el-table-column>
                 
               
                    <el-table-column label="Country" prop="country">
                    </el-table-column>
           
                    <el-table-column label="Created" prop="created"> </el-table-column>
                    <!--<el-table-column label="Modified" prop="modified"> </el-table-column>-->

                    <el-table-column min-width="55" prop="image" label="Image">
                      <template slot-scope="scope">
                      

                        <img v-if="scope.row.image" :src="scope.row.image" alt="user image" />
                        <img v-else src="./../../assets/front/image/profile_img2.jpg" alt="user image" >

                      </template>
                    </el-table-column>

                    

                    <el-table-column align="right">
                      <template slot-scope="scope">
                        <!--<el-button
                          size="mini"
                          type="info"
                          @click="
                            $router.push({
                              path: '/users/edit/' + scope.row.id,
                            })
                          "
                          >Edit</el-button>-->

                        <el-button
                          size="mini"
                          type="info"
                          @click="
                            $router.push({
                              path: '/users/view/' + scope.row.id,
                            })
                          "
                          >View</el-button>
                        

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
import Header from "./../admin-header";
import Footer from "./../admin-footer";
import Sidebar from "./../admin-sidebar";

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { db } from "../../main";

Vue.use(VueAxios, axios);

export default {
  components: {
    Header: Header,
    Sidebar: Sidebar,
    Footer: Footer,
  },
  data() {
    return {
      name: "",
      about: "",
      date: new Date().toISOString().slice(0, 10),
      employeesData: [],
      search: "",
    };
  },
  methods: {
    readEmployees() {
      this.employeesData = [];
      var i = 1;
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employeesData.push({
              index: i,
              id: doc.id,
              firstname: doc.data().firstname,
              lastname: doc.data().lastname,
              email: doc.data().email,
              image: doc.data().image,
              nationality: doc.data().nationality,
              country: doc.data().country,
              //phone_no: doc.data().phone_no,
              website: doc.data().website,
              created: doc.data().created,
              modified: doc.data().modified,
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
      if (confirm("Do you really want to delete?")) {
        // alert('dddd');
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
            this.readEmployees();
            this.$toasted.success("Success, Deleted Successfully!", {
              icon: "check",
              //icon : 'error_outline'
            });
            //this.$router.push('/users/index');
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
