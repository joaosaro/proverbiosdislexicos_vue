<template>
  <button class="button">
    <span class="button__text">{{ buttonText }}</span>
    <img class="button__icon" :src="iconImage" :alt="buttonText">
  </button>
</template>

<script>
export default {
  name: 'ControlButton',
  props: {
    buttonText: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },

  computed: {
    iconImage: function () {
      return require('@/assets/buttons/' + this.icon)
    }
  }
}
</script>

<style scoped lang="sass">
@import '~@/styles/main.scss'

.button
  display: flex
  align-items: center
  border: none
  background: transparent
  cursor: pointer
  outline: none
  transition: transform .3s

  &:hover
    transform: translateX(-10px)

  &__text
    width: 12ch
    color: $color-text
    font:
      size: 10px
      weight: 900
    letter-spacing: 1.11px
    line-height: 12px
    text-transform: lowercase
    text-align: right

  &__icon
    height: 20px
    margin: 5px 10px
</style>
