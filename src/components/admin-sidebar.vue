<template>
  <!-- Sidebar Start -->
  <aside class="left-sidebar" data-sidebarbg="skin6">
    <div class="scroll-sidebar">
      <nav class="sidebar-nav">
        <ul id="sidebarnav">
          <li class="sidebar-item pt-2">
            <router-link
              to="/profile/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
            >
              <router-link to="/profile/index" class="navbar-brand">
                <span class="logo-text">
                  <img v-if="users.image" :src="users.image" alt="admin" />
                  <img
                    v-else
                    src="./../assets/front/image/loader.gif"
                    alt="admin"
                  />
                </span>
                <b class="logo-icon">
                  <h5 class="user-name">{{ user.data.displayName }}</h5>
                </b>
              </router-link>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/dashboard"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fas fa-tachometer-alt"></i>
              <span class="hide-menu">Dashboard</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/users/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fas fa-users" aria-hidden="true"></i>
              <span class="hide-menu">Users</span>
            </router-link>
          </li>


          <!-- <li class="sidebar-item active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="sidebar-link waves-effect waves-dark sidebar-link">
                    <i class="fas fa-home"></i>
                    Home
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>-->

          <!-- <li class="sidebar-item">
                    <router-link to="/profile/index" class="sidebar-link waves-effect waves-dark sidebar-link" 
                    aria-expanded="false">

                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span class="hide-menu">Profile</span>
                            </router-link>
                    </li>--->

          <li class="sidebar-item">
            <router-link
              to="/categories/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-list-alt" aria-hidden="true"></i>
              <span class="hide-menu">Blog Categories</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/blogs/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fas fa-blog"></i>
              <span class="hide-menu">Blogs</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/countries/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-flag" aria-hidden="true"></i>
              <span class="hide-menu">Countries</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/subscription_categories/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-list" aria-hidden="true"></i>
              <span class="hide-menu">Subscription Categories</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/subscriptions/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-rocket" aria-hidden="true"></i>
              <span class="hide-menu">Subscriptions</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/companies/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fas fa-building" aria-hidden="true"></i>
              <span class="hide-menu">Companies</span>
            </router-link>
          </li>

          
          <li class="sidebar-item">
            <router-link
              to="/offers/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-gift" aria-hidden="true"></i>
              <span class="hide-menu">Offers</span>
            </router-link>
          </li>

          <!--<li class="sidebar-item">
                    <router-link to="/locations/index" class="sidebar-link waves-effect waves-dark sidebar-link" 
                    aria-expanded="false">

                            <i class="fa fa-list" aria-hidden="true"></i>
                            <span class="hide-menu">Locations</span>
                        </router-link>
                    </li>-->

          <li class="sidebar-item">
            <router-link
              to="/faqs/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <span class="hide-menu">Faqs</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/pages/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fas fa-heading"></i>
              <span class="hide-menu">Page Titles</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/components/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fas fa-cogs"></i>
              <span class="hide-menu">Components</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/features/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-key" aria-hidden="true"></i>
              <span class="hide-menu">Features</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/links/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-link" aria-hidden="true"></i>
              <span class="hide-menu">App Links</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/sociallinks/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fas fa-icons"></i>
              <span class="hide-menu">Social Media Links</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/reviews/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fas fa-comments"></i>
              <span class="hide-menu">Client Reviews</span>
            </router-link>
          </li>

          <!--<li class="sidebar-item">
                    <router-link to="/icons/index" class="sidebar-link waves-effect waves-dark sidebar-link" 
                    aria-expanded="false">

                            <i class="fa fa-list" aria-hidden="true"></i>
                            <span class="hide-menu">Icons</span>
                        </router-link>
                    </li>-->

          <li class="sidebar-item">
            <router-link
              to="/orders/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <span class="hide-menu">Orders</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              to="/redeem/index"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              aria-expanded="false"
            >
              <i class="fa fa-tag fa-lg" aria-hidden="true"></i>
              <span class="hide-menu">Redeem Offers</span>
            </router-link>
          </li>

          <!--  <li class="sidebar-item">
                    <router-link to="#" class="sidebar-link waves-effect waves-dark sidebar-link" 
                    aria-expanded="false">

                      <i class="fa fa-power-off" aria-hidden="true"></i>
                            <span class="hide-menu">    <a @click.prevent="signOut">Sign out</a></span>
                        </router-link>
                    </li>--->
        </ul>
      </nav>
    </div>
  </aside>
  <!-- Sidebar End -->
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import { db } from "./../main";

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
      image: "./../assets/front/image/loader.gif",
    };
  },
  created: function() {
    this.getUser();
  },
  methods: {
    getUser() {
      db.collection("users")
        .doc("6zoxAapxwxfb3Nu8H8tl")
        .get()
        .then((doc) => {
          //console.log('hhhh99');
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
          this.$router.replace({
            name: "Signin",
          });
        });
    },
  },
};
</script>
