<template>
  <main class="proverbio">
    <p class="proverbio__text proverbio__text--one"
      :contenteditable="isProverbioEditable"
      @keyup="updateCustomProverbio(1)"
      ref="proverbio1"
      v-html="breakSentence(proverbioDislexico.part1)">
    </p>
    <div class="proverbio__separator"></div>
    <p class="proverbio__text proverbio__text--two"
      :contenteditable="isProverbioEditable"
      @keyup="updateCustomProverbio(2)"
      ref="proverbio2"
      v-html="breakSentence(proverbioDislexico.part2)">
    </p>
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
      printProverbioPart: 'printProverbioPart',
      customProverbioPart: 'customProverbioPart'
    }),

    updateCustomProverbio (part) {
      if (!this.isProverbioEditable) return
      const $refPart = this.$refs['proverbio' + part]
      this.customProverbioPart([part, $refPart.textContent])
    },

    breakSentence (sentence) {
      if (sentence.length < 21) return sentence

      var middle = Math.floor(sentence.length / 2)
      var before = sentence.lastIndexOf(' ', middle)
      var after = sentence.indexOf(' ', middle + 1)

      if (before === -1 || (after !== -1 && middle - before >= after - middle)) {
        middle = after
      } else {
        middle = before
      }

      var firstHalf = sentence.substr(0, middle)
      var secondHalf = sentence.substr(middle + 1)

      return `${firstHalf}<br>${secondHalf}`
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
    margin: 0
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

  &__text--two
    display: flex
    flex-direction: column
    justify-content: flex-start

  &__separator
    height: 20%
</style>
