import axios from 'axios'

const handleResponse = (fetchPromise) => {
  return fetchPromise.then(res => {
    if (res.status === 200) {
      return res.data
    } else {
      return Promise.reject(res.data)
    }
  }, err => {
    return Promise.reject(err)
  })
}


const get = async (url, payload, config) => {
  return await handleResponse(axios.get(url, Object.assign({}, { params: payload }, config)))
}

export {
  get
}

export default {
  get
}
