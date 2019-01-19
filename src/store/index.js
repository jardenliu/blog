import * as api from '~/core/api'
import colors from '~/core/units/colorScheme'
import axios from 'axios'

export const state = () => ({
  blogData: []
})

export let getters = {
  sortedList(state, getter) {
    let list = [...state.blogData].sort(
      (a, b) =>
        new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime()
    )
    list = list.sort((a, b) => (a.setTop ? -1 : 0))
    return list
  },
  colorSchemes(state) {
    let schemes = {}
    state.blogData.map(item => {
      item.tags && item.tags.map(tag => (schemes[tag] = true))
      item.categories &&
        item.categories.map(category => (schemes[category] = true))
    })
    let count = 0
    Object.keys(schemes).map(key => {
      schemes[key] = `${colors[count % colors.length]}`
      count++
    })
    return schemes
  },
  tagArtcles(state) {
    let tagArtcles = {}
    state.blogData.map(item => {
      item.tags &&
        item.tags.map(tag => {
          tagArtcles[tag] = tagArtcles[tag] || []
          tagArtcles[tag].push(item)
        })
    })
    return tagArtcles
  },
  categoryArtcles(state) {
    let categoryArtcles = {}
    state.blogData.map(item => {
      item.categories &&
        item.categories.map(category => {
          categoryArtcles[category] = categoryArtcles[category] || []
          categoryArtcles[category].push(item)
        })
    })
    return categoryArtcles
  },
  tags(state, getters) {
    return Object.keys(getters.tagArtcles)
  },
  categories(state) {
    let categories = {}
    state.blogData.map(item => {
      item.tags &&
        item.categories.map(category => (categories[category] = true))
    })
    return Object.keys(categories)
  }
}
export let mutations = {
  setBlogData: (state, data) => {
    state.blogData = data
  }
}
export let actions = {
  async nuxtServerInit({ commit }) {
    let res = await axios.get('http://127.0.0.1:8888/data')
    commit('setBlogData', res.data)
  },
  getBlogData: ({ commit, state }) => {
    return api.getBlogData().then(data => {
      commit('setBlogData', data)
    })
  }
}
