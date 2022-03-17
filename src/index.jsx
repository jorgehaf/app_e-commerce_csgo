import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import App from './app';

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
