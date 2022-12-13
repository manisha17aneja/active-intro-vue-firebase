<template>

	<body>

<!-- preloader -->
<Loader> </Loader>
<!-- preloader -->

		<!-- Header Section -->
		<Front-Header> </Front-Header>
		<section class="shop_page search-listing">
			<div class="container px-0">
				<div class="row no-gutters">
					<div class="col-lg-3 col-md-12">
						<div class="sidebar-wrapper" style="border-bottom: 0px none rgb(119, 119, 119);"> <a href="javascript:void(0);" v-on:click="close_filter" id="close_filter"><i class="fa fa-times"></i></a>
							<form v-on:submit.prevent="submit">
								<div class="scroll_filters">

									<div class="widget">
										<h3 class="widget-title">
                                            Categories
                                        </h3>
										<div class="collapse show" id="widget-body-1" style="">
											<div class="widget-body">
												<div class="form-group">
													<label :for="category.name" v-for="category in categories" :key="category.id">
														<input type="checkbox" name="category[]" :value="category.id" class="category">{{ category.name }}
                                                    </label>
												</div>
											</div>
											<!-- End .widget-body -->
										</div>
										<!-- End .collapse -->
									</div>
									<!-- End .widget -->
									<hr>

									<div class="widget mt-4">
										<h3 class="widget-title">Offer Type</h3>
										<div class="collapse show" id="widget-body-2">
											<div class="widget-body">
												<div class="form-group">
													<label for="get_free" v-for="(offerType, index) in offerTypes" :key="index">
														<input type="checkbox" name="offer_types[]" :value="offerType" class="offer_types">{{ offerType }}
                                                    </label>
												</div>
											</div>
											<!-- End .widget-body -->
										</div>
										<!-- End .collapse -->
									</div>
									<!-- End .widget -->
									<hr>

									<div class="widget mt-4">
										<h3 class="widget-title">Offers</h3>
										<div class="collapse show" id="widget-body-3">
											<div class="widget-body">
												<div class="form-group">
													<label for="new" v-for="(offer1, index) in offers1" :key="index">
														<input type="checkbox" name="offers[]" :value="offer1" class="offers">{{ offer1 }}
                                                    </label>
												</div>
											</div>
											<!-- End .widget-body -->
										</div>
										<!-- End .collapse -->
									</div>
									<!-- End .widget -->
									<hr>

									<div class="widget mt-4">
										<h3 class="widget-title">
                                Amenities
								</h3>
										<div class="collapse show" id="widget-body-3">
											<div class="widget-body">
												<div class="form-group">
													<label for="new" v-for="(amenitie, index) in amenities" :key="index">
														<input type="checkbox" name="amenities[]" :value="amenitie" class="amenities">{{ amenitie }}</label>
												</div>
											</div>
											<!-- End .widget-body -->
										</div>
										<!-- End .collapse -->
									</div>
									<!-- End .widget -->
									<hr> </div>
								<div class="clear_filter">
									<button type="submit" class="btn btn-primary">Apply</button>
									<input type="reset" v-on:click="getCompanies()" value="Clear" class="btn btn-dark"> 
                                </div>
							</form>
						</div>
					</div>
					<div class="col-lg-9 col-md-12 search-listing-right">
						<div class="row">
							<div class="col-md-12">
								<div class="row top_filter">
									<div class="col-md-9">
										<div class="search_bar">
											<form v-on:submit.prevent="submit">
												<input type="text" placeholder="Search by place, name & more" v-model.trim="$v.name.$model" :class="{'is-invalid': validationStatus($v.name)}" class="form-control form-control-lg">
												<!--<div v-if="!$v.name.required" class="invalid-feedback">The name field is required.</div>-->
												<button type="submit">Search</button>
											</form>
										</div>
									</div>
									<div class="col-md-3"> <a href="#" v-on:click="mobile_filter_toggle" class="mobile_filter_toggle"><i class="fa fa-sliders-h"></i> More Filters</a>
										<div class="map_toggle"> <i class="fa fa-map-marker-alt"></i> &nbsp;&nbsp;Map
											<div class="custom-switch">
												<input type="checkbox" id="switch" class="switch">
												<label for="switch"></label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 search-bottom-row-head">
								<div class="row search-bottom-row">
									<div class="col-md-4 col-sm-6" v-for="company in companies" :key="company.id">
										<router-link :to="{ path: '/single-company/'+ company.id}">
											<div class="package">
                                            <div class="main_img"> <img :src="company.background_image">
                                            <h3>{{ company.name }}</h3>
                                            <h5>{{ company.category }}</h5> <img class="pakage-logo" :src="company.image"> </div>
                                            <div class="package_content">
                                            <!--<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. </p>-->
                                            <p class="category d-flex flex-wrap"> <span class="text" v-for="(tag, index) in company.tags" :key="index">{{ tag }}</span></p>
                                            <ul>
                                            <li v-for="(offer, index) in company.offers" :key="index"> {{ offer }}</li>
                                            </ul>
                                            </div>
                                            </div>


                        


										</router-link>
									</div>
								</div>
								<div class="map-filter">
                                    
									<div class="mapouter">
                                        
										<div class="gmap_canvas">

                                        <GmapMap
  :center="center"
  :zoom="7"
  map-type-id="terrain"
  style="width: 1000px; height: 600px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in companies"
    :position="m"
    :clickable="true"
    :draggable="true"
    @click="center=m"
  />
