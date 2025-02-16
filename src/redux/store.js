import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import productDetailSlice from './productDetailSlice'

export const store = configureStore({
  reducer: {
    categoriesReducer : categorySlice,  
    products : productSlice,
    productDetail: productDetailSlice
  },
})