<template>
  <div class="home-grid">
    <header class="logo">
      <Logo />
    </header>
    <Proverbio />
    <aside class="options">
      <Controls />
    </aside>
    <footer class="footer">
      <Copyright />
    </footer>
  </div>
</template>

<script>
import Logo from './Logo'
import Proverbio from './Proverbio'
import Controls from './Controls'
import Copyright from './Copyright'

export default {
  name: 'HomeGrid',
  components: {
    Logo,
    Proverbio,
    Controls,
    Copyright
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '~@/styles/main.scss'

.home-grid
  position: relative
  display: grid
  grid-template-rows: 60px 1fr 20px
  grid-template-columns: 1fr minmax(auto, 150px)
  grid-template-areas: "logo logo" "proverbio options" "footer options"
  grid-gap: 20px
  height: 100vh
  padding: 30px 0 30px 30px

.logo
  grid-area: logo

.proverbio
  grid-area: proverbio

.options
  grid-area: options
  position: relative

.footer
  grid-area: footer
</style>
