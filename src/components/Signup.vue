<template>
<body>
    
        <!--<div class="frames">
            <img src="./../assets/front/image/mobile_frame2.png" class="bottom_frame">
            <img src="./../assets/front/image/mobile_frame4.png">
        </div>-->
    
    <div class="frame">
  <div class="site-wrapper overflow-hidden">
    <section class="user_login h-100">
    <div class="row no-gutters align-items-center h-100">
    <div class="col-xl-4 offset-xl-7 col-lg-6 offset-lg-6 col-md-12">
        <h1>Sign up</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        
        <form id="signin-form" v-on:submit.prevent="submit">
            <div class="row">
            <div class="col-md-6 col-sm-6 col-6">
            <div class="form-group">
            <label>First Name</label>
            <input type="text" v-model.trim="$v.firstname.$model" :class="{'is-invalid': validationStatus($v.firstname)}" class="form-control form-control-lg">
                <div v-if="!$v.firstname.required" class="invalid-feedback">The first name field is required.</div>
            </div>
            </div>
            <div class="col-md-6  col-sm-6 col-6">
            <div class="form-group">
            <label>Last Name</label>
            <input type="text" v-model.trim="$v.lastname.$model" :class="{'is-invalid': validationStatus($v.lastname)}" class="form-control form-control-lg">
                <div v-if="!$v.lastname.required" class="invalid-feedback">The last name field is required.</div>
            </div>
            </div>
            <div class="col-md-12">
            <div class="form-group">
            <label>Email Address</label>
                <input type="email" v-model.trim="$v.email.$model" :class="{'is-invalid': validationStatus($v.email)}" class="form-control form-control-lg">
                <div v-if="!$v.email.required" class="invalid-feedback">The email field is required.</div>
                <div v-if="!$v.email.email" class="invalid-feedback">The email is not valid.</div>
            </div>
            </div>
            <div class="col-md-6  col-sm-6 col-6">
            <div class="form-group">
            <label>Password</label>
            <input type="password" v-model.trim="$v.password.$model" :class="{'is-invalid': validationStatus($v.password)}" class="form-control form-control-lg">
                <div v-if="!$v.password.required" class="invalid-feedback">The password field is required.</div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">You must have at least {{ $v.password.$params.minLength.min }} letters.</div>
                <div v-if="!$v.password.maxLength" class="invalid-feedback">You must not have greater then {{ $v.password.$params.maxLength.min }} letters.</div>
            
            </div>
            </div>
            <div class="col-md-6  col-sm-6 col-6">
            <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" v-model.trim="$v.cpassword.$model" :class="{'is-invalid': validationStatus($v.cpassword)}" class="form-control" value="">
            <div v-if="!$v.cpassword.sameAsPassword" class="invalid-feedback">Password Mismatch</div>
            </div>
            </div>
            </div>
            <p class="text-center mt-4"><button class="btn btn-primary ">Register</button></p>
            <p class="text-center">Already have an account? <router-link to="/signin">Sign in </router-link></p>
        </form>
    </div>
    </div>
    </section>
    </div>
    </div>

</body>

</template>

<script>
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators';
import firebase from "firebase";
import { db } from '../main'

export default {
    name: 'Register',
    data: function() {
        return {
            firstname: '',
            lastname: '',
            //country: '',
            email: '', 
            password: '',
            cpassword: '',
           //countryList: [],


        }
    }, 
    validations: {
        firstname: {required},
        lastname: {required},
        //country: {required},
        email: {required, email},
        password: {required, minLength: minLength(6), maxLength: maxLength(18)},
        cpassword: { sameAsPassword: sameAs('password') }
    },

    methods: {

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;

            //alert('Registered Successfully');

            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(data => {


                data.user.updateProfile({
                    displayName: this.firstname
                })
                .then(() => {
                    console.log('jjj');
                console.log(data.user);

                var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);


                db.collection("users")
                .add({ 
                    user_id: data.user.uid,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    status: 2,
                    country: '',
                    nationality: '',
                    image: '',
                    created: date,
                    modified: date,
                })
             
                .then(function(docRef) {

                    console.log("Added Successfully!");
                    console.log("Document written with ID: ", docRef.id);
                    localStorage.setItem("userSessionId", docRef.id);

                    this.$toasted.success('Success, Added Successfully!', {
                       icon : 'check',
                        //icon : 'error_outline'
                    })
                    //this.$router.push('/blogs/index');
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                }); 


              

                    console.log('Registered Successfully');
                    var id = localStorage.getItem("userSessionId");
                    console.log('rrr '+id);
                    //this.$router.replace({ name: "Dashboard" });
                    //this.$router.replace({ name: "userProfile" });
                    this.$router.push('Profile');

                });
            }).catch(err => {
                console.log('sdd');
                console.log(err.message);

                this.$toasted.error('Error,'+err.message, {
                    //icon : 'check',
                    icon : 'error_outline'
                 })

                this.error = err.message;
            });
        }
    }
}
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
      background: #f2f4f5 !IMPORTANT;
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
  .user_login .row.h-100 .col-xl-4::-webkit-scrollbar, .frame:before, .frame:after {
      display: none;
  }
  .frames:before, .frames:after {
      position: absolute;
      content: "";
      width: 3%;
      height: 40%;
      left: 0;
      background: url(./../assets/front/image/mobile_frame5.png);
      top: 50%;
      transform: translateY(-50%);
      background-size: cover;
  }
  
  .frames:after {
      right: 0;
      left: auto;
      background: url(./../assets/front/image/mobile_frame6.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: right;
  }
  .site-wrapper {
      height: 100vh;
      border: none;
      border-radius: 0;
  }
  body {
      background: #fff;
  }
 .user_login{
      margin-top:0;
  }
  
  
  @media only screen and (max-width: 992px){
  .frames, .user_login .row.h-100:before {
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
  @media only screen and (max-height: 600px){
  .user_login .row.h-100 .col-xl-4 {
      justify-content: flex-start;
  }
  }
    </style>