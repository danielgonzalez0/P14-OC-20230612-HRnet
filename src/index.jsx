import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Router from './pages/router/Router';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
