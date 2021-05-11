<template>
  <div class="content-max-width">
  <div class="home">
    <!-- News Carousel -->
    <the-news-carousel />

    <!-- Section: Discounts -->
    <section class="section">
        <div class="section__title-container">
          <h2 class="section__title">
            <base-icon
              class="section__title-icon section__title-icon--desktop"
              name="tag"
              :size="40"
            />
            <base-icon
              class="section__title-icon section__title-icon--mobile"
              name="tag"
              :size="28"
            />
          Discounted goods
        </h2>
          <router-link to="/catalog/discounted" class="section__link">
          View all
            <base-icon name="chevron-right" class="section__link-icon" />
        </router-link>
      </div>

        <product-carousel :products="discountedGoods" />
    </section>

    <!-- Section: Recipes -->
      <the-section-recipes />

    <!-- Section: Bonus Program -->
    <section class="section">
        <div class="section__title-container">
          <h2 class="section__title">
            <base-icon
              class="section__title-icon section__title-icon--desktop"
              name="award"
              :size="40"
            />
            <base-icon
              class="section__title-icon section__title-icon--mobile"
              name="award"
              :size="28"
            />
          Bonus program
        </h2>
      </div>

      <div class="section__content">
        <bonus-level-card />
        <div class="bonus-sign-up-card">
          <p class="bonus-sign-up-card__title">
            Accumulative system of discounts for regular costumers!
          </p>
          <p class="bonus-sign-up-card__description">
            Our online store has an accumulation system of discounts for regular
            costumers. Sign up and earn discount levels as your total purchases
            increase.
          </p>
          <button class="btn btn--black btn--big">Sign up</button>
        </div>
      </div>
    </section>

    <!-- Section:  New Additions -->
    <section class="section">
        <div class="section__title-container">
          <h2 class="section__title">
            <base-icon
              class="section__title-icon section__title-icon--desktop"
              name="package"
              :size="40"
            />
            <base-icon
              class="section__title-icon section__title-icon--mobile"
              name="package"
              :size="28"
            />
          New additions
        </h2>
          <router-link to="/new-additions" class="section__link">
          View all
          <base-icon name="chevron-right" />
        </router-link>
      </div>

        <product-carousel :products="newAdditions" />
    </section>

    <!-- Section:  Logistics -->
      <the-section-logistics />
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import BonusLevelCard from '@/components/BonusLevelCard.vue'
import TheNewsCarousel from '@/components/TheNewsCarousel.vue'
import TheSectionRecipes from '@/components/TheSectionRecipes.vue'
import TheSectionLogistics from '@/components/TheSectionLogistics.vue'
import data from '@/data'

export default defineComponent({
  name: 'Home',
  components: {
    ProductCarousel,
    BonusLevelCard,
    TheNewsCarousel,
    TheSectionRecipes,
    TheSectionLogistics,
  },
  data () {
    return {
      discountedGoods: data.discountedGoods,
      newAdditions: data.newAdditions,
    }
  },
})
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.section {
  margin-top: 52px;

  &__title-container {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    display: flex;
    font-size: 2.4rem;
    align-items: center;
    font-weight: vars.$bold;
    font-family: Gilroy;
  }

  &__title-icon {
    margin-right: 12px;

    &--mobile {
      display: block;
    }

    &--desktop {
      display: none;
    }
  }

  &__link {
    display: flex;
    align-items: center;
  }

  &__content {
    margin-top: 40px;
  }
}

/*------------------------------------------------
  MEDIA QUERIES
------------------------------------------------*/
@media screen and (min-width: 640px) {
  .section {
    margin-top: 72px;

    &__title-container {
      padding: 0 56px;
    }

    &__title {
      font-size: 3.4rem;
    }

    &__title-icon {
      margin-right: 20px;

      &--mobile {
        display: none;
      }

      &--desktop {
        display: block;
      }
    }
  }
}
</style>
