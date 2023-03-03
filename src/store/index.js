import {configureStore} from '@reduxjs/toolkit'
import UiSlice from './slices/UiSlice'
import CartSlice from './slices/CartSlice'
const store= configureStore({
  reducer: {ui: UiSlice.reducer, cart: CartSlice.reducer}
})

export default store;