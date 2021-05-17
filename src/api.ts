import axios from 'axios'

const BASE_URL = process.env.VUE_APP_API_BASE_URL

axios.defaults.baseURL = `${BASE_URL}/api`
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

async function callAPI (endpoint: string, options: any = {}) {
  return await axios({ url: endpoint, ...options })
    .then(res => res.data)
    .catch(err => err.response.data)
}

const api = {
  news: {
    getLatest () {
      return callAPI('/news/latest')
    },
  },

  products: {
    listDiscounted () {
      return callAPI('/products/sale')
    },

    listNew () {
      return callAPI('/products/new')
    },
  },

  recipes: {
    getFeatured () {
      return callAPI('/recipes/featured')
    },
  },
}

export default api
