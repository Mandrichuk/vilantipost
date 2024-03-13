import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const isAdminLoggined = createSlice({
  name: "isAdminLoggined",
  initialState: {
    isAdminLoggined: initialStateValue,
  },
  reducers: {
    toggleIsAdminLoggined: (state, action) => {
      state.isAdminLoggined = action.payload.value;
    },
  },
});

export const { toggleIsAdminLoggined } = isAdminLoggined.actions;
export default isAdminLoggined.reducer;
