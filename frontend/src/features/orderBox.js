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
    annulData: (state) => {
      state.orderBox = initialStateValue;
    }
  },
});


export const { setOrderBoxData, annulData } = orderBoxSlice.actions;
export default orderBoxSlice.reducer;