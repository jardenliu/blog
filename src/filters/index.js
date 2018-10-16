import dateDiff from './dateDiff'

let filters = {}

filters.install = (Vue) => {
  Vue.filter('dateDiff', dateDiff)
}

export default filters;
