import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Login from './view/Login';
import * as theme from './config/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
