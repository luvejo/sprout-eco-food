<template>
  <div class="home">
    <!-- News Carousel -->
    <the-news-carousel />

    <!-- Section: Discounts -->
    <section class="section">
      <div class="section__title">
        <h2>
          <base-icon name="tag" :size="40" />
          Discounted goods
        </h2>
        <router-link to="/catalog/discounted">
          View all
          <base-icon name="chevron-right" />
        </router-link>
      </div>

      <product-carousel />
    </section>

    <!-- Section: Recipes -->
    <section class="section">
      <div class="section__title">
        <h2>
          <base-icon name="coffee" :size="40" />
          What to cook?
        </h2>
      </div>

      <div class="section__content">
        <recipe-category-card />

        <article class="all-recipes-card">
          <p class="all-recipes-card__title">
            <span>200+</span>
            recipes
          </p>
          <router-link class="btn" to="/recipes">View all</router-link>
        </article>

        <div class="subscribe-card">
          <p class="subscribe-card__title"></p>
          <base-input-text />
          <button class="btn btn--full btn--black">
            Subscribe now
          </button>
        </div>
      </div>
    </section>

    <!-- Section: Bonus Program -->
    <section class="section">
      <div class="section__title">
        <h2>
          <base-icon name="award" :size="40" />
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
      <div class="section__title">
        <h2>
          <base-icon name="package" :size="40" />
          New additions
        </h2>
        <router-link to="/new-additions">
          View all
          <base-icon name="chevron-right" />
        </router-link>
      </div>

      <product-carousel />
    </section>

    <!-- Section:  Logistics -->
    <section class="section section-logistics">
      <div class="section__title">
        <h2>
          <base-icon name="truck" :size="40" />
          How we work
        </h2>
      </div>

      <div class="section-logistics__content">
        <div class="section-logistics__step">
          <div class="section-logistics__pictogram-wrapper"></div>

          <div class="section-logistics__text">
            <p class="section-logistics__title"></p>
            <p class="section-logistics__description"></p>
          </div>
        </div>
        <div class="section-logistics__step">
          <div class="section-logistics__pictogram-wrapper"></div>

          <div class="section-logistics__text">
            <p class="section-logistics__title"></p>
            <p class="section-logistics__description"></p>
          </div>
        </div>
        <div class="section-logistics__step">
          <div class="section-logistics__pictogram-wrapper"></div>

          <div class="section-logistics__text">
            <p class="section-logistics__title"></p>
            <p class="section-logistics__description"></p>
          </div>
        </div>
        <div class="section-logistics__step">
          <div class="section-logistics__pictogram-wrapper"></div>

          <div class="section-logistics__text">
            <p class="section-logistics__title"></p>
            <p class="section-logistics__description"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import RecipeCategoryCard from '@/components/RecipeCategoryCard.vue'
import BonusLevelCard from '@/components/BonusLevelCard.vue'
import TheNewsCarousel from '@/components/TheNewsCarousel.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProductCarousel,
    RecipeCategoryCard,
    BonusLevelCard,
    TheNewsCarousel
  }
})
</script>
