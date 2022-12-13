<template>
  <body>
    <!-- preloader -->
    <Loader> </Loader>
    <!-- preloader -->

    <div class="site-wrapper overflow-hidden">
      <Front-Header> </Front-Header>

      <!--main-->

      <section class="content-sec product-checkout" v-if="item">
        <div class="product-checkout-wrraper">
          <div class="container holder">
            <div class="row content-sec-area">
              <div
                data-aos="fade-left"
                class="col-md-12 col-lg-6 order-1 left-side"
              >
                <div class="content-desc">
                  <h1>{{ item.name }}</h1>

                  <!--<div class="review-links">
                  <img data-src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11068-5.png" alt="rating" style="padding-bottom: 10px;" class=" lazyloaded" title="TripAdvisor Traveler Rating 4.0 out of 5 Based on 23 Reviews" src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-11068-5.png">
                  <div class="review-col">
                     <span class="reviews">Based on <b>23</b> reviews</span>
                  </div>
                  <ul class="list-inline links">
                     <li><a id="trip-advisor-review" href="#read_review_widget" class="inline read_views  cboxElement" style=""> Read Reviews</a></li>
                  </ul>
               </div>--->

                  <div class="bottom-content">
                    {{ item.about }}
                    <div class="merchant-info row p-0">
                      <div class="col-md-4 col-lg-5 d-flex align-items-start">
                        <span class="icon" style="margin-right:10px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                          >
                            <path
                              fill="#606D7A"
                              d="M4.642 0L.49 1.768c-.295.126-.489.43-.489.768v11.583c0 .585.555.985 1.066.768l3.625-1.542L9.358 15l4.153-1.768c.295-.126.489-.43.489-.768V.881c0-.585-.555-.985-1.066-.768L9.309 1.655 4.642 0zm.802 2.028l3.112 1.104v9.84l-3.112-1.104v-9.84zm-1.555.074v9.802l-2.333.994V3.096l2.333-.994zm8.555 0v9.802l-2.333.994V3.096l2.333-.994z"
                            ></path>
                          </svg>
                        </span>
                        <span class="text"> {{ item.location }} </span>
                      </div>
                      <div class="col-md-4 col-lg-6 d-flex align-items-start">
                        <span class="icon" style="margin-right:10px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#606D7A"
                              d="M8 0C3.591 0 0 3.591 0 8s3.591 8 8 8 8-3.591 8-8-3.591-8-8-8zm0 1.6c.199 0 .416.081.694.345.277.264.578.707.837 1.29.197.443.359.984.497 1.565H5.972c.138-.581.3-1.122.497-1.566.259-.582.56-1.025.837-1.289.278-.264.495-.345.694-.345zm-2.84.667c-.051.105-.105.208-.154.317-.29.651-.514 1.405-.683 2.216H2.458c.629-1.09 1.57-1.973 2.703-2.533zm5.68 0c1.132.56 2.073 1.443 2.702 2.533h-1.865c-.17-.811-.394-1.565-.683-2.216-.05-.11-.103-.212-.155-.317zM1.81 6.4h2.268C4.03 6.918 4 7.45 4 8s.029 1.082.078 1.6H1.81C1.678 9.088 1.6 8.554 1.6 8s.078-1.088.21-1.6zm3.884 0h4.612c.056.514.094 1.045.094 1.6 0 .555-.038 1.086-.094 1.6H5.694C5.638 9.086 5.6 8.555 5.6 8c0-.555.038-1.086.094-1.6zm6.228 0h2.269c.131.512.209 1.046.209 1.6s-.078 1.088-.21 1.6h-2.268C11.97 9.082 12 8.55 12 8s-.029-1.082-.078-1.6zm-9.464 4.8h1.865c.17.811.394 1.565.683 2.216.05.11.103.212.155.317-1.133-.56-2.074-1.443-2.703-2.533zm3.514 0h4.056c-.138.581-.3 1.122-.497 1.566-.259.582-.56 1.025-.837 1.289-.278.264-.495.345-.694.345-.199 0-.416-.081-.694-.345-.277-.264-.578-.707-.837-1.29-.197-.443-.359-.984-.497-1.565zm5.705 0h1.865c-.629 1.09-1.57 1.973-2.703 2.533.052-.105.106-.208.155-.317.29-.651.514-1.405.683-2.216z"
                            ></path>
                          </svg>
                        </span>
                        <span class="text">
                          <a
                            target="_blank"
                            href="http://www.pizzaexpress.ae"
                            >{{ item.website }}</a
                          >
                        </span>
                      </div>
                      <div class="col-md-4 col-lg-5 d-flex align-items-start">
                        <span class="icon" style="margin-right:10px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="15"
                            viewBox="0 0 11 15"
                          >
                            <path
                              fill="#606D7A"
                              d="M5.5 0C2.467 0 0 2.353 0 5.245c0 3.362 4.693 8.823 4.893 9.053L5.5 15l.607-.702c.2-.23 4.893-5.691 4.893-9.053C11 2.353 8.533 0 5.5 0zm0 1.5c2.165 0 3.927 1.68 3.927 3.745 0 2.029-2.45 5.518-3.927 7.366-1.477-1.847-3.927-5.334-3.927-7.366C1.573 3.181 3.335 1.5 5.5 1.5zm0 1.867c-1.086 0-1.966.84-1.966 1.875 0 1.036.88 1.875 1.966 1.875 1.086 0 1.966-.84 1.966-1.875 0-1.035-.88-1.875-1.966-1.875z"
                            ></path>
                          </svg>
                        </span>
                        <span class="text">{{ item.country }}</span>
                      </div>
                      <div class="col-md-4 col-lg-6 d-flex align-items-start">
                        <span class="icon" style="margin-right:10px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#606D7A"
                              d="M15.132 11.1c-.56-.013-1.265-.046-1.71-.124-.482-.085-1.062-.25-1.47-.378-.32-.1-.668-.011-.906.225l-1.97 1.96C7.714 12.064 6.623 11.228 5.7 10.3c-.93-.923-1.765-2.014-2.482-3.376l1.959-1.971c.236-.237.324-.586.225-.906-.126-.407-.293-.987-.377-1.468-.08-.446-.111-1.15-.125-1.71C4.888.383 4.493 0 4.009 0H.889C.499 0 0 .292 0 .889c0 4.035 1.636 7.888 4.414 10.697C7.224 14.364 11.076 16 15.111 16c.597 0 .889-.5.889-.889v-3.12c0-.484-.384-.879-.868-.89z"
                            ></path>
                          </svg>
                        </span>
                        <span class="text">{{ item.phone_no }} </span>
                      </div>
                    </div>
                  </div>
                  <dl class="info-list" style="display: none;">
                    <div>
                      <dt>Location</dt>
                    </div>
                    <dd>Al Safa Centre (Park-n-Shop)</dd>
                    <dt>Area</dt>
                    <dd>Al Safa</dd>
                    <dt>Phone</dt>
                    <dd class="number">+971 4 394 5616</dd>
                    <dt>Website</dt>
                    <dd>
                      <a target="_blank" href="http://www.pizzaexpress.ae"
                        >http://www.pizzaexpress.ae</a
                      >
                    </dd>
                  </dl>
                  <!--<a href="#" style="margin-top:30px;" class="btn btn-primary aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">Intro Insider</a>--->
                </div>
              </div>

              <div data-aos="fade-right" class="col-md-12 col-lg-6 order-lg-1">
                <div class="cover-img-wrap">
                  <div class="cover-img">
                    <img
                      v-if="item.background_image"
                      v-bind:src="item.background_image"
                      alt="tarun"
                      class=" lazyloaded main-img"
                    />
                    <img
                      v-else
                      src="./../assets/front/image/profile_img2.jpg"
                      alt="tarun"
                      class=" lazyloaded main-img"
                    />
                  </div>
                  <div class="merchant-logo">
                    <img
                      v-if="item.image"
                      v-bind:src="item.image"
                      alt="tarun"
                      class=" lazyloaded"
                    />
                    <img
                      v-else
                      src="./../assets/front/image/profile_img2.jpg"
                      alt="tarun"
                      class=" lazyloaded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="all-offers-section">
        <div id="contactFeature" class="contactFeature">
          <div class="py-5 service-11">
            <div class="container">
              <div class="row why-chose-us-row">
                <div class="col-md-7 pt-13" style="">
                  <!--<h5 class="mb-10">Offers available in
