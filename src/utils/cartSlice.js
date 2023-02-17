import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["banana"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    remaoveItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, remaoveItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
