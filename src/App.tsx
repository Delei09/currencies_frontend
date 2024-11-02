import './App.css';

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './global/theme';
import { router } from './route';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
