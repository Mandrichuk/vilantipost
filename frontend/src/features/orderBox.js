import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  fromWhere: "from",
  toWhere: "to",
  type: "envelope",
  weigth: 0.5,
  fromWhereInputError: false,
  toWhereInputError: false,
}; 

export const orderBoxSlice = createSlice({
  name: "orderBox",
  initialState: {
    orderBoxInfo: initialStateValue,
  },
  reducers: {
    setOrderBoxInfo: (state, action) => {
      state.orderBoxInfo = action.payload;
    },
  },
});


export const { setOrderBoxInfo } = orderBoxSlice.actions;
export default orderBoxSlice.reducer;