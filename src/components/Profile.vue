<template>

<body>


    <!-- preloader -->
    <Loader> </Loader>
    <!-- preloader -->
    
    <div class="frame">
  <div class="site-wrapper overflow-hidden">

     <!-- Header Section -->
    <Front-Header> </Front-Header>

    <!-- Main Section -->

    <div class="feature-img-section user-profile"></div>

<!-- Service section  -->
<div class="prfInformation">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="st_holder validation">
          <div class="prfHead">
            <div class="prfImage">
              <div class="table">
                <div class="table_cell">
                <img  v-if="previewImage" v-bind:src="previewImage" alt="tarun">
                <img  v-else src="./../assets/front/image/profile_img2.jpg" alt="tarun">
                </div>
              </div>
            </div>
            <div class="text">
              <h3>User Profile</h3>
              <p>Hi {{item.firstname}}&nbsp;{{item.lastname}}, Welcome back...1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <section class="package_includes user-profile-option">
          <div class="container">
            <div class="text-center">
              <h2 class="mb-10">Check Your Profile all option in bellow tab</h2>

              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#Subscriptions"
                    >My Subscriptions</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#EditProfile"
                    >Edit Profile</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#myOffters"
                    >My Offers</a
                  >
                </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div class="tab-pane container active" id="Subscriptions">
                  <section id="entProductSection" class="home_products">
                    <div class="container">
                      <div class="row">

                   


                        <div class="col-md-4" v-for="subscription in subscriptions" :key="subscription.id">
                          <div class="product_details">
                            <a
                              href="/en-ae/dubai-2021"
                              onclick="showLoader()"
                              class="d-block"
                              tabindex="0"
                            ></a>
                            <div class="top-content">
                            <router-link :to="{ path: '/subscriptions/'+ subscription.id}" onclick="showLoader()" class="d-block" tabindex="0">
                              <div class="product_img">
                                <img data-src="https://etsitecdn.theentertainerme.com/gallery/product2021/DXB+Classic-Product+d.png" alt="Dubai Classic 2021" class="img-fluid lazyloaded" :src="subscription.image">
                              </div>
                              </router-link>
                              <router-link :to="{ path: '/subscriptions/'+ subscription.id}" tabindex="0">
                                <div
                                  class="
                                    product_details_inner
                                    d-flex
                                    flex-column
                                    justify-content-center
                                  "
                                >
                                  <h2 class="product_name m-0">
                                  {{ subscription.title }}
                                  </h2>
                                  <small class="short_desc">{{ subscription.tag_line }}</small>
                                  <div class="product_price">
                                    <div class="tag-wrap">
                                      <span
                                        class="
                                          badge_transparent
                                          d-inline-flex
                                          align-items-center
                                          justify-content-center
                                        "
                                      >
                                        Special Offer</span
                                      >
                                    </div>
                                    <span class="strike"
                                      ><span class="before_price"
                                        >AED {{ subscription.price }}</span
                                      ></span
                                    >
                                    <span class="percentage_off ml-1">
                                    {{ subscription.discount }} % Off
                                    </span>
                                    <h3 class="after_price">
                                      AED {{ subscription.discountPrice }}

                                      <span class="vat_info"
                                        >*AED {{ subscription.vat }} including VAT</span
                                      >
                                    </h3>
                                  </div>
                                </div>
                                </router-link>
                            
                           
                            </div>
                            <div class="bottom-content">
                              <div class="d-flex">

                              <ul class="product_features list-unstyled d-flex flex-wrap flex-column p-0">
                                 
                                  <li  v-for="tag in subscription.tags" :key="tag.value">
                                  <span class="text d-block">{{ tag.value }}</span>
                                </li>
               
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                   


                      </div>
                    </div>
                    <div
                      tabindex="-1"
                      role="dialog"
                      aria-hidden="true"
                      class="modal fade upsellmodal"
                    >
                      <div
                        role="document"
                        class="modal-dialog modal-dialog-centered"
                      >
                        <div class="modal-content">
                          <div class="modal-header modal-header-top p-0">
                            <button
                              type="button"
                              data-dismiss="modal"
                              aria-label="Close"
                              class="close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div
                      tabindex="-1"
                      role="dialog"
                      aria-hidden="true"
                      class="modal fade genericModalConsent separateProduct"
                    >
                      <div
                        role="document"
                        class="modal-dialog modal-dialog-centered"
                      >
                        <div class="modal-content">
                          <div class="modal-header modal-header-top p-0">
                            <button
                              type="button"
                              data-dismiss="modal"
                              aria-label="Close"
                              class="close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div class="modal-body text-center">
                            <p>
                              You already have products in your basket. Do you
                              wish to remove these and start a new order?
                            </p>
                            <div class="d-flex">
                              <!---->
                              <a
                                href="&amp;cartRefresh=1"
                                class="btn cheersCntBtn subscribe_btn"
                                >Yes</a
                              >
                              <a
                                href="javascript:void(0);"
                                data-dismiss="modal"
                                class="btn cheersCntBtn subscribe_btn"
                                >No</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      data-toggle="modal"
                      data-target=".upsellmodal"
                      data-keyboard="false"
                      data-backdrop="static"
                      class="tempUpsellBtn"
                      style="display: none"
                    ></button>
                    <button
                      data-toggle="modal"
                      data-target=".separateProduct"
                      data-keyboard="false"
                      data-backdrop="static"
                      class="tempSeparateBtn"
                      style="display: none"
                    ></button>
                  </section>
                </div>

                <div class="tab-pane container" id="EditProfile">

              
                <div class="prfInformation">
            <div class="container">
            <div class="row">
                            <div class="col-12">
                            <div class="st_holder validation">
                            
                            <div class="form_holder">
                            <div class="forgot-info info-div" style="display: none;">
                            <p class="show-error"></p>
                            </div>
                            <div id="errors_key" style="color: red; display: none;"></div>
                            <form id="wl-login" class="form-vertical" autocomplete="off" novalidate="novalidate"  v-on:submit.prevent="submit">
                            <input type="hidden" name="_csrf" value="R3M1R2d4a2soPwR/CjQHUiA8DXRVGg05KisFLjU3GB8BMlYPNQwxIw=="> <fieldset>
                            <div class="cn_block inf_holder">
                            <div class="title_head">
                            <h2>Personal Information</h2>
                            </div>
                            <div class="wrapFields">
                            
                            
                                                <div class="fl_row">
                            <div class="form-group">
                            <label for="firstname">First Name</label>
                            
                            <input name="firstname" placeholder="First Name" id="firstname" class="input_field" type="text" v-model="item.firstname">
                            </div>
                            </div>
                            <div class="fl_row">
                            <div class="form-group">
                            <label for="lastname">Last Name</label>
                            <input name="lastname" placeholder="Last Name" id="lastname" class="input_field" 
                            type="text" v-model="item.lastname">
                            </div>
                            </div>


                            <div class="fl_row">
                            <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="text" name="email" id="email" class="input_field" v-model="item.email">
                            </div>
                            </div>


                            <div class="fl_row">
                            <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="text" name="phone" id="phone" class="input_field" v-model="item.phone">
                            </div>
                            </div>


                            <div class="fl_row">
                            <div class="form-group">
                            <label for="image" class="imageLable">Image</label>

                                        <input class="profile-image" type="file" accept="image/jpeg" @change=uploadImage>
                            </div>
                            </div>
                            
                           

                            <div class="fl_row">
                            <label for="country">Country of Residence</label>
                            <div class="select_holder">
                            <select id="country" name="country" v-model="item.country" aria-required="true" aria-invalid="false" class="input_field" >
                            <option value="">Country Of Residence</option>
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
                            <div class="fl_row">
                            <label for="nationality">Nationality</label>
                            <div class="select_holder">
                            <select id="nationality" name="nationality" v-model="item.nationality" aria-invalid="false" class="input_field">
                            <option value="">Nationality</option>
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
                            </select></div>
                            </div>

                            <input type="submit" class="link btnWhite btn btn-primary" value="Submit" style="margin-top: 30px;"/>
                            </div>
                            </div></fieldset>
                            </form> 
            
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
            </div>

            
                </div>

                <div class="tab-pane container" id="myOffters">
                  <section class="all-offers-section">
                    <div id="contactFeature" class="contactFeature">
                      <div class="py-5 service-11">
                        <div class="container">
                          <div class="row why-chose-us-row">
                            <div class="col-md-12">
                              <div class="row">


                     

                                <div id="content" class="col-md-6 wrap-service11-box reusable" v-for="offer in offers" :key="offer.id">
                                   <router-link :to="{ path: '/offer-detail/'+ offer.id}">
                                 <div class="card card-shadow border-0 mb-4">
                                    <div class="p-4" style="">
                                      <div class="icon-space">
                                        <div
                                          class="
                                            icon-round
                                            text-center
                                            d-inline-block
                                            rounded-circle
                                            bg-success-gradiant
                                          "
                                        >
                                           <img alt="PizzaExpress Dubai" class="lazyloaded" :data-src="offer.image" :src="offer.image"/>
                                                
                                                <div v-if="offer.is_reuseable">
                                                    <svg class="lock-svg-icon" width="461.4px" height="461.4px" enable-background="new 0 0 461.404 461.404" version="1.1" viewBox="0 0 461.404 461.404" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m368.15 195.83h-4.202l8.199-59.771c4.343-31.699-3.909-63.19-23.258-88.674-19.339-25.484-47.442-41.916-79.137-46.26-40.15-5.505-80.041 9.477-106.68 40.092-8.185 9.402-7.19 23.651 2.202 31.837 9.412 8.175 23.661 7.196 31.848-2.205 16.604-19.092 41.466-28.438 66.506-25.013 40.762 5.592 69.402 43.316 63.809 84.094l-9.04 65.894h-225.16c-9.59 0-17.36 7.771-17.36 17.357v230.87c0 9.581 7.77 17.356 17.36 17.356h274.92c9.589 0 17.359-7.77 17.359-17.356v-230.86c-5e-3 -9.586-7.775-17.356-17.365-17.356zm-117.02 172.97v64.199h-42.386v-65.945c-3.844-4.805-6.153-10.876-6.153-17.51 0-15.517 12.585-28.099 28.108-28.099 15.518 0 28.104 12.586 28.104 28.099-1e-3 7.46-2.934 14.222-7.673 19.256z"/>
                                                    </svg>
                                                </div>
                                                <div v-else>
                                                <svg class="lock-svg-icon" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m437.33 192h-32v-42.667c0-82.343-66.989-149.33-149.33-149.33s-149.33 66.99-149.33 149.33v42.667h-32c-5.896 0-10.667 4.771-10.667 10.667v266.67c0 23.531 19.135 42.666 42.667 42.666h298.67c23.531 0 42.666-19.135 42.666-42.667v-266.67c0-5.896-4.771-10.667-10.667-10.667zm-149.4 222.82c0.333 3.01-0.635 6.031-2.656 8.292-2.021 2.26-4.917 3.552-7.948 3.552h-42.667c-3.031 0-5.927-1.292-7.948-3.552s-2.99-5.281-2.656-8.292l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313 0-23.531 19.135-42.667 42.667-42.667s42.667 19.135 42.667 42.667c0 13.792-6.531 26.365-17.458 34.313l6.728 60.51zm53.395-222.82h-170.67v-42.667c0-47.052 38.281-85.333 85.333-85.333s85.333 38.281 85.333 85.333v42.667z"/>
                                                </svg>
                                                </div>

                                        </div>
                                      </div>
                                      <div>
                                        
                                        <div class="entry-category">
                                        <a href="#" rel="category" tabindex="0" v-if="offer.is_reuseable">Reusable</a
                                                >
                                        </div>
                                        <h4
                                          class="
                                            font-weight-medium
                                            company-name
                                            mt-5
                                          "
                                        >
                                         {{ offer.title }}
                                        </h4>
                                        <h6 class="font-weight-medium mt-0">
                                        {{ offer.company_name }}
                                        </h6>
                                        <p class="mt-3">AED {{ offer.amount }} Estimated savings</p>
                                              <span
                                                ><i class="fas fa-clock" style="margin-right: 5px"></i>Valid
                                                until {{ offer.valid_date | validDate }}</span
                                              >
                                        <div></div>
                                      </div>
                                    </div>
                                    <ul class="offer_list2 mt-4">
                                    <li v-for="tag in offer.tag" :key="tag"><span class="offer_text">{{ tag }}</span></li>
                                    </ul>
                                  </div>
                                  </router-link>
                                </div>


                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
    

    
 

    <!-- Main Section -->
    <!-- Footer Section -->
    <Front-Footer> </Front-Footer>
  
  </div>
  </div>

  </body>
