<template>
  <div>
    <stripe-element-card
      ref="elementRef"
      :pk="pulishableKey"
      locale="en"
      :amount="amount"
      @token="tokenCreated"
      @loading="loading = $event"
    />
    <button @click="submit">Pay ${{ amount / 100}}</button>
  </div>
</template>

<script>


import { StripeElementCard } from '@vue-stripe/vue-stripe';
import axios from 'axios'
//const stripe = require('stripe')('pk_test_51IvgnHSF16PyZdeZoLgno8JkwOa1asRi6losyI2Bmb0Bi9cYgoNQJiDcOR0uPN5u5dT4QfWAJhuxTQLUdAEbwdTp00jFNCyQAd');

export default {

    components:{
      StripeElementCard,
    },
    data: function() {
      this.pulishableKey = 'pk_test_51ITRnMH7OARwqCbCLC1bloHLpobVzLqirExLcUsFAbIle8t8OhB8KrBTAzTLjPOn9an6kM6WB98wuR9ulRs2jy4w00TmtbEpLz';
      return {
        loading: false,
        amount: 100,
        token: null,
        charge:null
      };
    }, 
 
    created: function()
    {

    },
    methods: {


        submit() {
           alert('ggg');
           console.log('yes');
           this.$refs.elementRef.submit();
        },

        async tokenCreated (token) {
          console.log(token);
          this.token = token;

          const data = {
            "card": token.id,
            "currency": "INR",
            "amount": 100,
            "description": "Active Intro",
        };

        console.log(data);

        axios.post("https://demo.fortecsolution.com/laravel6/api/charge", data)
        .then((response)=>{
            console.warn(response);

            this.$toasted.success('Success, Paid Successfully!', {
                icon : 'check',
                 //icon : 'error_outline'
             })

            this.$router.push('/success');
        });

         /* this.charge ={
            source: token.id,
            amount:this.amount,
            description:this.description
          }


          const charges = await stripe.charges.create({
            amount: 100,
            currency: 'usd',
            description: 'Example charge',
            source: this.token,
          });
          console.log(charges);
          this.sendTokenToServer(this.charge);
          // handle the token
          // send it to your server

          */
        },
      /*  sendTokenToServer(charge){
          console.log('ddd');
          console.log(charge);
        }*/

}

}
</script>


