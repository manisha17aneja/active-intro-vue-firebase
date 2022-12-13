<template>
  
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

        <!-- preloader -->
    <div class="preloader">
        <div id="mdiv" class="status">
            <div class="cdiv">
                <div class="rot"></div>
                <h4 class="lh">Loading...</h4>
            </div>
        </div>
    </div>
    <!-- preloader -->
    
    </template>

<script>

import $ from 'jquery'

export default {
  components:{
   
},
mounted() {

    $('.status').fadeOut(); // will first fade out the loading animation 
    $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});


}
}


</script>

<style>

/* preloader */

@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");
* {
  margin: 0px;
  padding: 0px;
}
#mdiv {
  background-color: rgba(0, 0, 0, 0.06);
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
  font-family: 'Poppins';
}
.cdiv {
  width: 15rem;
  height: 15rem;
}
.rot {
  position: absolute;
  width: 15rem;
  height: 15rem;
  border-right: 0.3rem solid #000;
  border-radius: 50%;
  animation: pre 2s linear infinite;
}
@keyframes pre {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.lh {
  color: #000;
  font-family: 'Poppins';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1000;
}
/* #status {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  background-image: url(https://raw.githubusercontent.com/niklausgerber/PreLoadMe/master/img/status.gif);
  background-repeat: no-repeat;
  background-position: center;
  margin: -100px 0 0 -100px;
} */

</style>