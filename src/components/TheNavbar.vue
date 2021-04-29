<template>
  <div class="content-max-width">
    <nav class="navbar">
      <div class="navbar__left">
        <router-link :to="{ name: 'Home' }">
          <div class="navbar__logo">SPROUT</div>
        </router-link>
        <base-input-text :icon="{ name: 'search' }" placeholder="Search" />
      </div>

      <div class="navbar__right">
        <router-link class="btn navbar__btn" to="/about">
          <base-icon class="navbar__btn-icon" name="info" />
          About
        </router-link>
        <router-link class="btn navbar__btn" to="/store">
          <base-icon class="navbar__btn-icon" name="map" />
          Store
        </router-link>
        <button class="btn navbar__btn btn--white">
          <base-icon class="navbar__btn-icon" name="shopping-bag" />
          Cart: {{ cartCounter }}
        </button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheNavbar',
  computed: {
    cartCounter () {
      return 0
    }
  }
})
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.navbar {
  display: flex;
  padding: 20px 32px;
  justify-content: space-between;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 32px;
    font-family: 'Gilroy';
    font-weight: vars.$bold;
    font-size: 24px;
  }

  &__btn {
    margin-right: 8px;
  }

  &__btn-icon {
    margin-right: 8px;
  }
}
</style>
