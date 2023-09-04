import { Cart } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart functionality
    addToCart(state,action){
      let newObj = {...action.payload}
      state.push(newObj)
    },
    // delete from cart
    deleteItem(state, {payload} ){
      return state.filter((val)=>val.id !== payload)
    },
    // to increment product quantity
    incrementQuantity(state,action){
      let obj = state.find((val)=>
        val.discount == action.payload.discount &&
        val.alt == action.payload.alt &&
        val.product_name == action.payload.product_name
      )
      if (obj){
        ++obj.quantity
        let newState = state.filter((val)=> val.id == obj?.id)
        state = [...newState,obj]
        return;
      }
    },
    // to decrement product quantity
    decrementQuantity(state,action){
      let obj = state.find((val)=>
        val.discount == action.payload.discount &&
        val.alt == action.payload.alt &&
        val.product_name == action.payload.product_name
      )
      if (obj){
        if (obj.quantity<=1){
          return state.filter((val)=> val.id == obj?.id)
        }
        --obj.quantity
        let newState = state.filter((val)=> val.id == obj?.id)
        state = [...newState,obj]
        return;
      }
    }
  },
})

export const { addToCart, deleteItem, decrementQuantity, incrementQuantity } = cartSlice.actions


export default cartSlice.reducer