</GmapMap>
											<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
											<a href="https://embedgooglemap.net/maps/40"></a>
											<br> <a href="https://www.embedgooglemap.net">embed maps on website</a> </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Footer Section -->
		<Front-Footer> </Front-Footer>
	</body>
</template>

<script>

import Header from './Front-Header';
import Footer from './Front-Footer';
import Loader from './Loader';

import $ from 'jquery' 
/*import { required } from 'vuelidate/lib/validators'*/

import { db } from '../main'

export default {

    components:{
        'Front-Header':Header,
        'Front-Footer':Footer,
        'Loader':Loader,
    },
    data: function() {
        return {
            name: '',
            category:[],
            categories: [],
            companies: [],
            offersType: [],
            offers: [],
            offers2: [],
            finaloffers: {},
            tags: [],
            tags2: [],
            finaltags: {},
            offerTypes: [],
            offers1: [],
            amenities: [],
            cid1:[],
            cid2:[],
            cid3:[],
            data:[],

            markers:[],
            center: { lat: 53.462118, lng: -2.249097 },
        }
    }, 
    validations: {
        name: {},
        category: {},
    },
    created: function()
    {
        this.getCategories();
        this.getCompanies();
        this.getOfferType();

    },
    mounted() {
        $('#switch').on('click', function() {    
            if($(this).is(":checked")) {
                $(".map-filter").addClass('active');
                 $(".search-bottom-row > div").removeClass("col-md-4").addClass('col-md-12'); 
            } else {
                $(".map-filter").removeClass('active');
                 $(".search-bottom-row > div").addClass("col-md-4").removeClass('col-md-12'); 
            }
        });
    },
    methods: {

        mobile_filter_toggle() {
           // alert('yes');
                $('.sidebar-wrapper').addClass('active');
        },
        close_filter() {
            //alert('no');
            $('.sidebar-wrapper').removeClass('active');
        },

        validationStatus: function(validation) {
        return typeof validation != "undefined" ? validation.$error : false;
        },

        async submit() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
        
            this.companies =[]; 
            this.company_ids = [];

            var selectedCategory = [];
            $('.category:checked').each(function(i){
                selectedCategory[i] = $(this).val();
            });

            // console.log('selectedCategory --'+selectedCategory);

            var selectedOfferTypes = [];
            $('.offer_types:checked').each(function(i){
                selectedOfferTypes[i] = $(this).val();
            });

            // console.log('selectedOfferTypes --'+selectedOfferTypes);

            var selectedOffers = [];
            $('.offers:checked').each(function(i){
                selectedOffers[i] = $(this).val();
            });
            // console.log('selectedOffers --'+selectedOffers);

            var selectedAmenities = [];
            $('.amenities:checked').each(function(i){
                selectedAmenities[i] = $(this).val();
            });

            // console.log('selectedAmenities --'+selectedAmenities);
   
            this.cid1 = [];
            this.cid2 = [];
            this.cid3 = [];
            this.data = [];

            if (selectedOfferTypes.length != 0){
                await db.collection("offers").where('feature', 'array-contains-any', selectedOfferTypes).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.cid1.push(doc.data().company);
                    });
                }); 
                this.data.push(this.cid1);
            }
       
            if (selectedOffers.length != 0){
                await db.collection("offers").where('offers', 'array-contains-any', selectedOffers).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.cid2.push(doc.data().company);
                    });
                });
                this.data.push(this.cid2); 
            }

            if (selectedAmenities.length != 0){
                await db.collection("offers").where('tag', 'array-contains-any', selectedAmenities).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.cid3.push(doc.data().company);    
                    });
                });
                this.data.push(this.cid3);  
            } 

            //console.log('star');
            //console.log(this.cid1);
            //console.log(this.cid2);
            //console.log(this.cid3);
            //console.log('end');

            if (this.cid1.length != 0 || this.cid2.length != 0 || this.cid3.length != 0 ){
                this.company_ids = this.data.reduce((a, b) => a.filter(c => b.includes(c)));
                //console.log(this.company_ids);
            }

            var query = db.collection("companies")

            // Search by Category
            if (selectedCategory.length != 0){
                query = query.where("category", "in", selectedCategory)
            }

            query.get()
            .then((querySnapshot) => {

                querySnapshot.forEach((doc) => {

                    var name = doc.data().name.toLowerCase();
                    var country = doc.data().country.toLowerCase();
                    var location = doc.data().location.toLowerCase();
                    var st = this.name.toLowerCase();

                    //console.log(doc.id, " => ", doc.data());

                    db.collection('offers').where("company", "==", doc.id).get().then((querySnapshot) => {

                        this.offers = [];
                        this.tags2 = [];

                        querySnapshot.forEach((docc) => {

                            docc.data().feature.forEach((offersType) => {
                                this.offers.push(offersType);
                            });

                            docc.data().offers.forEach((offers) => {
                                this.offers.push(offers);
                            });

                            docc.data().tag.forEach((tags) => {
                                this.tags2.push(tags);
                            });

                            this.offers = Array.from(new Set(this.offers));
                            this.tags2 = Array.from(new Set(this.tags2));
                    
                        });

                        // console.log( doc.data().category, " => ", this.offers);
                
                        const finaloffers = this.offers;
                        const finaltags = this.tags2;
                
                        db.collection('categories').doc(doc.data().category).get().then((res) => {

                            //console.log('hhhu');
                            //console.log(doc.id);
                            //console.log(this.company_ids);
                            //console.log(this.company_ids.includes(doc.id));

                            // if company ids exist
                            if (this.company_ids.length != 0){

                                    if(this.company_ids.includes(doc.id) === true){

                                        this.companies.push({
                                            id: doc.id,
                                            category: res.data().name,
                                            name: doc.data().name,
                                            offers: finaloffers,
                                            tags: finaltags,
                                            lat: doc.data().lat, 
                                            lng: doc.data().lng,
                                            image: doc.data().image,
                                            background_image: doc.data().background_image,
                                            created: doc.data().created,
                                        });

                                    }

                            }else{

                                if (st) { 

                                    //  Search by Name, Country, Location
                                    if(name.indexOf(st) > -1 || country.indexOf(st) > -1 || location.indexOf(st) > -1){
                                    
                                        // console.log('ddd');
                                    
                                        this.companies.push({
                                            id: doc.id,
                                            category: res.data().name,
                                            name: doc.data().name,
                                            offers: finaloffers,
                                            tags: finaltags,
                                            lat: doc.data().lat, 
                                            lng: doc.data().lng,
                                            image: doc.data().image,
                                            background_image: doc.data().background_image,
                                            created: doc.data().created,
                                        });
                                    }

                                } else {

                                    this.companies.push({
                                        id: doc.id,
                                        category: res.data().name,
                                        name: doc.data().name,
                                        offers: finaloffers,
                                        tags: finaltags,
                                        lat: doc.data().lat, 
                                        lng: doc.data().lng,
                                        image: doc.data().image,
                                        background_image: doc.data().background_image,
                                        created: doc.data().created,
                                    });

                                }
                            }

                        });

                    });

                });
          
            });
        },

        getCategories()
        {

            db.collection('categories')
            .where("type", "==", '2')
            .get()
            .then((querySnapshot) => {

                querySnapshot.forEach((doc) => {

                    this.categories.push({
                    id: doc.id,
                    name: doc.data().name,
                    });

                })
            });
        },

        getOfferType()
        {

            db.collection('offers').get().then((querySnapshot) => {

                querySnapshot.forEach((docc) => {

                    docc.data().feature.forEach((offers) => {
                        this.offerTypes.push(offers);
                    });

                    docc.data().offers.forEach((offers) => {
                    this.offers1.push(offers);
                    });

                    docc.data().tag.forEach((tags) => {
                        this.amenities.push(tags);
                    });
        
                this.offerTypes = Array.from(new Set(this.offerTypes));
                this.offers1 = Array.from(new Set(this.offers1));
                this.amenities = Array.from(new Set(this.amenities));    
                
                });
            });
        },

        getCompanies()
        {

             /*this.markers =[ 
                { position:{lat: 53.462118, lng: -2.249097, lng1: -2.249097 }},
                { position: { lat: 53.464144, lng: -2.249828, lng1: -2.249097 }} 
              ]*/

        this.companies =[]; 

        db.collection("companies")
        .get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {

                var name = doc.data().name.toLowerCase();
                var country = doc.data().country.toLowerCase();
                var location = doc.data().location.toLowerCase();

                if(this.$route.query.search){
                    this.name = this.$route.query.search;
                    var st = this.$route.query.search.toLowerCase();
                }
                    
                db.collection('offers').where("company", "==", doc.id).get().then((querySnapshot) => {

                    this.offersType = [];
                    this.offers = [];
                    this.tags2 = [];

                    querySnapshot.forEach((docc) => {

                        docc.data().feature.forEach((offersType) => {
                            this.offers.push(offersType);
                        });

                        docc.data().offers.forEach((offers) => {
                            this.offers.push(offers);
                        });

                        docc.data().tag.forEach((tags) => {
                        this.tags2.push(tags);
                    });
    
                    this.offers = Array.from(new Set(this.offers));
                    this.tags2 = Array.from(new Set(this.tags2));
                    
                    });
                                        
                const finaloffers = this.offers;
                const finaltags = this.tags2;

                    db.collection('categories').doc(doc.data().category).get().then((res) => {

                        if (st) { 
            
                            //  Search by Name, Country, Location
                            if(name.indexOf(st) > -1 || country.indexOf(st) > -1 || location.indexOf(st) > -1){
                                
                                this.companies.push({
                                id: doc.id,
                                category: res.data().name,
                                name: doc.data().name,
                                offers: finaloffers,
                                tags: finaltags,
                                lat: doc.data().lat, 
                                lng: doc.data().lng,
                                image: doc.data().image,
                                background_image: doc.data().background_image,
                                created: doc.data().created,
                                });
                            }
            
                        } else {
            
                            this.companies.push({
                            id: doc.id,
                            category: res.data().name,
                            name: doc.data().name,
                            offers: finaloffers,
                            tags: finaltags,
                            lat: doc.data().lat, 
                            lng: doc.data().lng,
                            image: doc.data().image,
                            background_image: doc.data().background_image,
                            created: doc.data().created,
                            });
            
                        }
            
                    });    
                });
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        }
    }
}




