<template>
  <the-loading-screen v-if="loading" />
  <div v-else class="content-max-width">
    <div class="home">
      <!-- News Carousel -->
      <the-news-carousel v-if="news" :news="news" />

      <!-- Section: Discounts -->
      <section class="section" v-if="discountedGoods">
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
          <router-link
            to="/catalog/discounted"
            class="section__link"
          >
            View all
            <base-icon
              name="chevron-right"
              class="section__link-icon"
            />
          </router-link>
        </div>

        <product-carousel :products="discountedGoods" />
      </section>

      <!-- Section: Recipes -->
      <the-section-recipes
        v-if="recipes"
        :recipes="recipes"
      />

      <!-- Section:  New Additions -->
      <section class="section" v-if="newAdditions">
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
          <router-link
            to="/new-additions"
            class="section__link"
          >
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

  <the-footer v-if="!loading" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheLoadingScreen from '@/components/TheLoadingScreen.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import TheNewsCarousel from '@/components/TheNewsCarousel.vue'
import TheSectionRecipes from '@/components/TheSectionRecipes.vue'
import TheSectionLogistics from '@/components/TheSectionLogistics.vue'
import TheFooter from '@/components/TheFooter.vue'
import api from '@/api'

export default defineComponent({
  name: 'Home',
  components: {
    TheLoadingScreen,
    ProductCarousel,
    TheNewsCarousel,
    TheSectionRecipes,
    TheSectionLogistics,
    TheFooter,
  },
  data() {
    return {
      discountedGoods: null,
      newAdditions: null,
      recipes: null,
      news: null,
      loading: true,
    }
  },
  created() {
    Promise.all([
      api.news.getLatest().then((data: any) => {
        this.news = data
      }),

      api.products.listDiscounted().then((data: any) => {
        this.discountedGoods = data
      }),

      api.products.listNew().then((data: any) => {
        this.newAdditions = data
      }),

      api.recipes.getFeatured().then((data: any) => {
        this.recipes = data
      }),
    ])
      .then(() => (this.loading = false))
      .catch(() => this.$router.push({ name: 'NotFound' }))
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
