import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      state.value += action.payload;
    },
    removeItemFromBasket: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

// SELECTOR
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
