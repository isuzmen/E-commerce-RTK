import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productDetail : [],
    productDetailStatus: "idle"
}

export const getProductDetail = createAsyncThunk("getProductDetail",async (id) => {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    return response.data
})

const productDetailSlice = createSlice({
    name : "productDetail",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProductDetail.pending, (state)=> {
            state.productDetailStatus = "loading"
        })
        .addCase(getProductDetail.fulfilled, (state,action)=> {
            state.productDetailStatus ="succeeded"
            state.productDetail = action.payload
        })
        .addCase(getProductDetail.rejected,(state)=> {
            state.productDetailStatus ="fail"
        })
    }
})

export default productDetailSlice.reducer;