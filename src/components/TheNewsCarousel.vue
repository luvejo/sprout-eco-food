<template>
  <div class="carousel">
    <news-standard-card
      ref="0"
      class="card card--highlighted"
      :class="{ 'card--visible': visibleCard === 0 }"
      v-bind="standardCard"
    />

    <news-coupon-card
      ref="1"
      class="card"
      :class="{ 'card--visible': visibleCard === 1 }"
      v-bind="couponCard"
    />
    <div class="carousel__left-btn" @click="prev"></div>
    <div class="carousel__right-btn" @click="prev"></div>
  </div>
  <div class="carousel-nav">
    <button
      class="carousel-nav__btn"
      :class="{ 'carousel-nav__btn--active': visibleCard === 0 }"
      @click="goTo(0)"
    ></button>
    <button
      class="carousel-nav__btn"
      :class="{ 'carousel-nav__btn--active': visibleCard === 1 }"
      @click="goTo(1)"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import NewsCouponCard from '@/components/NewsCouponCard.vue'
import NewsStandardCard from '@/components/NewsStandardCard.vue'
import { NewsCardsObject } from '@/types'

export default defineComponent({
  name: 'TheNewsCarousel',
  components: {
    NewsCouponCard,
    NewsStandardCard,
  },
  props: {
    news: {
      type: Object as PropType<NewsCardsObject>,
      required: true,
    },
  },
  data () {
    return {
      standardCard: this.news.standard,
      couponCard: this.news.coupon,
      visibleCard: 0,
    }
  },
  methods: {
    getNewsCard (type: string) {
      if (type === 'coupon') {
        return 'NewsCouponCard'
      }
      return 'NewsStandardCard'
    },
    goTo (index: number) {
      this.visibleCard = index
    },
    prev () {
      this.visibleCard = Math.abs((this.visibleCard - 1) % 2)
    },
    next () {
      this.visibleCard = Math.abs((this.visibleCard + 1) % 2)
    },
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/vars' as vars;

.carousel {
  position: relative;
  display: flex;

  &__left-btn,
  &__right-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    z-index: 1;
  }

  &__left-btn {
    left: 0;
  }

  &__right-btn {
    right: 0;
  }
}

.card {
  border-radius: vars.$border-radius-big;
  min-height: 240px;
  display: none;
  user-select: none;
  width: 100%;

  &--highlighted {
    flex-grow: 1;
  }

  &--visible {
    display: flex;
  }
}

.carousel-nav {
  display: flex;
  justify-content: center;
  margin-top: 12px;

  &__btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #8d8d8d;
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: 8px;
    }

    &--active {
      background-color: vars.$black;
    }
  }
}

/*------------------------------------------------
  MEDIA QUERIES
------------------------------------------------*/
@media screen and (min-width: 640px) {
  .card {
    width: 33%;
    display: flex;

    &:not(:last-of-type) {
      margin-right: 8px;
    }
  }

  .carousel-nav {
    display: none;
  }
}

@media screen and (min-width: 780px) {
  .card {
    min-height: 240px;
  }
}
</style>
