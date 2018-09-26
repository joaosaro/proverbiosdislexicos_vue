import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Proverbios from './data/proverbios'
import Colors from './data/colors'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colorPalette: Colors,
    activeColor: Colors[0],
    isPaletteOpen: false,
    proverbios: Proverbios,
    proverbioDislexico: {
      part1: 'Parte1',
      part2: 'Parte2'
    }
  },
  mutations: {
    setProverbiosList (state, payload) {
      state.proverbios = payload
    },
    setProverbioDislexico (state, part1, part2) {
      state.proverbioDislexico.part1 = part1
      state.proverbioDislexico.part2 = part2
    }
  },
  actions: {
    loadProverbios: async function ({ commit }) {
      axios.get('http://proverbios.joaosaro.com/backoffice/api/proverbios')
        .then(function (response) {
          const proverbios = response.data
          commit('setProverbiosList', { payload: proverbios })
          commit('setProverbioDislexico', {
            part1: proverbios[0].part1,
            part2: proverbios[1].part2
          })
          return true
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
