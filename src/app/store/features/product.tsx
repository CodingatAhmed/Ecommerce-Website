import { Product } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'
import { all_products } from '@/utils/mock'

// Define a type for the slice state
// Define the initial state using that type
const initialState: Product[] = all_products 

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
})

export const { } = productSlice.actions


export default productSlice.reducer