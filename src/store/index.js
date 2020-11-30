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
    branches: [],
    commits: [],
  },

  getters: {
    getRepos: state => state.repos,
    getBranches: state => state.branches,
    getCommits: state => state.commits,
  },

  mutations: {
    setRepos: (state, depo) => state.repos = depo,
    setBranches: (state, branch) => state.branches = branch,
    setCommits: (state, commit) => state.commits = commit,
  },

  actions: {
    fetchData(store) {
      GithubHttpService.fetchUserData(`https://api.github.com/users/Inza/repos`)
        .then(data => store.commit("setRepos", data))
    },
    fetchDataBranch(store, name) {
      GithubHttpService.fetchUserData(`https://api.github.com/repos/Inza/${name}/branches`)
        .then(data => store.commit('setBranches', data))
    },
    fetchDataCommit(store, name) {
      GithubHttpService.fetchUserData(`https://api.github.com/repos/Inza/${name}/commits`)
        .then(data => store.commit('setCommits', data))
    }
  },

  // modules: {
  // }
})
