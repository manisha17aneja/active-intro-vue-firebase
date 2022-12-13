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
                        <h4 class="page-title">My Profile</h4>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 col-xlg-3 col-md-12 user-column">
                        <div class="bottom-company-logo">
                        <img v-if="previewLogoImage" v-bind:src="previewLogoImage" alt="img" class="thumb-lg img-circle" />
                        <img v-else src="./../../assets/front/image/loader.gif" alt="img" class="thumb-lg img-circle" />
                        </div>
                        <div class="white-box">
                            <div class="user-bg"> 
                            <img width="100%" alt="user" src="./../../assets/front/image/profile-img1.jpg">
                                <div class="overlay-box">
                                    <div class="user-content">
                                        <a href="javascript:void(0)">
                                            <img  v-if="previewImage" v-bind:src="previewImage" class="thumb-lg img-circle" alt="img">
                                            <img  v-else src="./../../assets/front/image/loader.gif" class="thumb-lg img-circle" alt="img">

                                         </a>
                                        <h4 class="text-white mt-2">{{item.firstname}} {{item.lastname}}</h4>
                                        <h5 class="text-white mt-2">{{item.email}}</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="user-btm-box mt-5 d-md-flex">
                                <!--<div class="col-md-4 col-sm-4 text-center">
                                    <h1>258</h1>
                                </div>
                                <div class="col-md-4 col-sm-4 text-center">
                                    <h1>125</h1>
                                </div>
                                <div class="col-md-4 col-sm-4 text-center">
                                    <h1>556</h1>
                                </div>-->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-xlg-9 col-md-12">
                        <div class="card profile-card">
                            <div class="card-body">
                                <form class="form-horizontal form-material"  v-on:submit.prevent="submit">
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">First Name</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" placeholder=""  class="form-control p-0 border-0" v-model="item.firstname"> </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Last Name</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" placeholder=""  class="form-control p-0 border-0" v-model="item.lastname"> </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label for="example-email" class="col-md-12 p-0">Email</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="email" placeholder="" class="form-control p-0 border-0" name="example-email" id="example-email" v-model="item.email">
                                        </div>
                                    </div>
                                  
                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Phone No</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" placeholder="" value="" class="form-control p-0 border-0" v-model="item.phone">
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Image</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <input class="profile-image" type="file" accept="image/jpeg" @change=uploadImage>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Logo</label>
                                        <div class="col-md-12 border-bottom p-0">
                                        <input class="profile-image" type="file" accept="image/jpeg" @change=uploadLogoImage>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Address Line 1</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" placeholder="" value="" class="form-control p-0 border-0" v-model="item.address1">
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Address Line 2</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" placeholder="" value="" class="form-control p-0 border-0" v-model="item.address2">
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">City</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" placeholder="" value="" class="form-control p-0 border-0" v-model="item.city">
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">State</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" placeholder="" value="" class="form-control p-0 border-0" v-model="item.state">
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="col-md-12 p-0">Postal Code</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <input type="text" placeholder="" value="" class="form-control p-0 border-0" v-model="item.postal_code">
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="col-sm-12 p-0">Country</label>

                                        <div class="col-sm-12 border-bottom">
                                      
                                            <select name="country" v-model="item.country" class="form-control p-0 border-0">
                                            <option value="">Select Country</option>
                                            <option value="AX">Åland Islands</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia</option>
                                            <option value="BQ">Bonaire</option>
                                            <option value="BA">Bosnia and Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BV">Bouvet Island</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="BN">Brunei Darussalam</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="CI">Côte d’Ivoire</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CA">Canada</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CX">Christmas Island</option>
                                            <option value="CC">Cocos (keeling) Islands</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CG">Congo</option>
                                            <option value="CD">Congo, The Democratic Republic of The</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CU">Cuba</option>
                                            <option value="CW">CuraÃ§ao</option>
                                            <option value="CY">Cyprus</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands (malvinas)</option>
                                            <option value="FO">Faroe Islands</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="GF">French Guiana</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="TF">French Southern Territories</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="DE">Germany</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GP">Guadeloupe</option>
                                            <option value="GU">Guam</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-bissau</option>
                                            <option value="GY">Guyana</option>
                                            <option value="HT">Haiti</option>
                                            <option value="HM">Heard Island and Mcdonald Islands</option>
                                            <option value="VA">Holy See (vatican City State)</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option selected="" value="IN">India</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran, Islamic Republic of</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IE">Ireland</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="KP">Korea, Democratic People's Republic of</option>
                                            <option value="KR">Korea, Republic of</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Laos</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao</option>
                                            <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MH">Marshall Islands</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="YT">Mayotte</option>
                                            <option value="MX">Mexico</option>
                                            <option value="FM">Micronesia, Federated States of</option>
                                            <option value="MD">Moldova, Republic of</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="AN">Netherlands Antilles</option>
                                            <option value="NC">New Caledonia</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="NF">Norfolk Island</option>
                                            <option value="MP">Northern Mariana Islands</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PW">Palau</option>
                                            <option value="PS">Palestine</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PN">Pitcairn</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="QA">Qatar</option>
                                            <option value="RE">Reunion</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russian Federation</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="BL">Saint Barthelemy</option>
                                            <option value="SH">Saint Helena</option>
                                            <option value="KN">Saint Kitts and Nevis</option>
                                            <option value="LC">Saint Lucia</option>
                                            <option value="MF">Saint Martin (French Part)</option>
                                            <option value="PM">Saint Pierre and Miquelon</option>
                                            <option value="VC">Saint Vincent and The Grenadines</option>
                                            <option value="WS">Samoa</option>
                                            <option value="SM">San Marino</option>
                                            <option value="ST">Sao Tome and Principe</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SX">Sint Maartin (Dutch Part)</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="GS">South Georgia and The South Sandwich Islands</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="SD">Sudan</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                            <option value="SZ">Swaziland</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="SY">Syrian Arab Republic</option>
                                            <option value="TW">Taiwan, Province of China</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TL">Timor-Leste</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad and Tobago</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks and Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                            <option value="UM">United States Minor Outlying Islands</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="VG">Virgin Islands, British</option>
                                            <option value="VI">Virgin Islands, U.S.</option>
                                            <option value="WF">Wallis and Futuna</option>
                                            <option value="EH">Western Sahara</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group mb-4">
                                        <div class="col-sm-12">
                                            <input type="submit" class="link btnWhite btn btn-primary" value="Update Profile"/>
                                        </div>
                                    </div>
                                </form>
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
import $ from 'jquery'