</h5>-->
                  <div class="cover-img">
                    <img
                      alt="PizzaExpress Dubai"
                      class=" lazyloaded main-img"
                      data-src="subscription.image"
                      :src="subscription.image"
                    />
                  </div>
                  <p class="mt-10 bottom__heading">{{ subscription.title }}</p>
                  <p class="mt-10 bottom__disc">
                    {{ subscription.description }}
                  </p>
                </div>
                <div class="col-md-5">
                  <div class="row pt-13">
                    <div
                      id="content"
                      class="col-md-12 wrap-service11-box reusable"
                      v-for="offer in offers"
                      :key="offer.id"
                    >
                      <router-link :to="{ path: '/offer-detail/' + offer.id }">
                        <div class="card card-shadow border-0 mb-4">
                          <div class="p-4" style="">
                            <div class="icon-space">
                              <div
                                class="icon-round text-center d-inline-block rounded-circle bg-success-gradiant"
                              >
                                <img
                                  alt="PizzaExpress Dubai"
                                  class="lazyloaded"
                                  :data-src="offer.image"
                                  :src="offer.image"
                                />

                                <div v-if="count > 0">
                                  <svg
                                    class="lock-svg-icon"
                                    width="461.4px"
                                    height="461.4px"
                                    enable-background="new 0 0 461.404 461.404"
                                    version="1.1"
                                    viewBox="0 0 461.404 461.404"
                                    xml:space="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="m368.15 195.83h-4.202l8.199-59.771c4.343-31.699-3.909-63.19-23.258-88.674-19.339-25.484-47.442-41.916-79.137-46.26-40.15-5.505-80.041 9.477-106.68 40.092-8.185 9.402-7.19 23.651 2.202 31.837 9.412 8.175 23.661 7.196 31.848-2.205 16.604-19.092 41.466-28.438 66.506-25.013 40.762 5.592 69.402 43.316 63.809 84.094l-9.04 65.894h-225.16c-9.59 0-17.36 7.771-17.36 17.357v230.87c0 9.581 7.77 17.356 17.36 17.356h274.92c9.589 0 17.359-7.77 17.359-17.356v-230.86c-5e-3 -9.586-7.775-17.356-17.365-17.356zm-117.02 172.97v64.199h-42.386v-65.945c-3.844-4.805-6.153-10.876-6.153-17.51 0-15.517 12.585-28.099 28.108-28.099 15.518 0 28.104 12.586 28.104 28.099-1e-3 7.46-2.934 14.222-7.673 19.256z"
                                    />
                                  </svg>
                                </div>
                                <div v-else>
                                  <svg
                                    class="lock-svg-icon"
                                    enable-background="new 0 0 512 512"
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    xml:space="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="m437.33 192h-32v-42.667c0-82.343-66.989-149.33-149.33-149.33s-149.33 66.99-149.33 149.33v42.667h-32c-5.896 0-10.667 4.771-10.667 10.667v266.67c0 23.531 19.135 42.666 42.667 42.666h298.67c23.531 0 42.666-19.135 42.666-42.667v-266.67c0-5.896-4.771-10.667-10.667-10.667zm-149.4 222.82c0.333 3.01-0.635 6.031-2.656 8.292-2.021 2.26-4.917 3.552-7.948 3.552h-42.667c-3.031 0-5.927-1.292-7.948-3.552s-2.99-5.281-2.656-8.292l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313 0-23.531 19.135-42.667 42.667-42.667s42.667 19.135 42.667 42.667c0 13.792-6.531 26.365-17.458 34.313l6.728 60.51zm53.395-222.82h-170.67v-42.667c0-47.052 38.281-85.333 85.333-85.333s85.333 38.281 85.333 85.333v42.667z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="entry-category">
                                <a
                                  href="#"
                                  rel="category"
                                  tabindex="0"
                                  v-if="offer.is_reuseable"
                                  >Reusable</a
                                >
                              </div>
                              <h6 class="font-weight-medium">
                                {{ offer.title }}
                              </h6>
                              <p class="mt-3">
                                AED {{ offer.amount }} Estimated savings
                              </p>
                              <span
                                ><i
                                  class="fas fa-clock"
                                  style="margin-right: 5px"
                                ></i
                                >Valid until
                                {{ offer.valid_date | validDate }}</span
                              >
                              <div></div>
                            </div>
                          </div>
                          <ul class="offer_list2 mt-4">
                            <li v-for="tag in offer.extra_tags" :key="tag">
                              <span class="offer_text">{{ tag }}</span>
                            </li>
                          </ul>
                        </div>
                      </router-link>
                    </div>

                    <div id="content" class="col-md-12">
                      <router-link :to="{ path: '/offers/' + item.id }"
                        >See all your locked offers</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="bottom-location-section d-md-block d-none outlets-included"
      >
        <div class="container">
          <div class="row">
            <div class="locations col-12">
              <h5 class="mb-4 pb-md-2">Outlets included</h5>
              <ul class="wrapper list-unstyled p-0">
                <li
                  style=" "
                  v-for="location in item.outlets"
                  :key="location.id"
                >
                  <i class="fas fa-map-marked-alt"></i>
                  <h4 class="m-0">{{ location.address }}</h4>
                  <p class="m-0">{{ location.city }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!--main-->

      <!-- Footer section -->
      <Front-Footer> </Front-Footer>
    </div>
  </body>
</template>

<script>
import Header from "./Front-Header";
import Footer from "./Front-Footer";
import Loader from "./Loader";
import { db } from "../main";

export default {
  components: {
    "Front-Header": Header,
    "Front-Footer": Footer,
    Loader: Loader,
  },

  data() {
    return {
      companies: [],
      offers: [],
      locations: [],
      subscription: {},
      count: "",
    };
  },

  created: function() {
    this.getCompany();
    this.getCompanies();
    this.getOffers();
  },

  methods: {
    async getCompany() {
      var id = this.$route.params.id;

      await db
        .collection("companies")
        .doc(id)
        .get()
        .then(async (doc) => {
          this.item = doc.data();
          this.item.id = doc.id;

          db.collection("subscriptions")
            .doc(doc.data().subscription)
            .get()
            .then((res) => {
              this.subscription = res.data();
            });

          var uid = localStorage.getItem("userSessionId");

          if (uid != null) {
            this.query = db
              .collection("order_details")
              .where("uid", "==", uid)
              .where("subscription", "==", doc.data().subscription);
            const snapshot = await this.query.get();
            this.count = snapshot.size;
            console.log("kkk");
            console.log(this.count);
          }

          /* db.collection('locations').where("company", "==", id).get().then((querySnapshot) => {

                querySnapshot.forEach((doc) => {
                    this.locations.push({
                        id: doc.id,
                        location: doc.data().location,
                        country: doc.data().country,
                    });
                })

            })*/
        });
    },

    getOffers() {
      var id = this.$route.params.id;

      db.collection("offers")
        .where("company", "==", id)
        .limit(10)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.offers.push({
              id: doc.id,
              title: doc.data().title,
              amount: doc.data().amount,
              is_reuseable: doc.data().is_reuseable,
              tag: doc.data().tag,
              extra_tags: doc.data().extra_tags,
              valid_date: doc.data().valid_date,
              image: doc.data().image,
            });
          });
        });
    },

    getCompanies() {
      db.collection("companies")
        .get()
        .then((querySnapshot) => {
          //console.log('hhhh');
          querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());

            //db.collection('categories').doc(doc.data().category).get().then((res) => {

            //this.category = res.data().name;
            //var discountPrice = doc.data().price - doc.data().price * doc.data().discount/100;
            //var vat = discountPrice + discountPrice * doc.data().vat/100;

            this.companies.push({
              id: doc.id,
              //category: this.category,
              name: doc.data().name,
              //tag: doc.data().tag,
              //description: doc.data().description,
              image: doc.data().image,
              background_image: doc.data().background_image,
              //discount: doc.data().discount,
              //discountPrice: discountPrice,
              //vat: vat,
              created: doc.data().created,
            });

            // });
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>
