<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = 'pk_test_51IvgnHSF16PyZdeZoLgno8JkwOa1asRi6losyI2Bmb0Bi9cYgoNQJiDcOR0uPN5u5dT4QfWAJhuxTQLUdAEbwdTp00jFNCyQAd';
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1IvgslSF16PyZdeZGruYQ8R3',//'some-price-id', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:8082/success',
      cancelURL: 'http://localhost:8082/cancel',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>