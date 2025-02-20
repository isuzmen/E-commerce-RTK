import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
    if (localStorage.getItem("card")) {
        return JSON.parse(localStorage.getItem("card"));
    }
    return [];
};

const initialState = {
    products: getBasketFromStorage(),
    totalAmount: 0
};

const writeFromBasketToStorage = (card) => {
    localStorage.setItem("card", JSON.stringify(card));
};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findItem = state.products.find((product) => product.id === action.payload.id);
            if (findItem) {
                findItem.count += action.payload.count;
            } else {
                state.products = [...state.products, action.payload];
            }
            writeFromBasketToStorage(state.products);
        },
        removeFromBasket: (state,action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id)
            state.totalAmount = 0;
            state.products.forEach(product => {
            state.totalAmount += product.price * product.count;
            });
            writeFromBasketToStorage(state.products);
        },
        clearBasket: (state) => {
            if (state.products.length > 0) {
            state.products = []
            writeFromBasketToStorage(state.products);
            }
        },
        calcBasket: (state) => {
            state.totalAmount = 0
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count
            })
        }
    }
});

export const { addToBasket, removeFromBasket, clearBasket, calcBasket } = cardSlice.actions;
export default cardSlice.reducer;
