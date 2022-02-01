import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store/Store';
import reportWebVitals from './reportWebVitals';
import {  Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={Store}>
        <Router>
              <App />
        </Router>
        </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
