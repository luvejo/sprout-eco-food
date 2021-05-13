export interface InputIcon {
  name: string
  background: boolean
}

export interface IconStyleObject {
  width: string
  height: string
}

export interface ProductPrice {
  name: string
  price: number
}

export interface ShoppingCartItem {
  id: number
  imageURL: string
  name: string
  price: ProductPrice[]
  unit: string
  rate: number
  quantity: number
}
