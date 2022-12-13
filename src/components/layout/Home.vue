<template>
    <div>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
import Header from './home/header';
//import Main from './home/main';
import Footer from './home/footer';

export default {
    components:{
        'Header':Header,
        //'Main':Main,
        'Footer':Footer
    },
    data(){
        return {
            component:'Header'
        }
    }
}
</script>

<style>
 
</style>