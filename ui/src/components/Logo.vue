<template>
  <div class="logo">
    <div class="logo-bold">P/D</div>
    <div class="logo-long">Provérbios Disléxicos</div>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '~@/styles/main.scss'

.logo
  .logo-bold
    font:
      size: 36px
      weight: 900
    letter-spacing: 3.6px

  .logo-long
    font:
      size: 12px
      weight: 300
    letter-spacing: 2.29px
</style>
