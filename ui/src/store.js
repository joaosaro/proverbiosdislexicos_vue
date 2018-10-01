import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ProverbiosFallback from './data/proverbios'
import Colors from './data/colors'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colorPalette: Colors,
    activeColor: Colors[0],
    isPaletteOpen: false,
    proverbios: ProverbiosFallback,
    proverbioDislexico: {
      part1: 'Provérbio 1',
      part2: 'Provérbio 2'
    },
    proverbioId: {
      id1: 0,
      id2: 1
    }
  },
  mutations: {
    setProverbiosList (state, payload) {
      state.proverbios = payload
    },
    randomPart1 (state) {
      const { proverbioDislexico, proverbios, proverbioId } = state
      proverbioDislexico.part1 = proverbios[0].part1
    },
    randomPart2 (state) {
      const { proverbioDislexico, proverbios } = state
      const { id2 } = state.proverbioId

      proverbioDislexico.part2 = proverbios[id2].part2
    }
  },
  actions: {
    loadProverbios: async function ({ commit, state }) {
      axios.get('http://proverbios.joaosaro.com/backoffice/api/proverbios')
        .then(function (response) {
          const proverbios = response.data
          commit('setProverbiosList', proverbios)
          commit('randomPart1')
          commit('randomPart2')
          return true
        })
        .catch(function (error) {
          console.log('loadProverbios Action', error)
        })
    },

    randomProverbio: function ({ commit }) {
      commit('randomPart1')
      commit('randomPart2')
    },

    randomPart1: function ({ commit }) {
      commit('randomPart1')
    },

    randomPart2: function ({ commit }) {
      commit('randomPart2')
    }
  }
})
