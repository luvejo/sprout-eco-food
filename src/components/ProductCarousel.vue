<template>
  <product-card
    v-for="product in products"
    :key="product.id"
    :attrs="product"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from './ProductCard.vue'

export default defineComponent({
  components: { ProductCard },
  name: 'ProductCarousel',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss"></style>
