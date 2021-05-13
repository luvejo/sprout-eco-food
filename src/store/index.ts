import { createStore } from 'vuex'
import { getCurrentPrice } from '@/utils'
import { ShoppingCartItem } from '@/types'

export default createStore({
  state: {
    shoppingCart: [] as ShoppingCartItem[],
  },

  getters: {
    shoppingCartTotal (state) {
      const reducer = (total: number, item: ShoppingCartItem) => {
        const currentPrice = getCurrentPrice(item.price)

        if (currentPrice) {
          return total + currentPrice * item.quantity
        }
        return total
      }

      return state.shoppingCart.reduce(reducer, 0)
    },
  },

  actions: {
    addProductToCart ({ state, commit }, product: ShoppingCartItem) {
      const existingItem = state.shoppingCart.find(
        item => item.id === product.id,
      )

      if (existingItem) {
        commit('incrementProductQuantity', product)
      } else {
        commit('addProductToCart', product)
      }
    },

    removeProductFromCart ({ commit }, id) {
      commit('removeProductFromCart', { id })
    },

    incrementProductQuantity ({ commit }, id) {
      commit('incrementProductQuantity', { id })
    },

    decrementProductQuantity ({ state, commit }, id) {
      const item = state.shoppingCart.find(item => item.id === id)

      if (item && item.quantity > 1) {
        commit('decrementProductQuantity', { id })
      }
    },
  },

  mutations: {
    addProductToCart (state, product: ShoppingCartItem) {
      product.quantity = 1
      state.shoppingCart.push(product)
    },

    removeProductFromCart (state, { id }) {
      const productIndex = state.shoppingCart.findIndex(item => item.id === id)
      state.shoppingCart.splice(productIndex, 1)
    },

    incrementProductQuantity (state, { id }) {
      const productIndex = state.shoppingCart.findIndex(item => item.id === id)
      state.shoppingCart[productIndex].quantity++
    },

    decrementProductQuantity (state, { id }) {
      const productIndex = state.shoppingCart.findIndex(item => item.id === id)
      state.shoppingCart[productIndex].quantity--
    },
  },
})
