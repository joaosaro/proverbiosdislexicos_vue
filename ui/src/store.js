import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ProverbiosFallback from './data/proverbios'
import Colors from './data/colors'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colorPalette: Colors,
    activeColor: 0,
    isPaletteOpen: false,
    proverbios: ProverbiosFallback,
    proverbioId: {
      id1: 0,
      id2: 1
    },
    proverbioEditable: false,
    customProverbio: {
      part1: '',
      part2: ''
    }
  },

  getters: {
    proverbioDislexico (state) {
      const { proverbios, proverbioId } = state

      const { part1 } = proverbios[proverbioId.id1]
      const { part2 } = proverbios[proverbioId.id2]

      return {
        part1: part1,
        part2: part2
      }
    },

    activeColor (state) {
      const { colorPalette, activeColor } = state

      return colorPalette[activeColor]
    },

    isProverbioEditable (state) {
      return state.proverbioEditable
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

    tooglePalette (state) {
      state.isPaletteOpen = !state.isPaletteOpen
    },

    setColor (state, index) {
      state.activeColor = index
    },

    setEditableProverbio (state, payload) {
      state.proverbioEditable = payload
    },

    setCustomProverbio (state, payload) {
      state.customProverbio = payload
    }
  },

  actions: {
    loadProverbios: async function ({ commit, dispatch }) {
      axios.get('http://proverbios.joaosaro.com/backoffice/api/proverbios')
        .then(function (response) {
          const proverbios = response.data
          commit('setProverbiosList', proverbios)
          dispatch('randomProverbio')
          return true
        })
        .catch(function (error) {
          console.log('loadProverbios Action', error)
          dispatch('randomProverbio')
        })
    },

    randomProverbio: function ({ dispatch }) {
      dispatch('randomPart1')
      dispatch('randomPart2')
    },

    randomPart1: function ({ commit }) {
      commit('setRandomId', 1)
    },

    randomPart2: function ({ commit }) {
      commit('setRandomId', 2)
    },

    togglePalette: function ({ commit }) {
      commit('tooglePalette')
    },

    updateColor: function ({ commit }, index) {
      commit('setColor', index)
    },

    toggleEditableProverbio: function ({ commit, state }, customProverbio) {
      const isToSave = state.proverbioEditable

      if (isToSave) {
        commit('setCustomProverbio', customProverbio)
      }

      commit('setEditableProverbio', !state.proverbioEditable)
    }
  }
})
