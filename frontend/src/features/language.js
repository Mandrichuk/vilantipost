import { createSlice } from '@reduxjs/toolkit';

export const initialStateValue = "en";

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: initialStateValue,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;