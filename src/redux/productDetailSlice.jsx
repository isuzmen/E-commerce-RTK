import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
    productDetail: [],
    productDetailStatus: "idle"
};

export const getProductDetail = createAsyncThunk("getProductDetail", async (id, { dispatch }) => {
    dispatch(startLoading());
    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        return response.data;
    } finally {
        dispatch(stopLoading());
    }
});

const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetailStatus = "succeeded";
            state.productDetail = action.payload;
        })
        .addCase(getProductDetail.rejected, (state) => {
            state.productDetailStatus = "fail";
        });
    }
});

export default productDetailSlice.reducer;
