<template>
  <div class="loading-spinner-container">
    <loading-spinner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default defineComponent({
  name: 'TheLoadingScreen',
  components: {
    LoadingSpinner,
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/vars' as vars;

.loading-spinner-container {
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

.loading-spinner {
  margin: 0 auto;
}
</style>
