<template>
  <body>
    <!-- <div class="frames">
            <img src="./../assets/front/image/mobile_frame2.png" class="bottom_frame">
            <img src="./../assets/front/image/mobile_frame4.png">
        </div>-->

    <div class="frame">
      <div class="site-wrapper overflow-hidden">
        <section class="user_login h-100">
          <div class="row no-gutters align-items-center h-100">
            <div class="col-xl-4 offset-xl-7 col-lg-6 offset-lg-6 col-md-12">
              <h1>Sign in</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div v-if="error" class="alert alert-danger">{{ error }}</div>
              <form id="signin-form" v-on:submit.prevent="submit">
                <div class="form-group">
                  <label>Username or email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    v-model.trim="$v.email.$model"
                    :class="{ 'is-invalid': validationStatus($v.email) }"
                    class="form-control"
                  />
                  <div v-if="!$v.email.required" class="invalid-feedback">
                    The email field is required.
                  </div>
                  <div v-if="!$v.email.email" class="invalid-feedback">
                    The email is not valid.
                  </div>
                </div>
                <div class="form-group">
                  <label
                    >Password
                    <router-link to="/forgot" class="float-right">Forgot Password?</router-link></label
                  >
                  <input
                    type="password"
                    name="password"
                    v-model.trim="$v.password.$model"
                    :class="{ 'is-invalid': validationStatus($v.password) }"
                    class="form-control"
                  />
                  <div v-if="!$v.password.required" class="invalid-feedback">
                    The password field is required.
                  </div>
                  <div v-if="!$v.password.minLength" class="invalid-feedback">
                    You must have at least
                    {{ $v.password.$params.minLength.min }} letters.
                  </div>
                  <div v-if="!$v.password.maxLength" class="invalid-feedback">
                    You must not have greater then
                    {{ $v.password.$params.maxLength.min }} letters.
                  </div>
                </div>
                <p class="text-right"></p>
                <p class="text-center mt-4">
                  <button class="btn btn-primary">Sign in</button>
                </p>
                <p class="text-center">
                  Not have an account?
                  <router-link to="/signup">Create Account </router-link>
                  <br /><br />
                  <router-link to="/">Back to Home</router-link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "firebase";
import { db } from "../main";

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
  },
  methods: {
    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit: function() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log("ggg");
          //this.$router.replace({ name: "Dashboard" });

          //console.log(data.user.uid);
          //console.log('ggg');
          //var id  = "sOFktZbVwCze7nzGiOek";

          db.collection("users")
            .where("user_id", "==", data.user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());

                if (doc.data().status == 1) {
                  this.$router.replace({ name: "Dashboard" });
                } else {
                  console.log("ffff");
                  this.$router.replace({ name: "userProfile" });
                }

                localStorage.setItem("userSessionId", doc.id);

                //cart start
                var uid = doc.id;
                var randomId = localStorage.getItem("randomId");

                this.random_id = randomId;
                db.collection("cart")
                  .where("random_id", "==", this.random_id)
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.forEach(function(doc) {
                      // doc.data() is never undefined for query doc snapshots
                      console.log(doc.id, " => ", doc.data());

                      //db.collection("cart").doc(doc.id).udpate({ uid: uid });
                      console.log(uid);

                      db.collection("cart")
                        .doc(doc.id)
                        .update({
                          uid: uid,
                        })
                        .then(() => {
                          console.log("Document successfully updated!");
                        })
                        .catch((error) => {
                          // The document probably doesn't exist.
                          console.error("Error updating document: ", error);
                        });
                    });
                  });

                //cart end
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
        })
        .catch((err) => {
          console.log(err.message);
          this.error = err.message;
        });

      /*
                Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees').then((resp)=>{
                    console.warn(resp.data.data)
                    this.$router.push('dashboard');

                })
                this.$router
                */
    },
  },
};
</script>

<style scoped>
.user_login {
  height: 86vh;
}
.user_login h1 {
  font-size: 30px;
  margin-bottom: 20px;
}
.user_login form {
  margin-top: 50px;
}
.user_login .form-control {
  background: #f2f4f5 !important;
  height: 40px;
  border-color: #f2f4f5;
}
.user_login .form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #dadcdc;
  outline: 0;
}
.user_login label {
  display: block;
}
.user_login .row.h-100 {
  position: relative;
}
.user_login .row.h-100:before {
  background: url(./../assets/front/image/sign_in.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  content: "";
  width: 50%;
  height: 100%;
}
.frames {
  position: absolute;
  height: 100vh;
}
.frames .bottom_frame {
  position: absolute;
  bottom: 0;
}
.user_login .row.h-100 .col-xl-4 {
  background: #fff;
  padding: 25px;
  border-radius: 5px;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.user_login .row.h-100 .col-xl-4::-webkit-scrollbar,
.frame:before,
.frame:after {
  display: none;
}
.site-wrapper {
  height: 100vh;
  border: none;
  border-radius: 0;
}
body {
  background: #fff;
}
.user_login {
  margin-top: 0;
}

@media only screen and (max-width: 992px) {
  .frames,
  .user_login .row.h-100:before {
    display: none;
  }
  .user_login {
    height: 100vh;
    margin-top: 0;
  }
  .user_login > .row {
    background: none;
    padding: 0px 15px;
  }
}
@media only screen and (max-height: 600px) {
  .user_login .row.h-100 .col-xl-4 {
    justify-content: flex-start;
  }
}
</style>
