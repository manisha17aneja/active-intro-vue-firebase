<template>

<body>
<!-- preloader -->
<Loader> </Loader>
<!-- preloader -->

    <div class="frame">
  <div class="site-wrapper overflow-hidden">

     <!-- Header Section -->
    <Front-Header> </Front-Header>

 

    <!-- Main Start-->
    <div id="singleBlog">
    <section class="blog-standard-area blog-details-area pt-100 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="blog-standard mt-15">
                        <div class="blog-item">
                            <div class="blog-thumb">
                                <img :src="item.image" :alt="item.title">
                            </div>
                            <div class="blog-content white-bg ">
                                <div class="entry-category">
                                <router-link :to="{ path: '/blog-category/'+ item.category_id}" style="background-color: ;" rel="category">{{  item.category_name }}</router-link>
                                </div>
                                <div class="item d-sm-flex justify-content-between">
                                    <div class="blog-date">
                                        <ul style="" class="pl-0">
                                            <!--<li><i class="fal fa-user"></i> Daniele Custer</li>-->
                                            <li><i class="fa fa-calendar" aria-hidden="true"></i> {{item.created | formatDate }}</li>
                                        </ul>
                                    </div>
                                    <!--<div class="blog-social">
                                        <ul>
                                            <li> <span>Share Now</span></li>
                                            <li> <a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li> <a href="#"><i class="fab fa-google"></i></a></li>
                                        </ul>
                                    </div>-->
                                </div>
                                <h3 class="title">{{item.title}}</h3>
                                <!--<p>{{item.description}}</p>-->
                                <div v-html="item.description"></div>


                            </div>
                        </div>
                        <!--<div class="blog-quote ">
                            <p>Avoids pleasure itself, because it is pleasure, but because those  who do not know how to pursue pleasure rationally encounter con sequences that are extremely painful again anyone</p>
                            <span>Tony R. Francois</span>
                        </div>
                        <div class="blog-sharing pt-40 d-block d-sm-flex justify-content-between">
                            <div class="blog-tag">   
                                <ul class="pl-0">
                                    <li><span>Popular Tag : </span></li>
                                    <li><a href="#">IT Services,</a></li>
                                    <li><a href="#">Technology,</a></li>
                                    <li><a href="#">Services</a></li>
                                </ul>
                            </div>
                        </div>--->
                        
                        
                        
                    </div>
                </div>

                <div class="col-lg-4 col-md-7 col-sm-9">
                    <div class="blog-sidebar mt-15">
                        
                        <section id="widget_tptn_pop-2" class="widget-odd widget-first widget-1 top_posts_widget widget tptn_posts_list_widget">
                        
                        <h5 class="widget-title">Related Blogs</h5>
                        <div class="tptn_posts  tptn_posts_widget tptn_posts_widget2">
                          <ul>
                            <li v-for="related in relatedBlogs" :key="related._id">
                              <a v-bind:href="'/single-blog/' + related.id" class="tptn_link"><img width="250" height="250" :src="related.image" class="tptn_thumb tptn_featured" alt="Find the code &amp; WIN 2021 Ts &amp; Cs" title="Find the code &amp; WIN 2021 Ts &amp; Cs" srcset=""></a>
                              
                              <span class="tptn_after_thumb">
                              <a v-bind:href="'/single-blog/' + related.id" class="tptn_link">
                              <span class="tptn_title">{{related.title}}
                              </span> 
                              </a>
                              
                              </span>
                            </li>
                          </ul>
                           <div class="tptn_clear"></div>
                           </div>
                        </section>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

    <!-- Main End-->
    
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

import { db } from './../main'

export default {
   components:{
    'Front-Header':Header,
    'Front-Footer':Footer,
    'Loader':Loader,
  },

  data(){
      return{
          relatedBlogs: [],
          item: [],
          category: '',
      }
  },

  created: function()
  {
      this.fetchItems();
  },

 
methods: {
      fetchItems()
      {
      
        var id = this.$route.params.id;
        //var category_id;

        db.collection('blogs').doc(id).get().then((doc) => {

            window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

            this.item = doc.data();
            db.collection('categories').doc(doc.data().category).get().then((res) => {
                this.item.category_name = res.data().name;
                this.item.category_id = res.id;
               // console.log(this.item.category);
            });


            db.collection("blogs")
            //.orderBy("created", "desc")
            .where("category", "==", doc.data().category)
            .limit(10)
            .get()
            .then((querySnapshot) => {
                
            querySnapshot.forEach((doc) => {

                console.log(doc.id, " => ", doc.data());
                
                db.collection('categories').doc(doc.data().category).get().then((res) => {

                    this.category = res.data().name;

                    this.relatedBlogs.push({
                    id: doc.id,
                    category: this.category,
                    title: doc.data().title,
                    description: doc.data().description,
                    image: doc.data().image,
                    created: doc.data().created,
                    });

                });
                
            });
            })
            .catch((error) => {
            console.log("Error getting documents: ", error);
            });

            
        });
       
      }
  }
}
</script>

