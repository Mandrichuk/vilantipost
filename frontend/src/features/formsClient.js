import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  formFromClient: {
    sender: "",
    country: {},
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  },
  formToClient: {
    sender: "",
    country: {},
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  },
};

export const formsClient = createSlice({
  name: "formsClient",
  initialState: {
    formFromClient: initialStateValue,
  },
  reducers: {
    setFormFromClientData: (state, action) => {
      state.formFromClient = action.payload;
    },
    annulData: (state) => {
      state.formFromClient = initialStateValue;
    },
  },
});

export const { setFormFromClientData, annulData } = formsClient.actions;
export default formsClient.reducer;
