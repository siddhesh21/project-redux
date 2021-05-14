import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItemFromBasket: (state, action) => {
      // use the id that we passed and remove the item from the basket of that id.
      let copyOfBasket = state.items;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        // Splice the item out of basket
        copyOfBasket.splice(index, 1);
        //  Replace the items in global store (state)
        state.items = copyOfBasket;
      } else {
        alert("WOAH! This item is not in the Basket");
      }
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

// SELECTOR
export const selectItems = (state) => state.basket.items;
// Customize build to have a Selector 'Count' just for your knowing how many items are present in that array.
export const selectItemsCount = (state) => state.basket.items.length;

export default basketSlice.reducer;
