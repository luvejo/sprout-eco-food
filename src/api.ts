import data from '@/data'

function mockRequest (data: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

const api = {
  news: {
    getLatest () {
      return mockRequest(data.news)
    },
  },

  products: {
    listDiscounted () {
      return mockRequest(data.saleProducts)
    },

    listNew () {
      return mockRequest(data.newProducts)
    },
  },

  recipes: {
    getFeatured () {
      return mockRequest(data.recipes)
    },
  },
}

export default api
