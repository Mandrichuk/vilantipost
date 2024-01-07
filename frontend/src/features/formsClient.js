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
    recipient: "",
    country: {},
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  },
  shippingForm: {
    adressInput: "",
  },
  paymentForm: {
    contactAfter: false,
    acceptRules: false,    
  },
};

export const formsClient = createSlice({
  name: "formsClient",
  initialState: {
    formsData: initialStateValue,
  },
  reducers: {
    setFormData: (state, action) => {
      const { type, value } = action.payload;

      switch (type) {
        case "UPDATE_FROM_FORM_DATA":
          state.formsData.formFromClient = value;
        case "UPDATE_TO_FORM_DATA":
          state.formsData.formToClient = value;
        case "UPDATE_SHIPPING_FORM_DATA":
          state.formsData.shippingForm = value;
        case "UPDATE_PAYMENT_FORM_DATA":
          state.formsData.paymentForm = value;
      }
    },
    annulData: (state) => {
      // state.formFromClient = initialStateValue;
    },
  },
});

export const { setFormData, annulData } = formsClient.actions;
export default formsClient.reducer;
