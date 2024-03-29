import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { EMPTY_PROV as EmptyProverbios, PROVERBIOS_FALLBACK as ProverbiosFallback } from './data/proverbios'
import Colors from './data/colors'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colorPalette: Colors,
    activeColor: 0,
    isPaletteOpen: false,
    proverbios: EmptyProverbios,
    proverbioId: {
      id1: 0,
      id2: 1
    },
    customProverbio: {
      part1: '',
      part2: ''
    },
    proverbioPrinted: {
      part1: '',
      part2: ''
    },
    proverbioEditable: false
  },

  getters: {
    proverbioDislexico (state) {
      return {
        part1: state.proverbioPrinted.part1,
        part2: state.proverbioPrinted.part2
      }
    },

    customProverbioState (state) {
      return {
        part1: state.customProverbio.part1,
        part2: state.customProverbio.part2
      }
    },

    activeColor (state) {
      const { colorPalette, activeColor } = state

      return colorPalette[activeColor]
    },

    isProverbioEditable (state) {
      return state.proverbioEditable
    },

    isPaletteOpen (state) {
      return state.isPaletteOpen
    }
  },

  mutations: {
    setProverbiosList (state, payload) {
      state.proverbios = payload
    },

    setRandomId (state, partParam) {
      const { proverbios } = state
      const id = 'id' + partParam
      const otherId = id === 'id1' ? 'id2' : 'id1'

      let proverbioId = Math.floor((Math.random() * proverbios.length))

      while (proverbioId === state.proverbioId[otherId]) {
        proverbioId = Math.floor((Math.random() * proverbios.length))
      }

      state.proverbioId[id] = proverbioId
    },

    setPoverbioPrinted (state, { partParam, text }) {
      const { proverbioPrinted } = state
      const part = 'part' + partParam

      proverbioPrinted[part] = text
    },

    tooglePalette (state) {
      state.isPaletteOpen = !state.isPaletteOpen
    },

    setColor (state, index) {
      state.activeColor = index
    },

    setEditableProverbio (state, payload) {
      state.proverbioEditable = payload
    },

    setCustomProverbio (state, { partParam, text }) {
      const { customProverbio } = state
      const part = 'part' + partParam

      customProverbio[part] = text
    }
  },

  actions: {
    loadProverbios: async function ({ commit, dispatch, state }) {
      axios.get('http://proverbios.joaosaro.com/backoffice/api/proverbios')
        .then(function (response) {
          const proverbios = response.data
          commit('setProverbiosList', proverbios)
          dispatch('randomProverbio')
          dispatch('printProverbio')
          return true
        })
        .catch(function (error) {
          console.log('loadProverbios Action', error)
          commit('setProverbiosList', ProverbiosFallback)
          dispatch('randomProverbio')
          return true
        })
    },

    randomProverbio: function ({ dispatch }) {
      dispatch('randomPart', 1)
      dispatch('randomPart', 2)
    },

    randomPart: function ({ commit, dispatch }, part) {
      commit('setRandomId', part)
      dispatch('printProverbioPart', [part])
    },

    printProverbio: function ({ dispatch }) {
      dispatch('printProverbioPart', [1])
      dispatch('printProverbioPart', [2])
    },

    printProverbioPart: function ({commit, state}, [part, customText]) {
      const { proverbios, proverbioId } = state
      const proverbioObj = proverbios[proverbioId['id' + part]]
      const text = customText || proverbioObj['part' + part]

      commit('setPoverbioPrinted', { partParam: part, text })
    },

    customProverbio: function ({ dispatch, state }, customProverbio) {
      const { part1, part2 } = customProverbio
      dispatch('printProverbioPart', [1, part1])
      dispatch('printProverbioPart', [2, part2])
      console.log('customProverbio', state)
    },

    customProverbioPart: function ({commit, state}, [part, customText]) {
      const { proverbios, proverbioId } = state
      const proverbioObj = proverbios[proverbioId['id' + part]]
      const text = customText || proverbioObj['part' + part]

      commit('setCustomProverbio', { partParam: part, text })
      console.log('setPart', state)
    },

    togglePalette: function ({ commit }) {
      commit('tooglePalette')
    },

    updateColor: function ({ commit }, index) {
      commit('setColor', index)
    },

    toggleEditableProverbio: function ({ commit, state }) {
      commit('setEditableProverbio', !state.proverbioEditable)
    }
  }
})
