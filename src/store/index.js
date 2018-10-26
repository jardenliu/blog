import Vue from 'vue';
import Vuex from 'vuex';
import * as api from 'src/api'
import colors from 'src/units/colorScheme'

let state = {
  blogData: []
}
let getters = {
  sortedList(state, getter) {
    let list = [...state.blogData].sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime())
    list = list.sort((a, b) => a.setTop ? -1 : 0)
    return list
  },
  colorSchemes(state) {
    let schemes = {}
    state.blogData.map(item => {
      item.tags && item.tags.map(tag => schemes[tag] = true)
      item.categories && item.categories.map(category => schemes[category] = true)
    })
    let count = 0;
    Object.keys(schemes).map(key => {
      schemes[key] = `${colors[count % colors.length]}`
      count++
    })
    return schemes;
  }
}
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
