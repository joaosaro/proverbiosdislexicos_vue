<template>
  <main class="proverbio">
    <div class="proverbio__text proverbio__text--one" :contenteditable="isProverbioEditable">{{ part1 }}</div>
    <div class="proverbio__separator"></div>
    <div class="proverbio__text" :contenteditable="isProverbioEditable">{{ part2 }}</div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Copyright',

  computed: {
    ...mapGetters({
      proverbioDislexico: 'proverbioDislexico',
      isProverbioEditable: 'isProverbioEditable'
    }),

    part1 () {
      const { part1 } = this.proverbioDislexico
      return part1
    },

    part2 () {
      const { part2 } = this.proverbioDislexico
      return part2
    }
  }
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
