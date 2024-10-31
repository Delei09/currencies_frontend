import { createBrowserRouter } from 'react-router-dom';

import { CreateUser } from '../pages/CreateUser';
import { Login } from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-user",
    element: <CreateUser />,
  },
]);