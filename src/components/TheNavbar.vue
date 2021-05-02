<template>
  <div class="content-max-width">
    <!-- Navbar Desktop -->
    <nav class="desktop">
      <div class="desktop__left">
        <router-link :to="{ name: 'Home' }">
          <div class="desktop__logo">SPROUT</div>
        </router-link>
        <base-input-text :icon="{ name: 'search' }" placeholder="Search" />
      </div>

      <div class="desktop__right">
        <router-link class="btn desktop__btn" to="/about">
          <base-icon class="desktop__btn-icon" name="info" />
          About
        </router-link>
        <router-link class="btn desktop__btn" to="/store">
          <base-icon class="desktop__btn-icon" name="map" />
          Store
        </router-link>
        <button class="btn desktop__btn btn--white">
          <base-icon class="desktop__btn-icon" name="shopping-bag" />
          Cart: {{ cartCounter }}
        </button>
      </div>
    </nav>

    <!--
      This occupies the space of .mobile when its "display"
      property is set to "fixed". It prevents the rest of the
      elements from moving upwards.
    -->
    <div v-if="mobileOpen" class="substitute"></div>

    <!-- Navbar Mobile -->
    <div
      class="mobile"
      :class="{ 'mobile--fixed': mobileOpen }"
      @click.self="toggleMobile"
    >
      <div class="mobile__bar">
        <div class="mobile__content">
          <div class="mobile__left">
            <router-link :to="{ name: 'Home' }">
              <div class="mobile__logo">SPROUT</div>
            </router-link>
          </div>
          <div class="mobile__right">
            <button class="btn mobile__btn">
              <base-icon class="mobile__btn-icon" name="shopping-bag" />
              <div v-if="cartCounter" class="mobile__btn-counter">
                {{ cartCounter }}
              </div>
            </button>
            <button
              class="btn mobile__burger"
              id="burger"
              @click="toggleMobile"
              :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
            >
              <base-icon v-show="!mobileOpen" name="menu" />
              <base-icon v-show="mobileOpen" name="x" />
            </button>
          </div>
        </div>
      </div>

      <div class="mobile__menu">
        <base-input-text :icon="{ name: 'search' }" placeholder="Search" />

        <div class="mobile__menu-btn-container">
          <router-link
            class="btn mobile__menu-btn"
            to="/about"
            @click="toggleMobile"
          >
            <base-icon class="mobile__menu-btn-icon" name="info" />
            About
          </router-link>
          <router-link
            class="btn mobile__menu-btn"
            to="/store"
            @click="toggleMobile"
          >
            <base-icon class="mobile__menu-btn-icon" name="map" />
            Store
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheNavbar',
  data () {
    return {
      mobileOpen: false,
    }
  },
  computed: {
    cartCounter () {
      return 3
    },
  },
  methods: {
    toggleMobile () {
      this.mobileOpen = !this.mobileOpen
    },
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/css/vars' as vars;

.desktop {
  display: none;
}

.substitute {
  $padding-y: 12px;
  height: 22px + ($padding-y * 2);
  margin: 20px 0;
}

.mobile {
  &__bar {
    width: 100%;
    background-color: vars.$light-cream;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    max-width: vars.$content-max-width;
    padding: 20px 0px;
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 32px;
    font-family: 'Gilroy';
    font-weight: vars.$bold;
    font-size: 20px;
  }

  &__btn {
    position: relative;
  }

  &__btn-counter {
    position: absolute;
    right: 0;
    top: 0;
    background-color: vars.$green;
    color: vars.$white;
    width: 1px;
    height: 1px;
    padding: 9px;
    border-radius: 50%;
    font-size: 1.1rem;
    line-height: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid vars.$light-cream;
  }

  &__burger {
    padding-right: 0px;
  }

  &__menu {
    display: none;
  }

  &__menu-btn-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  &__menu-btn:not(:last-of-type) {
    margin-right: 16px;
  }

  &__menu-btn-icon {
    margin-right: 8px;
  }

  &--fixed {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
    z-index: 2;
  }

  &--fixed &__content {
    padding: 20px vars.$content-padding;
  }

  &--fixed &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: vars.$light-cream;
    padding-bottom: 20px;
  }
}

/*----------------------------------------------
  MEDIA QUERIES
-----------------------------------------------*/
@media screen and (min-width: 780px) {
  .mobile {
    display: none;
  }

  .desktop {
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
}
</style>
