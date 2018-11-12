<template>
  <main class="proverbio">
    <div class="proverbio__text proverbio__text--one"
      :contenteditable="isProverbioEditable"
      @keyup="updateCustomProverbio(1)"
      ref="proverbio1">
      {{ proverbioDislexico.part1 }}
    </div>
    <div class="proverbio__separator"></div>
    <div class="proverbio__text"
      :contenteditable="isProverbioEditable"
      @keyup="updateCustomProverbio(2)"
      ref="proverbio2">
      {{ proverbioDislexico.part2 }}
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Proverbio',

  computed: {
    ...mapGetters({
      proverbioDislexico: 'proverbioDislexico',
      isProverbioEditable: 'isProverbioEditable'
    })
  },

  methods: {
    ...mapActions({
      printProverbioPart: 'printProverbioPart'
    }),

    updateCustomProverbio (part) {
      if (!this.isProverbioEditable) return
      this.printProverbioPart([part, this.$refs.proverbio1.textContent])
    }
  }
}
</script>

<style scoped lang="sass">
@import '~@/styles/main.scss'

.proverbio
  margin: 0 10vw 0 15vw
  overflow-x: hidden

  &__text
    height: 40%
    font:
      size: 6vh
      weight: 700
    text-transform: uppercase

    &[contenteditable="true"]
      outline: none
      text-decoration: underline dashed

  &__text--one
    display: flex
    flex-direction: column
    justify-content: flex-end

  &__separator
    height: 20%
</style>