import { db } from '../../main'

export default{
     name: 'index',
        data(){
            return{
                item:{},
                selected: '',
                options: [],
                previewImage:'',//https://www.theentertainerme.com/images/profile_img2.jpg
                previewLogoImage:'',
            }
        },
        components:{
            'Header':Header,
            'Sidebar':Sidebar,
            'Footer':Footer,

        
        },

        created: function(){
            this.getItem();
            this.getCategories();
        },

        methods: {

            uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log('dd');
                };
            },
            uploadLogoImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewLogoImage = e.target.result;
                    console.log('dd');
                };
            },
            getItem()
            {
   
                var id = localStorage.getItem("userSessionId");
                //console.log('sssss');
                //var id = id;
                //var id = this.$route.params.id;

                /*db.collection('blogs').doc(id).get().then((doc) => {
                    console.log(doc.data());
                    this.item = doc.data();
                    this.previewImage = doc.data().image;
                })*/
                console.log('fssdfs');
                console.log(id);


                //db.collection("users").where("id", "==", id)
                //.get()
                db.collection('users').doc(id).get()
                .then((doc) => {

                    console.log('dddd');

                    console.log(doc.data());
                    this.item = doc.data();
                    this.previewImage = doc.data().image;
                    this.previewLogoImage = doc.data().logo;
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

            },
            getCategories()
            {
                this.options = [];
         
                db.collection("categories")
                  .get()
                  .then((querySnapshot) => {
                    //console.log('hhhh');
                    querySnapshot.forEach((doc) => {
                      this.options.push({
                        id: doc.id,
                        name: doc.data().name,
                      });
                      //console.log(doc.id, " => ", doc.data());
                     
                    });

                    //console.log(this.options);
                  })
                  .catch((error) => {
                    console.log("Error getting documents: ", error);
                  });
            },

            submit()
            {
                var id = localStorage.getItem("userSessionId");
                var  date = new Date().toLocaleString();//.toISOString().slice(0, 10);
                console.log(this.item);
                db.collection("users")
                .doc(id)
                .update({
                  firstname: this.item.firstname,
                  lastname: this.item.lastname,
                  phone: this.item.phone,
                  email: this.item.email,
                  address1: this.item.address1,
                  address2: this.item.address2,
                  city: this.item.city,
                  state: this.item.state,
                  postal_code: this.item.postal_code,
                  country: this.item.country,
                  //nationality: this.item.nationality,
                  image:this.previewImage,
                  logo:this.previewLogoImage,
                  modified: date,
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  //this.readEmployees();
                  this.$toasted.success('Success, Updated Successfully!', {
                    icon : 'check',
                     //icon : 'error_outline'
                 })
                 //this.$router.push('/profile');
                 
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            }
        }
    }


$('.blog-filter-btn').click(function() {
    $('.theiaStickySidebar').toggleClass("show");
});


    
</script>

