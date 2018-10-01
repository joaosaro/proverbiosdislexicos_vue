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
    proverbioDislexico: {
      part1: '',
      part2: ''
    },
    proverbioId: {
      id1: 0,
      id2: 1
    }
  },

  getters: {
    activeColor (state) {
      return state.colorPalette[state.activeColor]
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

    setRandomPart (state, partParam) {
      const { proverbioDislexico, proverbios } = state

      const id = 'id' + partParam
      const part = 'part' + partParam
      const idNr = state.proverbioId[id]
      const proverbio = proverbios[idNr]

      proverbioDislexico[part] = proverbio[part]
    },

    tooglePalette (state) {
      state.isPaletteOpen = !state.isPaletteOpen
    },

    setColor (state, index) {
      state.activeColor = index
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

    randomProverbio: function ({ commit, dispatch }) {
      dispatch('randomPart1')
      dispatch('randomPart2')
    },

    randomPart1: function ({ commit }) {
      commit('setRandomId', 1)
      commit('setRandomPart', 1)
    },

    randomPart2: function ({ commit }) {
      commit('setRandomId', 2)
      commit('setRandomPart', 2)
    },

    togglePalette: function ({ commit }) {
      commit('tooglePalette')
    },

    updateColor: function ({ commit }, index) {
      commit('setColor', index)
    }
  }
})
