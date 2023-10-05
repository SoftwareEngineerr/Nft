import React from 'react';
import { Outlet, Navigate } from 'react-router';
import { Home } from '../veiws/home/home';
import { Sidemenu } from '../layout/full/sidemenu/sidemenu';
import { Header } from '../layout/full/header';

export const router = [
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Sidemenu />
          <Outlet />
        </main>
      </>
    ),
    children: [
      { path: '/', element: <Navigate to="/Home" /> },
      { path: '/Home', element: <Home /> },
    ],
  },
];
