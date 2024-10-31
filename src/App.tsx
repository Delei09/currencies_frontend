import './App.css';

import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './route';

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
