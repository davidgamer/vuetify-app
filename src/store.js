import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pessoas: []
  },
  mutations: {
    setPessoas (state, pessoas) {
      pessoas = state.pessoas = pessoas
    },
    insertpessoas (state, pessoas) {
      state.pessoas.push(pessoas)
    },
    removePessoas (state, payload) {
      const index = state.pessoas.findIndex(p => p.id === payload);
      state.pessoas.splice(index, 1)
    }
  },
  getters: {
    getPessoas (state) {
      return state.pessoas
    }
  },
  actions: {
    fetchPessoas (context) {
      fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(res => {
          context.commit('setPessoas', res.results)
          // console.log(res)
        })
    }
  }
});
