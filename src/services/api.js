import axios from 'axios'

const getHeaderConfig = function () {
  const headers = {
    Accept: 'application/json',
  }
  return headers
}

const api = {
  get(url) {
    return axios.get(url, {
      headers: getHeaderConfig(),
    })
  },
}

export default api
