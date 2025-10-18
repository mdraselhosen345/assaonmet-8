import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Book/Root/Root';
import Navber from '../component/Navber/Navber';
import Bannar from '../component/Footer/Footer';
import ErrorPages from '../pages/Book/ErrorPages/ErrorPages';
import Home from '../pages/Home/Home';





export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        },
    
    ]
  },
]);
