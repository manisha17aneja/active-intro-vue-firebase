// Index.vue

<template>
    <div>
        <h1>Items</h1>

        <el-table
      :data="
        employeesData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%;"
    >
      <el-table-column label="Id" prop="id"> </el-table-column>
      <el-table-column label="Price" prop="price"> </el-table-column>
      <el-table-column label="Name" prop="name"> </el-table-column>
      <el-table-column align="right">
          
        <template slot-scope="scope">
        <el-button
            size="mini"
            type="info"
            @click="$router.push({ path: '/items/edit/'+scope.row.id})"
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
</template>

<!-- src/App.vue -->
<script>

//import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { db } from '../../main'

Vue.use(VueAxios,axios)

export default {
  data() {
    return {
      name: "",
      date: new Date().toISOString().slice(0, 10),
      employeesData: [],
      search: "",
    };
  },
  methods: {

    readEmployees() {
      this.employeesData = [];
      db.collection("items")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employeesData.push({
              id: doc.id,
              name: doc.data().name,
              price: doc.data().price,
              date: doc.data().date,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    deleteEmployee(id) {

if(confirm("Do you really want to delete?")){
       // alert('dddd');
      db.collection("items")
        .doc(id)
       .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          //this.readEmployees();
          this.$toasted.success('Success, Deleted Successfully!', {
            icon : 'check',
             //icon : 'error_outline'
         })
         //this.$router.push('/items/index');
          
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