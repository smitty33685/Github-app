import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      login:'Inza',
      name: 'Tomas Jukin',
      company: '@Juicymo',
      repos: 24,
    },

    repos: [],
  },

  mutations: {
    SET_REPOS: (state,repos) => {
      return state.repos = repos
    }
  },

  actions: {

  },
  modules: {
  }
})
