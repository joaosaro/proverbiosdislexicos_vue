<template>
  <div class="controls">
    <div class="options">
      <control-button
        :buttonText="'Novo provérbio'"
        :icon="'refresh-button.svg'" ></control-button>
      <control-button
        :buttonText="'Alterar côr'"
        :icon="'pallete-button.svg'" ></control-button>
    </div>
  </div>
</template>

<script>
import ControlButton from './ControlButton'

export default {
  name: 'Controls',
  components: {
    ControlButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '~@/styles/main.scss'

.controls
  position: absolute
  right: 0
</style>
