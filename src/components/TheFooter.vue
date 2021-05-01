<template>
  <footer class="footer">
    <div class="footer__copyright-col">
      <div class="footer__logo">SPROUT</div>
      <p class="footer__company">
        Eco Food Market <br />
        SPROUT Good Ltd.
      </p>
      <p class="footer__copyright">2021 © All rights reserved</p>
    </div>

    <div class="footer__link-col">
      <div class="footer__col-title">Company</div>
      <router-link class="footer__link" to="/about">About</router-link>
      <router-link class="footer__link" to="/store">Store</router-link>
      <router-link class="footer__link" to="/faq">FAQ</router-link>
    </div>

    <div class="footer__link-col">
      <div class="footer__col-title">Service</div>
      <router-link class="footer__link" to="/delivery">Delivery</router-link>
      <router-link class="footer__link" to="/payment">Payment</router-link>
      <router-link class="footer__link" to="/contacts">Contacts</router-link>
    </div>

    <div class="footer__link-col">
      <div class="footer__col-title">Follow us</div>
      <router-link class="footer__link" to="/instagram">Instagram</router-link>
      <router-link class="footer__link" to="/facebook">Facebook</router-link>
      <router-link class="footer__link" to="/twitter">Twitter</router-link>
    </div>

    <div class="footer__subscribe-col">
      <div class="footer__col-title">Follow us</div>
      <base-text-input
        placeholder="Your email"
        :icon="{ name: '', black: true }"
      />
      <router-link class="footer__link footer__link--legal" to="/tyc"
        >Terms & Conditions</router-link
      >
      <router-link class="footer__link footer__link--legal" to="/tyc"
        >Privacy Policy</router-link
      >
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<style scoped></style>
