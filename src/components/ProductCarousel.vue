<template>
  <div class="carousel-container">
    <div class="carousel" v-swipe="onSwipe">
      <div class="carousel__inner" :style="innerStyles" ref="inner">
        <product-card
          v-for="product in productList"
          :key="product.id"
          v-bind="product"
        />
      </div>
    </div>
    <button
      class="btn btn-nav btn-nav--left"
      aria-label="Shift products to the left"
      @click="prev"
    >
      <base-icon name="chevron-left" />
    </button>
    <button
      class="btn btn-nav btn-nav--right"
      aria-label="Shift products to the right"
      @click="next"
    >
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
      innerStyles: {},
      navigationStep: '',
    }
  },

  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  computed: {
    inner (): InstanceType<typeof HTMLDivElement> {
      return this.$refs.inner as InstanceType<typeof HTMLDivElement>
    },
  },

  created () {
    window.addEventListener('resize', this.setNavigationStep)
  },

  mounted () {
    this.setNavigationStep()
  },

  unmounted () {
    window.removeEventListener('resize', this.setNavigationStep)
  },

  methods: {
    setNavigationStep () {
      console.log(this.inner.scrollWidth / this.products.length)
      this.navigationStep = `${this.inner.scrollWidth / this.products.length}px`
    },

    onSwipe (direction: string) {
      direction === 'left' && this.next()
      direction === 'right' && this.prev()
    },

    next () {
      this.moveLeft()

      this.afterTransition(() => {
        const product = this.productList.shift()
        product && this.productList.push(product)
        this.resetTranslate()
      })
    },

    prev () {
      this.moveRight()

      this.afterTransition(() => {
        const product = this.productList.pop()
        product && this.productList.unshift(product)
        this.resetTranslate()
      })
    },

    afterTransition (callback: () => void) {
      const listener = () => {
        callback()
        this.inner.removeEventListener('transitionend', listener)
      }
      this.inner.addEventListener('transitionend', listener)
    },

    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: 'translateX(0)',
      }
    },

    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.navigationStep})`,
      }
    },

    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.navigationStep})`,
      }
    },
  },

  watch: {
    products () {
      this.productList = this.products
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
  overflow: hidden;

  &__inner {
    white-space: nowrap;
    transition: transform 0.3s;
    transform: translateX(0);
  }
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
