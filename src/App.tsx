import './App.css';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './global/theme';
import { router } from './route';
import { UserProvider } from './context/user';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
      <Toaster />
    </ThemeProvider>
  );
}
