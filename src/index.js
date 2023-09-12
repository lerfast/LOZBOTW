import React from 'react';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
