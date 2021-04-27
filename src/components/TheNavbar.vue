<template>
  <nav class="navbar">
    <div class="navbar__left">
      <div class="navbar__logo">Sprout</div>
      <base-input-text icon="" />
    </div>

    <div class="navbar__right">
      <router-link class="navbar__btn" to="/about">
        <base-icon />
        About
      </router-link>
      <router-link class="navbar__btn" to="/store">
        <base-icon />
        Store
      </router-link>
      <router-link class="navbar__btn" to="/faq">
        <base-icon />
        FAQ
      </router-link>
      <button class="navbar__btn btn--white">
        <base-icon />
        Cart
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheNavbar'
})
</script>

<style lang="scss"></style>
