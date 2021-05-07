<template>
  <div class="carousel-container">
    <div class="carousel">
      <product-card
        v-for="product in productList"
        :key="product.id"
        v-bind="product"
      />
    </div>
    <button class="btn btn-nav btn-nav--left" @click="shiftLeft">
      <base-icon name="chevron-left" />
    </button>
    <button class="btn btn-nav btn-nav--right" @click="shiftRight">
      <base-icon name="chevron-right" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from './ProductCard.vue'

export default defineComponent({
  components: { ProductCard },
  name: 'ProductCarousel',
  data () {
    return {
      productList: this.products,
    }
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    shiftLeft () {
      if (this.productList) {
        const product = this.productList.shift()
        this.productList.push(product)
      }
    },
    shiftRight () {
      if (this.productList) {
        const product = this.productList.pop()
        this.productList.unshift(product)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/vars' as vars;

.carousel-container {
  padding: 0 56px;
  position: relative;
  margin-top: 20px;
}

.carousel {
  display: flex;
  overflow-x: hidden;
}

.btn-nav {
  background-color: vars.$white;
  border-radius: 50%;
  height: 44px;
  width: 44px;
  box-shadow: 0px 3px 10px rgb(218, 218, 218);
  position: absolute;
  top: 50%;

  &--left {
    left: 0%;
  }

  &--right {
    right: 0%;
  }
}

/*------------------------------------------------
  MEDIA QUERIES
------------------------------------------------*/
@media screen and (min-width: 640px) {
  .carousel-container {
    padding: 0 56px;
    position: relative;
    margin-top: 56px;
  }
}
</style>
