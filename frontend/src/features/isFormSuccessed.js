import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const isFormSuccessed = createSlice({
  name: "isFormSuccessed",
  initialState: {
    isFormSuccessed: initialStateValue,
  },
  reducers: {
    toggleIsFormSuccessed: (state, action) => {
      state.isFormSuccessed = action.payload.value;
    },
  },
});

export const { toggleIsFormSuccessed } = isFormSuccessed.actions;
export default isFormSuccessed.reducer;
