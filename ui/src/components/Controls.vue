<template>
  <div class="controls" :class="translatePalette">
    <div class="controls__options">
      <Button
        :buttonText="'Novo provérbio'"
        :icon="'refresh-button.svg'"
        @click.native="newProverbio()" />
      <Button
        :buttonText="editableText"
        :icon="'edit-button.svg'"
        @click.native="toggleEditable()" />
      <Button
        :buttonText="'Alterar côr'"
        :icon="'pallete-button.svg'"
        @click.native="togglePalette()"/>
    </div>
    <Palette />
  </div>
</template>

<script>
import Button from '../atoms/Button'
import Palette from './Palette'
import { mapActions } from 'vuex'

export default {
  name: 'Controls',
  components: {
    Button,
    Palette
  },

  data () {
    return {
      editableText: 'Editar texto'
    }
  },

  computed: {
    translatePalette: function () {
      return this.$store.state.isPaletteOpen ? 'is-open' : null
    }
  },

  methods: {
    ...mapActions({
      newProverbio: 'randomProverbio',
      togglePalette: 'togglePalette',
      toggleEditableProverbio: 'toggleEditableProverbio'
    }),

    getCustomProverbio: function () {
      const part1 = document.querySelector('.proverbio__text--one').textContent
      const part2 = document.querySelector('.proverbio__text--two').textContent

      return {
        part1: part1,
        part2: part2
      }
    },

    toggleEditable: function () {
      const { isProverbioEditable } = this.$store.getters
      const isToSave = !isProverbioEditable // should be reversed
      let customProverbio = {
        part1: '',
        part2: ''
      }

      this.editableText = isToSave ? 'Salvar texto' : 'Editar texto'

      return this.toggleEditableProverbio(customProverbio)
    }
  }
}
</script>

<style scoped lang="sass">
@import '~@/styles/main.scss'

.controls
  position: absolute
  right: 0
  display: flex
  align-items: center
  transform: translateX(80px)
  transition: transform .3s

  &.is-open
    transform: translateX(0)

  &__options > *
    margin: 12px 0
</style>
