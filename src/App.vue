<template>
  <the-navbar />
  <router-view />
  <the-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default defineComponent({
  name: 'App',
  components: { TheNavbar, TheFooter }
})
</script>

<style lang="scss"></style>
