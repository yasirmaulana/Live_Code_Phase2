import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const $http = 'http://localhost:3000/'
const $http = 'http://35.198.207.92:3000/'


export default new Vuex.Store({
  state: {
    cart: {
      items: []
    }, 
    items: [
      {
        id:1,
        name:'gundam',
        description: 'blablablablabla',
        price:100000,
        stock:0
      },
      {
        id:2,
        name:'gundam2',
        description: 'blablablablabla',
        price:100000,
        stock:5
      },
      {
        id:3,
        name:'gundam3',
        description: 'blablablablabla',
        price:100000,
        stock:5
      },
      {
        id:4,
        name:'gundam4',
        description: 'blablablablabla',
        price:100000,
        stock:5
      },
      {
        id:5,
        name:'gundam4',
        description: 'blablablablabla',
        price:100000,
        stock:5
      },
    ]
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