import data from '@/data'

function mockRequest (data: any): any {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

const api = {
  news: {
    getLatest (): any {
      return mockRequest(data.news)
    },
  },

  products: {
    listDiscounted (): any {
      return mockRequest(data.saleProducts)
    },

    listNew (): any {
      return mockRequest(data.newProducts)
    },
  },

  recipes: {
    getFeatured (): any {
      return mockRequest(data.recipes)
    },
  },
}

export default api
