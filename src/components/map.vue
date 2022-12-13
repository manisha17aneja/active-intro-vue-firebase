import { Button } from "element-ui";

<template>

<body>
<!--<div class="preloader">
        <div class="loader">
            <div class="side">
                <div class="left"></div>
                <div class="right"></div>
                <div class="top"></div>
                <div class="bottom"></div>
            </div>
        </div>
        </div>-->
    <div class="frame">
  <div class="site-wrapper overflow-hidden">

     <!-- Header Section -->
    <Front-Header> </Front-Header>

    <GmapMap
  :center="center"
  :zoom="16"
  map-type-id="terrain"
  style="width: 1000px; height: 600px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
<Button @click="marker">marker</Button>
    
 

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


const home = { lat: 53.462118, lng: -2.249097 };
//const work = { lat: 53.464144, lng: -2.249828 };


export default {

     name: 'Profile',
        data() {
            return {
                markers:[],
                center:home,
            }
        },
        components:{
            'Front-Header':Header,
            'Front-Footer':Footer,
        },

        created: function(){
            this.getMap();
        },

        methods: {

         // marker(){
          //  this.markers =[ { position:home, },{ position:work } ]
          //},

          getMap()
          {
            this.markers =[ 
              { position:{lat: 53.462118, lng: -2.249097 }},
              { position: { lat: 53.464144, lng: -2.249828 }} 
            ]
          }     
           
        }
  }


</script>

