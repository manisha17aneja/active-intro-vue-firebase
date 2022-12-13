<template>

<body>

<!-- preloader -->
<Loader> </Loader>
<!-- preloader -->


    <div class="frame">
  <div class="site-wrapper overflow-hidden">

     <!-- Header Section -->
    <Front-Header> </Front-Header>

<div id="blog">
    <!-- Main Start-->
    <section class="hero_section height-half text-center">
    <img src="./../assets/front/image/main_banner.jpg" style="position: absolute;">    
  <div class="container">
  <h1 data-aos="fade-right" data-aos-duration="1200"> <span>{{ categories.name }}</span></h1>
  <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">{{ categories.description
 }}</p>
  <!--<a href="#" class="btn btn-primary" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">Explore Free</a>--->
  </div>
    </section>




    <!-- Main section  -->
    <div class="blog-wrapper private-blog-section">
  <div
    class="site-content container"
    id="introactive-blog"
    style="transform: none"
  >
    <!--<div class="row justify-content-center">
      <div class="col-xl-10">
        <div class="section-title text-center mb-10 mb-lg-10 px-lg-3">
          <h2 class="title gr-text-4">Read Our Latest Blog & Post!</h2>
        </div>
      </div>
    </div>-->
    <div class="row" style="transform: none">
      <div class="col-lg-12">
        <div class="content-area">
          <main class="site-main">
            <div class="row posts-wrapper">



              <div class="col-md-4 grid-item" v-for="item in items" :key="item._id">
                <article
                  id="post-43953"
                  class="post post-43953 type-post status-publish format-standard has-post-thumbnail sticky hentry category-app"
                >
                  <div
                    class="entry-media with-placeholder"
                    style="padding-bottom: 61.904761904762%"
                  >
                     <router-link :to="{ path: '/single-blog/'+ item.id}">
                      <img class="lazyautosizes lazyloaded" data-srcset="item.image" 
                      data-sizes="auto" alt="app tricks" title="item.title" sizes="405px" 
                      :src="item.image">
                    </router-link>
                  </div>


                  <div class="entry-wrapper">
                    <header class="entry-header">
                      <div class="entry-category">
                      <router-link :to="{ path: '/blog-category/'+ item.category_id}" style="background-color: ;" rel="category">{{ item.category }}</router-link>
                      </div>
                      <div class="entry-author child-theme-post-author">
                        <div class="author-info">
                        <span class="entry-date"><time datetime="2020-11-26T09:00:27+04:00">{{ item.created | formatDate }}</time></span>
                   <!--<a class="author-name" href="#">- By Charlotte Bright</a> -->
                    
                        </div>
                      </div>
                      <div class="entry-meta"></div>
                    </header>
                    <h3 class="article-title">
                    <router-link :to="{ path: '/single-blog/'+ item.id}">{{ item.title }}</router-link>
                    </h3>
                    <div class="entry-excerpt">
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </article>
              </div>

             
            </div>


            <!--<nav
              class="navigation posts-navigation"
              role="navigation"
              aria-label="Posts"
              style="display: none"
            >
              <h2 class="screen-reader-text">Posts navigation</h2>
              <div class="nav-links">
                <div class="nav-previous">
                  <a href="#"
                    >Older posts</a
                  >
                </div>
              </div>
            </nav>
            <div class="infinite-scroll-status">
              <div class="infinite-scroll-request"></div>
            </div>

            <div class="infinite-scroll-action" style="text-align: center">
              <div class="bottom-button">
                <button class="infinite-scroll-button button btn btn-primary">
                  Load more
                </button>
                <button class="blog-filter-btn btn btn-primary">
                  Show Deals
                </button>
              </div>
            </div>-->
            
          </main>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Main section  -->

    </div>


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
          items: [],
          category: '',
          categories:{},
      }
  },

  created: function()
  {
      this.fetchItems();
  },

 
methods: {
      fetchItems()
      {

        var category = this.$route.params.id;

        db.collection('categories').doc(category).get().then((doc) => {
                this.categories = doc.data();
        });


        db.collection("blogs")
        .where("category", "==", category)
        //.orderBy("created", "desc")
        .get()
        .then((querySnapshot) => {
          //console.log('hhhh');
          querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            db.collection('categories').doc(doc.data().category).get().then((res) => {

                this.category = res.data().name;

                this.items.push({
                  id: doc.id,
                  category: this.category,
                  category_id: doc.data().category,
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

      }
  }
}


</script>

