import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import headerSliderSlice from "./headerSliderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurantSlider: headerSliderSlice,
  },
});

export default store;
