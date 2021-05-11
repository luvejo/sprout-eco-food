<template>
  <the-navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'

export default defineComponent({
  name: 'App',
  components: { TheNavbar },
})
</script>

<style lang="scss">
@import '~normalize.css';
@import '@/assets/css/main.scss';
</style>
