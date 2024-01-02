import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  departure: {},
  destination: {},
  weight: 0.5,
}; 

export const orderBoxSlice = createSlice({
  name: "orderBox",
  initialState: {
    orderBox: initialStateValue,
  },
  reducers: {
    setOrderBoxData: (state, action) => {
      state.orderBox = action.payload;
    },
  },
});


export const { setOrderBoxData } = orderBoxSlice.actions;
export default orderBoxSlice.reducer;