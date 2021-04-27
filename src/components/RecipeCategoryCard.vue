<template>
  <article class="recipe-card">
    <p class="recipe-card__title">{{ title }}</p>
    <p class="recipe-card__subtitle">{{ subtitle }}</p>

    <img :src="imageURL" :alt="` ${title} image`" />

    <router-link class="btn recipe-card__btn" :to="`/recipes/categories/${id}`">
      Read more
    </router-link>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RecipeCategoryCard',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    imageURL: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss"></style>
