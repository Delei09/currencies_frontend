import { createBrowserRouter } from 'react-router-dom';

import { CreateUser } from '../pages/CreateUser';
import { Login } from '../pages/Login';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home/>,
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