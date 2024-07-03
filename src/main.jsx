import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './assets/css/style.css';
import './assets/css/responsive.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FEQuy from './components/pages/FE-Quy.tsx';
import POPhung from './components/pages/PO-Phung.tsx';

export const menuList = [
  {
    id: 1,
    path: '/shark-code',
    label: 'Phung - BO',
    element: <POPhung />,
  },
  {
    id: 2,
    path: '/dev-quylk',
    label: 'Quy - FE',
    element: <FEQuy />,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: menuList.map((el) => ({
      path: el.path,
      element: el.element,
    })),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
