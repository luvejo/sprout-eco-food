<template>
  <article class="product-card">
    <div class="product-card__image-wrapper">
      <img :src="imageURL" :alt="` ${name} image`" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductCard',
  props: {
    imageURL: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss"></style>
