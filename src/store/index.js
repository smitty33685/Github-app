import Vue from 'vue'
import Vuex from 'vuex'
import { GithubHttpService } from "../services/GithubHttpService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      login: 'Inza',
      name: 'Tomas Jukin',
      company: '@Juicymo',
      repos: 24,
    },

    repos: [],
  },

  getters: {
    getRepos: state => state.repos,
  },

  mutations: {
    setRepos: (state, repos) => state.repos = repos,
  },

  actions: {
    fetchData(store) {
      GithubHttpService.fetchUserData(`https://api.github.com/users/Inza/repos`)
        .then(data => store.commit("setRepos", data))
    },
  },

  modules: {
  }
})
