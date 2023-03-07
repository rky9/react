import { createSlice } from "@reduxjs/toolkit";

const headerSliderSlice = createSlice({
  name: "headerSlider",
  initialState: {
    sliderData: [],
  },
  reducers: {
    resturantList: (state, action) => {
      //state.sliderData.push(action.payload);
      state.sliderData = action.payload;
    },
  },
});

export default headerSliderSlice.reducer;
export const { resturantList } = headerSliderSlice.actions;
