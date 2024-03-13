import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './features/language';
import orderBoxReducer from './features/orderBox';
import formsClientReducer from './features/formsClient';
import isFormSuccessedRecucer from './features/isFormSuccessed';
import isAdminLogginedReducer from './features/isAdminLoggined';

const store = configureStore({
  reducer: {
    language: languageReducer,
    orderBox: orderBoxReducer,
    formsClient: formsClientReducer,
    isFormSuccessed: isFormSuccessedRecucer,
    isAdminLoggined: isAdminLogginedReducer
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


