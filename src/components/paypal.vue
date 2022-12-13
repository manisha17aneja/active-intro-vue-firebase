

<template>

<div id="">
<PayPal
amount="10.00"
currency="USD"
:client="credentials"
:items="myItems"
env="sandbox">
</PayPal>

</div>
 



</template>



<script>

import PayPal from 'vue-paypal-checkout'

export default {
name: 'Profile',
data () {
 return {
   credentials: {
     sandbox: 'AYdT0tFbYADX6Ti8nYOO-PMenCApnrzl7Qcy-Bplv-P8BvVufs91JcoXSD4xsGJDaPVO4XedSrL2QThI',
     production: '<production client id>'
   },
   myItems: [
     {
       "name": "hat",
       "description": "Brown hat.",
       "quantity": "1",
       "price": "5",
       "currency": "USD"
       },
       {
       "name": "handbag",
       "description": "Black handbag.",
       "quantity": "1",
       "price": "5",
       "currency": "USD"
       }
   ]
 }
},
 components: {
   PayPal
 }
}
</script> 