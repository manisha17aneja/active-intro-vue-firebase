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
              <h4 class="page-title">List Companies</h4>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="white-box">
                <div class="uper-add-row">
                  <h3 class="box-title">List Companies</h3>
                  <el-button
                    size="mini"
                    type="success"
                    @click="$router.push({ path: '/companies/create' })"
                    >+ Add</el-button
                  >
                </div>
                <div class="table-responsive companies_table">
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
                    <!--<el-table-column label="Id" prop="id"> </el-table-column>--->
                    <el-table-column label="Name" prop="name">
                    </el-table-column>
                    <!--<el-table-column label="About" prop="about"> </el-table-column>-->
                    <el-table-column label="location" prop="location">
                    </el-table-column>
                    <el-table-column label="Country" prop="country">
                    </el-table-column>
                    <el-table-column label="Postcode" prop="postcode">
                    </el-table-column>
                    <el-table-column label="Phone No" prop="phone_no">
                    </el-table-column>
                    <el-table-column label="Website" prop="website">
                    </el-table-column>
                    <el-table-column label="Offer Redeem Code" prop="code">
                    </el-table-column>
                    <!--<el-table-column label="Created" prop="created"> </el-table-column>-->
                    <!--<el-table-column label="Modified" prop="modified"> </el-table-column>-->

                    <el-table-column min-width="55" prop="image" label="Logo">
                      <template slot-scope="scope">
                        <img :src="scope.row.image" />
                      </template>
                    </el-table-column>

                    <el-table-column
                      min-width="55"
                      prop="background_image"
                      label="Background"
                    >
                      <template slot-scope="scope">
                        <img :src="scope.row.background_image" />
                      </template>
                    </el-table-column>

                    <el-table-column align="right">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="info"
                          @click="
                            $router.push({
                              path: '/companies/edit/' + scope.row.id,
                            })
                          "
                          >Edit</el-button
                        >

                        <el-button
                          size="mini"
                          type="danger"
                          @click="deleteEmployee(scope.row.id)"
                          >Delete</el-button
                        >
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
      db.collection("companies")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employeesData.push({
              index: i,
              id: doc.id,
              name: doc.data().name,
              about: doc.data().about,
              image: doc.data().image,
              background_image: doc.data().background_image,
              location: doc.data().location,
              country: doc.data().country,
              postcode: doc.data().postcode,
              phone_no: doc.data().phone_no,
              website: doc.data().website,
              code: doc.data().code,
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
        db.collection("companies")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
            this.readEmployees();
            this.$toasted.success("Success, Deleted Successfully!", {
              icon: "check",
              //icon : 'error_outline'
            });
            //this.$router.push('/companies/index');
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
