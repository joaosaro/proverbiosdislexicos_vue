<template>
  <main class="proverbio">
    <div class="proverbio__text proverbio__text--one">Melhor um pardal na mão</div>
    <div class="proverbio__separator"></div>
    <div class="proverbio__text">Quem não quer manda</div>
  </main>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style scoped lang="sass">
@import '~@/styles/main.scss'

.proverbio
  margin: 0 10vw 0 15vw

  &__text
    height: 40%
    font:
      size: 6vh
      weight: 700
    text-transform: uppercase

  &__text--one
    display: flex
    flex-direction: column
    justify-content: flex-end

  &__separator
    height: 20%
</style>
