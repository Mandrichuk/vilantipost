import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './features/language';
import darkThemeReducer from './features/darkTheme';
import orderBoxReducer from './features/orderBox';


const store = configureStore({
  reducer: {
    language: languageReducer,
    darkTheme: darkThemeReducer,
    orderBox: orderBoxReducer,
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


