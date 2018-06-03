<template>
  <div class="palette">
    <div class=colors>
      <button v-for="(color, index) in getColors()"
        :key="index"
        :value="color"
        class="colors__button"
        :style="{ 'background-color': color }"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Palette',

  methods: {
    getColors: function () {
      return this.$store.state.colorPalette
    },

    colorStyle: function (color) {
      return color
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '~@/styles/main.scss'

.palette
  height: 140px
  width: 80px
  padding: 10px
  border-radius: 10px 0 0 10px
  box-shadow: 0 2px 4px rgba(0,0,0,.19)
  background: #ffffff
  display: flex
  flex-wrap: wrap
  justify-content: center
  overflow: hidden

.colors
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-content: space-around
  justify-content: space-around

.colors__button
  height: 18px
  width: 18px
  border: .5px solid rgba(255,255,255,0.58)
  border-radius: 50%
  margin: 6px
  box-shadow: -1px 1px 2px rgba(0,0,0,.09)
  outline: none
  transition: border .3s
</style>
