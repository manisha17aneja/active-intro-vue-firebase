<template>
    <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
  </div>
</template>

<script>
import Header from './admin/header';
import Main from './admin/main';
import Footer from './admin/footer';

export default {
    components:{
        'Header':Header,
        'Main':Main,
        'Footer':Footer
    }
}
</script>

<style>

</style>