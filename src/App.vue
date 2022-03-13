<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <RouterView />
</template>

<style lang="scss">
@import 'normalize.css';
@import '@/assets/css/main.scss';
</style>
