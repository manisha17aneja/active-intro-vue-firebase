<template>
  <!-- Header Start -->
  <header class="topbar" data-navbarbg="skin5">
    <div class="humburger-menu">
      <input type="checkbox" id="toggle-check" />
      <label id="toggle-btn" class="btn" for="toggle-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <nav class="navbar top-navbar navbar-expand-md navbar-dark">
      <div class="navbar-header" data-logobg="skin6">
        <router-link to="/" class="navbar-brand">
          <!--  <span class="logo-text">
                        <img v-if="users.logo" :src="users.image" alt="logo" />
                        <img v-else src="./../assets/front/image/loader.gif" alt="logo" >
                    </span> -->
          <b class="logo-icon">
            <h5 class="user-name">Active Intro</h5>
          </b>
        </router-link>
        <a
          class="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
          href="javascript:void(0)"
          ><i class="ti-menu ti-close"></i
        ></a>
      </div>
      <div
        class="navbar-collapse collapse"
        id="navbarSupportedContent"
        data-navbarbg="skin5"
      >
        <ul class="navbar-nav d-none d-md-block d-lg-none"></ul>
        <ul
          class="navbar-nav ms-auto d-flex align-items-center admin-profile-content"
        >
          <li>
            <div class="drop-down-inner">
              <b-dropdown text="Admin">
                <b-dropdown-item to="/profile/index"> Profile </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click.prevent="signOut">
                  Sign out
                </b-dropdown-item>
              </b-dropdown>
            </div>

            <a class="profile-pic" href="#">
              <img
                v-if="users.image"
                :src="users.image"
                alt="user-img"
                width="36"
                class="img-circle"
              />
              <img
                v-else
                src="./../assets/front/image/loader.gif"
                alt="user-img"
                width="36"
                class="img-circle"
              />

              <!--<span class="text-white font-medium">{{user.data.displayName}} </span>-->
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- Header End -->
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import { db } from "./../main";
import $ from "jquery";

export default {
  components: {},
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
  data() {
    return {
      options: [],
      users: {},
    };
  },
  created: function() {
    this.getUser();
  },
  mounted() {
    $("#toggle-check").click(function() {
      if ($(this).is(":checked")) {
        $(".left-sidebar").addClass("active");
      } else {
        $(".left-sidebar").removeClass("active");
      }
    });

    $(".sidebar-item").click(function() {
      $(this).toggleClass("active");
    });
  },
  methods: {
    getUser() {
      db.collection("users")
        .doc("6zoxAapxwxfb3Nu8H8tl")
        .get()
        .then((doc) => {
          //console.log('hhhh99');
          // console.log(doc.id, " => ", doc.data());
          this.users = doc.data();
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("userSessionId");

          this.$router.replace({
            name: "Signin",
          });
        });
    },
  },
};
</script>
