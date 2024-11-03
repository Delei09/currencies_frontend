import { createBrowserRouter } from 'react-router-dom';

import { CreateUser } from '../pages/CreateUser';
import { Login } from '../pages/Login';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

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
    path: "/favorites",
    element: <Favorites/>,
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