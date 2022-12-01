import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppProvider from 'src/contexts/AppContext';
import App from './App';
import { createInterceptors } from 'src/services/api';
import './index.css';
import 'antd/dist/antd.less';

createInterceptors();

ReactDOM.render(
  <AppProvider>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById('root'),
);
