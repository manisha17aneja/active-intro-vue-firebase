<template>


 
<body>

<!-- preloader -->
<Loader> </Loader>
<!-- preloader -->

<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

 

    <Header></Header>

    <Sidebar></Sidebar>

    <div class="page-wrapper dashboard-wrapper">

        <div class="page-breadcrumb">
            <div class="row align-items-center">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h4 class="page-title">Dashboard</h4>
                </div>
            </div>
        </div>


        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title">Welcome {{user.data.displayName}} </h3>
                       
                        <div class="table-responsive">
                           <!-- <table class="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th class="border-top-0">#</th>
                                        <th class="border-top-0">First Name</th>
                                        <th class="border-top-0">Last Name</th>
                                        <th class="border-top-0">Username</th>
                                        <th class="border-top-0">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Deshmukh</td>
                                        <td>Prohaska</td>
                                        <td>@Genelia</td>
                                        <td>admin</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Deshmukh</td>
                                        <td>Gaylord</td>
                                        <td>@Ritesh</td>
                                        <td>member</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Sanghani</td>
                                        <td>Gusikowski</td>
                                        <td>@Govinda</td>
                                        <td>developer</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Roshan</td>
                                        <td>Rogahn</td>
                                        <td>@Hritik</td>
                                        <td>supporter</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Joshi</td>
                                        <td>Hickle</td>
                                        <td>@Maruti</td>
                                        <td>member</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Nigam</td>
                                        <td>Eichmann</td>
                                        <td>@Sonu</td>
                                        <td>supporter</td>
                                    </tr>
                                </tbody>
                            </table>-->
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
import Header from './admin-header';
import Footer from './admin-footer';
import Sidebar from './admin-sidebar';
import Loader from './Loader';

import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  components:{
    'Header':Header,
    'Sidebar':Sidebar,
    'Footer':Footer,
    'Loader':Loader,
   
},
  computed: {
    ...mapGetters({
   // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Signin"
          });
        });
    }
  }
};
</script>