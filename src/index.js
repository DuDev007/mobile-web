import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)  } >
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

