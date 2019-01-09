import {
  get
} from '../units/http'
import config from '~/config'

let sourcePath =
  config && config.data && config.data.json ?
  config.data.json :
  '/.database/data.json'

export const getBlogData = () => {
  return get(sourcePath)
}
