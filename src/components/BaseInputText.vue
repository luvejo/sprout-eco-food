<template>
  <div class="input-wrapper">
    <input
      class="input-wrapper__input"
      :class="{ 'input-wrapper--with-icon': this.icon }"
      type="text"
      :placeholder="placeholder"
    />

    <div
      v-if="icon"
      class="input-wrapper__icon"
      :class="{ 'input-wrapper__icon--background': this.icon?.background }"
    >
      <base-icon :name="icon.name" :size="16" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { InputIcon } from '@/types'

export default defineComponent({
  name: 'BaseInputText',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    icon: {
      type: Object as PropType<InputIcon>,
      required: false,
      validator: (value: InputIcon) => {
        return !!value.name
      },
    },
  },
})
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.input-wrapper {
  width: 200px;
  height: 40px;
  display: flex;
  background-color: vars.$white;
  border-radius: vars.$border-radius;
  position: relative;

  &__input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 12px 16px;
    font-size: 1.6rem;
  }

  &__icon {
    border-radius: 0 vars.$border-radius vars.$border-radius 0;
    background-color: transparent;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    height: 100%;

    &--background {
      background-color: vars.$black;

      * {
        color: vars.$white;
      }
    }
  }

  &--with-icon {
    padding-right: 52px;
  }
}
</style>
