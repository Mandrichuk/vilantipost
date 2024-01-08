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
      console.log(value);

      switch (type) {
        case "UPDATE_FROM_FORM_DATA":
          state.formsData.formFromClient = {...value};
          console.log(JSON.stringify(state));
          break;
        case "UPDATE_TO_FORM_DATA":
          state.formsData.formToClient = value;
          break;
        case "UPDATE_SHIPPING_FORM_DATA":
          state.formsData.shippingForm = value;
          break;
        case "UPDATE_PAYMENT_FORM_DATA":
          state.formsData.paymentForm = value;
          break;
      }
    },
    annulData: (state) => {
      // state.formFromClient = initialStateValue;
    },
  },
});

export const { setFormData, annulData } = formsClient.actions;
export default formsClient.reducer;
