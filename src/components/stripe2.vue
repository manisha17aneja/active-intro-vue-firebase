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
    <button @click="submit">Subscribe!</button>
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
          price: 'price_1IvyPgSF16PyZdeZu0RGZkBi', // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: 'price_1IvyL6SF16PyZdeZtWUHqblW', // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: 'price_1IvyR3SF16PyZdeZDtFGwSjp', // The id of the recurring price you created in your Stripe dashboard
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