</script>

 
<style>
.search-listing {
    background: #FFFFFF;
}
section.shop_page.search-listing h3 a {
    font-size: 18px;
    position: relative;
    display: block;
}
.scroll_filters a {
    color: #000 !important;
}
.scroll_filters ul {
    list-style:none;
        margin-top: 20px;
    padding-left:0;
}
.form-group {
    margin-bottom: 0;
}
form.filter_form,div#widget-body-3 {
    margin-top: 20px;
}
.scroll_filters{
        position: relative;
}
.package {
    box-shadow: 0 0 25px 0px #f0f0f0;
}
.sidebar-wrapper .widget-title a:before {
    position: absolute;
    content: "\f077";
    right: 0;
    font-family: 'Font Awesome 5 free';
}
.cat-list li a {
    font-weight: 400;
    color: #2c2c2c !important;
}
.cat-list li {
    margin-bottom: 10px;
}

.widget .widget-title {
    font-size: 18px;
    margin-bottom: 20px;
}
.widget {
    margin-bottom: 40px;
}
.sidebar-wrapper .form-group label {
    display: block;
    margin-bottom: 12px;
}
.sidebar-wrapper .form-group input[type="checkbox"] {
    float: right;
    zoom: 1.3;
}
.search-listing {
    background: #FFFFFF;
    border-top: 1px solid #f3f3f3;
    margin: 92px 0 0;
}
.search-listing-right {
    padding: 0 30px 30px !IMPORTANT;
}
.top_filter {
    padding: 20px 0 0;
}
.shop_page.search-listing input[type="reset"] {
background: #03e1bc;
color: #fff;
font-size:larger;
}

.gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:500px;
}
.mapouter{
    position:relative;
    text-align:right;
    height:500px;
    width:370px;
}

@media only screen and (min-width:1024px){

.sidebar-wrapper {
    background: #ffffff;
    padding: 0px;
    position: sticky;
    top: 0px;
    height: 100vh;
    overflow-y: auto;
    border-right: 1px solid #f1f1f1;
}
}

  </style>
