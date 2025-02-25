import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import productDetailSlice from "./productDetailSlice";
import cardSlice from "./cardSlice";
import loadingReducer from "./loadingSlice";
import searchReducer from "./searchSlice";
import authReducer from "./authSlice"; 
import { authApi } from "./authApi"; 

export const store = configureStore({
  reducer: {
    categoriesReducer: categorySlice,
    products: productSlice,
    productDetail: productDetailSlice,
    card: cardSlice,
    loading: loadingReducer,
    search: searchReducer,
    auth: authReducer, 
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
