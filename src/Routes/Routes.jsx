import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../pages/Book/Root/Root';
import Navber from '../component/Navber/Navber';
import Bannar from '../component/Footer/Footer';
import ErrorPages from '../pages/Book/ErrorPages/ErrorPages';
import Home from '../pages/Home/Home';
import Card from '../component/Card/Card';
import Instaillation from '../component/Instaillation/Instaillation'
import CardDetails from '../component/CardDetails/CardDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
        {
            path: "/",
            Component: Home,
        },
        {
           path: "Card",
           Component: Card,
        },
        {
          path: "card/:cardId",
          Component: CardDetails,
        },
        {
          path: "instaillation",
          Component: Instaillation,
        },
    ]
  },
]);
