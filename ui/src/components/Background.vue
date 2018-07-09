<template>
  <svg class="background" :fill="backgroundColor">
    <defs>
      <linearGradient id="linearGrad" x1="53.5%" y1="0%" x2="61%" y2="100%">
        <stop stop-color="#000000" stop-opacity="0" offset="0%"></stop>
        <stop stop-color="#000000" stop-opacity="0.5" offset="100%"></stop>
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradientTexture">
        <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
        <stop stop-color="#FFFFFF" stop-opacity="0.399569746" offset="100%"></stop>
      </linearGradient>
    </defs>
    <rect class="canvas-size" x="0" y="0" width="100%" height="100%"></rect>
    <rect class="canvas-size" x="0" y="0" width="100%" height="100%" fill="url(#linearGrad)"></rect>
    <line class="divide-line" x1="0" y1="55%" x2="100%" y2="45%" stroke="white" stroke-width="5px"></line>
  </svg>
</template>

<script>
export default {
  name: 'Background',

  computed: {
    backgroundColor: function () {
      const backgroundColor = this.$store.state.activeColor

      return backgroundColor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '~@/styles/main.scss'

.background
  position: absolute
  height: 100vh
  width: 100vw
  transition: fill 1s

</style>
