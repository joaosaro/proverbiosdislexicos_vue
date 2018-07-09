import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const colors = ['#3498DB', '#1DDFB9', '#FFFB37', '#9B59B6', '#1ABC9C', '#E67E22', '#E74C3C', '#F1C40F']

export default new Vuex.Store({
  state: {
    colorPalette: colors,
    activeColor: colors[0],
    isPaletteOpen: false
  },
  mutations: {

  },
  actions: {

  }
})
