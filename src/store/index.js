import Vue from 'vue';
import Vuex from 'vuex';
import * as api from 'src/api'

let state = {
  blogData: []
}
let getters = {}
let mutations = {
  setBlogData: (state, data) => {
    state.blogData = data
  }
}
let actions = {
  getBlogData: ({ commit, state }) => {
    api.getBlogData().then(data => {
      commit('setBlogData', data)
    })
  }
}

Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 使用严格模式,
  getters,
  state,
  actions,
  mutations,
  modules: {
    // User
  }
})
