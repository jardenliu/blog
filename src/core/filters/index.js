import dateDiff from './dateDiff'

let filters = {
  dateDiff
}

filters.install = (Vue) => {
  Vue.filter('dateDiff', dateDiff)
}

export default filters;
