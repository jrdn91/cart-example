import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from '../../types/cart'

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCartItem, clearCart } = cartSlice.actions

export default cartSlice.reducer