</template>


<script>

import Header from './Front-Header';
import Footer from './Front-Footer';
import Loader from './Loader';


import $ from 'jquery'

import { db } from './../main'

export default{
     name: 'Profile',
        data(){
            return{
                item:{},
                selected: '',
                options: [],
                previewImage:'',//https://www.theentertainerme.com/images/profile_img2.jpg
                subscriptions: [],
                offers: [],
            }
        },
        components:{
            'Front-Header':Header,
            'Front-Footer':Footer,
            'Loader':Loader,
            
        
        },

        created: function(){
            this.getItem();
            this.getCategories();
            this.fetchSubscriptions();
            this.getOffers();
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
            getItem()
            {
   
                var id = localStorage.getItem("userSessionId");
                console.log('sssss '+id);
                console.log('sssss');
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
                  country: this.item.country,
                  nationality: this.item.nationality,
                  image:this.previewImage,
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
            },

    fetchSubscriptions()
    {


      db.collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        //console.log('hhhh');
        querySnapshot.forEach((doc) => {

         // console.log(doc.id, " => ", doc.data());
          
              var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
              var vat = discountPrice + discountPrice * doc.data().vat/100;

              this.subscriptions.push({
                id: doc.id,
                title: doc.data().title,
                tag_line: doc.data().tag_line,
                tags: doc.data().tag,
                description: doc.data().description,
                image: doc.data().image,
                price: doc.data().price,
                discount: doc.data().discount,
                discountPrice: discountPrice,
                vat: vat,
                created: doc.data().created,
              });

          

        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


    },

  getOffers()
    {
       var uid = localStorage.getItem("userSessionId");

            db.collection('redeem_offers')
            .where("uid", "==", uid)
            .get().then((querySnapshot) => {
                querySnapshot.forEach((docs) => {

                  db.collection('offers')
                  //.where("uid", "==", uid)
                  .doc(docs.data().offer_id)
                  .get().then((doc) => {

                    db.collection('companies')
                  //.where("uid", "==", uid)
                  .doc(doc.data().company)
                  .get().then((res) => {

                    this.offers.push({
                        id: doc.id,
                        title: doc.data().title,
                        company_name: res.data().name,
                        amount: doc.data().amount,
                        is_reuseable: doc.data().is_reuseable,
                        tag: doc.data().tag,
                        valid_date: doc.data().valid_date,
                        image: doc.data().image,
                        
                      });
                    });
                    });
                })

            })

    
    },

        }
    }


$('.blog-filter-btn').click(function() {
    $('.theiaStickySidebar').toggleClass("show");
});


    
</script>

