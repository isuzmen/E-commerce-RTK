import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    productStatus : "idle"
}

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products")
    return response.data
})

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            state.productStatus = "loading"
        })
        .addCase(getAllProducts.fulfilled, (state,action)=> {
            state.productStatus ="succeeded"
            state.products = action.payload
        })
        .addCase(getAllProducts.rejected,(state)=> {
            state.productStatus ="fail"
        })
    }
})

export default productSlice.reducer;