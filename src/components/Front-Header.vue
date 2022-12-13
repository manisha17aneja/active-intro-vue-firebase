<template>
  <!-- Header Start -->
  <header class="site-header site-header--menu-left site-header--absolute">
    <div class="container">
      <nav class="navbar site-navbar offcanvas-active navbar-expand-lg  px-0">
        <!-- Brand Logo-->
        <div class="navbar-top">
          <div class="brand-logo">
            <router-link :to="baseurl">
              <!-- light version logo (logo must be black)-->
              <!--<h3>Interactive <span>Intro</span></h3>-->
              <img class="nav-logo" :src="users.logo" />
            </router-link>
          </div>
          <ul class="navbar-nav main-menu">
            <li v-if="counts > 0">
              <router-link
                to="/insider"
                class="btn btn-primary"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                >Intro Insider</router-link
              >
            </li>
            <li class="nav-item">
              <select
                name="accountMenuOption"
                @change="onchange()"
                class="sign_in"
                v-model="key"
              >
                <option
                  v-for="option in options"
                  v-bind:key="option.name"
                  v-bind:value="option.slug"
                >
                  {{ option.name }}
                </option>
              </select>
            </li>
            <li class="nav-item">
              <a href="#" class="search_toggle"
                ><img src="./../assets/front/image/svg/search.svg"
              /></a>
              <form class="search_form" v-on:submit.prevent="submit">
                <a href="#" class="hide_form"><i class="fa fa-times"></i></a>
                <input
                  type="text"
                  placeholder="Search by place, name & more"
                  v-model.trim="$v.name.$model"
                  :class="{ 'is-invalid': validationStatus($v.name) }"
                  class="form-control"
                />
                <button type="submit">
                  <img src="./../assets/front/image/svg/search.svg" />
                </button>
              </form>
            </li>
          </ul>
          <div class="header-btn">
            <a href="#" class="hide_menu"><i class="fa fa-times"></i></a>
            <!-- <a href="#" class="sign_in">Dubai &nbsp;<i class="fa fa-angle-down"></i></a>--->

            <router-link to="/blogs" class="nav-link">Blog</router-link>

            <template v-if="user.loggedIn">
              <router-link to="/dashboard" class="sign_in"
                >Dashboard</router-link
              >
              <router-link to="/" class="sign_in">{{
                user.data.displayName
              }}</router-link>
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </template>
            <template v-else>
              <router-link to="/signin" class="sign_in">Sign in </router-link>
              <router-link to="/signup" class="sign_up">Sign up </router-link>
            </template>

            <router-link to="/cart" class="cart-icon">
              <img
                class="shoping-card-icon"
                src="./../assets/front/image/shopping-cart.png"
              />
              <span>{{ count }}</span>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- Heade End -->
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import { db } from "./../main";

export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
  data: function() {
    return {
      options: [],
      users: {},
      name: "",
      count: "",
      counts: "",
      accountMenuOption: "/",
      key: localStorage.getItem("slug"),
      baseurl: "/en/" + localStorage.getItem("slug"),
    };
  },
  validations: {
    name: {},
  },
  created: function() {
    this.accountMenuOption = this.$router.history.current.fullPath;
    this.getCountries();
    this.getUser();
    this.getCartCount();
  },
  watch: {
    // Watch for route changes
    $route(route) {
      // Change the value of the selected option
      this.accountMenuOption = route.path;
      console.log('page 166');
      console.log(route);
    },
  },
  methods: {
    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit: function() {
      console.log(this.name);
      this.$router.push("/search/?search=" + this.name);
    },

    onchange: function() {
      console.log("page 1");
      console.log(this.key);
      localStorage.setItem("slug", this.key);
      this.baseurl = "/en/" + this.key;
      this.$router.push(this.baseurl);
    },

    async getCartCount() {
      var uid = localStorage.getItem("userSessionId");
      var randomId = localStorage.getItem("randomId");

      if (uid != null) {
        console.log("yes1");
        console.log(uid);
        this.query = db.collection("cart").where("uid", "==", uid);
        this.querys = db.collection("orders").where("uid", "==", uid);
      } else {
        console.log("no1");
        this.query = db.collection("cart").where("random_id", "==", randomId);
      }

      const snapshot = await this.query.get();
      this.count = snapshot.size;

      //console.log( this.count );

      const snapshots = await this.querys.get();
      this.counts = snapshots.size;
      console.log(this.counts);

      // if(counts > 0){
      //  console.log('rrrr');
      //   console.log(counts);
      // }
    },

    getCountries() {
      this.options = [];

      db.collection("countries")
        .where("status", "==", "1")
        .get()
        .then((querySnapshot) => {
          //console.log('hhhh1');
          querySnapshot.forEach((doc) => {
            this.options.push({
              id: doc.id,
              name: doc.data().country,
              slug: doc.data().slug,
            });
            //console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    getUser() {
      db.collection("users")
        .doc("6zoxAapxwxfb3Nu8H8tl")
        .get()
        .then((doc) => {
          // console.log('hhhh99');
          //console.log(doc.id, " => ", doc.data());
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
            name: "Home",
          });
        });
    },
  },
};
</script>

<style>
@import "./../assets/front/css/bootstrap.css";

@import "./../assets/front/fonts/icon-font/css/style.css";

@import "./../assets/front/fonts/typography-font/typo.css";

@import "./../assets/front/fonts/fontawesome-5/css/all.css";

@import "./../assets/front/plugins/aos/aos.min.css";

@import "./../assets/front/plugins/fancybox/jquery.fancybox.min.css";

@import "./../assets/front/plugins/nice-select/nice-select.min.css";

@import "./../assets/front/plugins/slick/slick.min.css";

@import "./../assets/front/plugins/date-picker/css/gijgo.min.css";

@import "./../assets/front/css/main.css";
</style>
