<template>
  <article class="card">
    <div class="percentage-ribbon">
      <span class="percentage-ribbon__label" v-for="n in 8" :key="n">
        -{{ discount }}%
      </span>
    </div>
    <div class="card__header">
      <p class="card__title">{{ title }}:</p>
      <p class="card__coupon">{{ coupon }}</p>
    </div>
    <div>
      <div class="stripes-ribbon"></div>
      <div class="label-ribbon">
        <span class="label-ribbon__label" v-for="n in 8" :key="n">
          DISCOUNT
        </span>
      </div>
    </div>
    <p class="card__description">{{ description }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewsCouponCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    coupon: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/vars' as vars;

.card {
  position: relative;
  background-color: vars.$black;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  &__title {
    font-size: 1.6rem;
    font-family: Gilroy;
    font-weight: vars.$semibold;
    color: vars.$white;
  }

  &__coupon {
    margin-top: 8px;
    font-size: 2.4rem;
    font-family: Gilroy;
    font-weight: vars.$bold;
    color: vars.$white;
  }

  &__description {
    color: vars.$dark-cream;
  }
}

.percentage-ribbon {
  position: absolute;
  height: 40px;
  width: 300px;
  right: -100px;
  top: 0px;
  background: vars.$white;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  overflow: hidden;

  &__label {
    margin-right: 8px;
    font-family: Gilroy;
    font-size: 2rem;
    font-weight: vars.$bold;
    color: vars.$red;
    user-select: none;
  }

  &::before {
    content: '';
    height: 15px;
    display: inline-block;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 38%;
    width: 30%;
    transform: rotate(45deg) translate(20px, -20px);
  }
}

.label-ribbon {
  position: absolute;
  height: 30px;
  width: 120%;
  background: vars.$red;
  transform: translate(0px, -15px) rotate(6deg);
  left: -20px;
  display: flex;
  align-items: center;
  overflow: hidden;

  &__label {
    margin-right: 8px;
    font-family: Gilroy;
    font-size: 1.4rem;
    font-weight: vars.$bold;
    color: vars.$white;
    user-select: none;
  }

  &::before {
    content: '';
    height: 15px;
    display: inline-block;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 12%;
    width: 50%;
    transform: rotate(-45deg) translate(-20px, -20px);
  }

  &::after {
    content: '';
    height: 8px;
    display: inline-block;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 18%;
    width: 50%;
    transform: rotate(-45deg) translate(-20px, -20px);
  }
}

.stripes-ribbon {
  position: absolute;
  height: 30px;
  width: 120%;
  background: vars.$red;
  transform: translate(0px, -15px) rotate(-6deg);
  left: -20px;
  background-color: #ffffff;
  opacity: 0.4;
  background: repeating-linear-gradient(
    -45deg,
    vars.$red,
    vars.$red 50px,
    #ffffff 50px,
    #ffffff 100px
  );
}

/*----------------------------------------------
  MEDIA QUERIES
-----------------------------------------------*/
@media screen and (min-width: 780px) {
  .card {
    padding: 40px;
    padding-top: 0px;
    align-items: center;

    &__header {
      padding-top: 80px;
    }

    &__title {
      font-size: 1.8rem;
      font-family: Gilroy;
      font-weight: vars.$semibold;
      color: vars.$white;
    }

    &__coupon {
      margin-top: 24px;
      font-size: 4rem;
      font-family: Gilroy;
      font-weight: vars.$bold;
      color: vars.$white;
    }

    &__description {
      color: vars.$dark-cream;
    }
  }
}
</style>
