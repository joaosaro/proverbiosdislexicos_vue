<template>
  <div class="controls" :class="translatePalette">
    <div class="controls__options">
      <control-button
        :buttonText="'Novo provérbio'"
        :icon="'refresh-button.svg'" />
      <control-button
        :buttonText="'Edit text'"
        :icon="'edit-button.svg'" />
      <control-button
        :buttonText="'Alterar côr'"
        :icon="'pallete-button.svg'"
        @click.native="togglePalette()"/>
    </div>
    <Palette />
  </div>
</template>

<script>
import ControlButton from './ControlButton'
import Palette from './Palette'

export default {
  name: 'Controls',
  components: {
    ControlButton,
    Palette
  },

  computed: {
    translatePalette: function () {
      return this.$store.state.isPaletteOpen ? 'is-open' : null
    }
  },

  methods: {
    togglePalette: function () {
      this.$store.state.isPaletteOpen = !this.$store.state.isPaletteOpen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '~@/styles/main.scss'

.controls
  position: absolute
  right: 0
  display: flex
  align-items: center
  transform: translateX(80px)
  transition: transform .3s

  &.is-open
    transform: translateX(0)

  &__options > *
    margin: 12px 0
</style>
