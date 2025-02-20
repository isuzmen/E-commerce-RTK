import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { startLoading, stopLoading } from "./loadingSlice"; 

const initialState = {
    products: [],
    productStatus : "idle"
};

export const getAllProducts = createAsyncThunk("getAllProducts", async (_, { dispatch }) => {
    dispatch(startLoading()); 
    try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        return response.data;
    } finally {
        dispatch(stopLoading()); 
    }
});

export const getByCategory = createAsyncThunk("getByCategory", async (id, { dispatch }) => {
    dispatch(startLoading());
    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`);
        return response.data;
    } finally {
        dispatch(stopLoading());
    }
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.productStatus = "succeeded";
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state) => {
            state.productStatus = "fail";
        })
        .addCase(getByCategory.fulfilled, (state, action) => {
            state.productStatus = "succeeded";
            state.products = action.payload;
        })
        .addCase(getByCategory.rejected, (state) => {
            state.productStatus = "fail";
        });
    }
});

export default productSlice.reducer;
