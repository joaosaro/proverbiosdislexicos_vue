<template>
  <div class="palette">
    <div class=colors>
      <button v-for="(color, index) in getColors()"
        :key="index"
        :value="color"
        class="colors__button"
        :class="activeButton(index)"
        :style="{ 'background-color': color }"
        @click="updateColor(index)" />
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
    },

    activeButton: function (index) {
      return 'color'
    },

    updateColor: function (index) {
      this.$store.state.activeColor = this.$store.state.colorPalette[index]
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

  // &::after
  //   conntent: ''
  //   display: block
  //   position: fixed
  //   top: 0
  //   height: 108px
  //   width: 120px
  //   background:
  //     color: orange
  //     image: url(~@/assets/buttons/right-arrow.svg)

.colors
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-content: space-around
  justify-content: space-around

.colors__button
  position: relative
  height: 18px
  width: 18px
  border: .5px solid rgba(255,255,255,0.58)
  border-radius: 50%
  margin: 6px
  box-shadow: -1px 1px 2px rgba(0,0,0,.09)
  outline: none
  transition: border .3s, transform .3s

  &:hover
    border-color: rgba(100,100,100,0.58)
    transform: scale(1.25)

  // &.active::before
  //   content: ''
  //   position: absolute
  //   display: flex
  //   justify-content: center
  //   align-items: center
  //   height: 60%
  //   width: 60%
  //   background:
  //     image: url(~@/assets/buttons/selected-arrow.svg)
</style>
