import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const $http = 'http://localhost:3000/'
const $http = 'http://35.198.207.92:3000/'


export default new Vuex.Store({
  state: {
    
  },

  
  mutations: {
    buyItem: function (state, payload) {
      state.cart.items.push(payload)
    }
  },

  actions: {
    buyItem: function ({commit}, payload) {
      commit('buyItem', payload)
    }
  }
})