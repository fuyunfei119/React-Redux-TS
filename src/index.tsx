import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { CustomerList } from './sales/page/customer.list';
import { store } from './sales/store/customer.store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomerList></CustomerList>
    </Provider>
  </React.StrictMode>
);