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
import MBTHanh from './components/pages/MB-Thanh.tsx';
import BETuan from './components/pages/BE-Tuan.tsx';
import BEVuong from './components/pages/BE-Thien.tsx';
import Coming from './components/pages/Coming.tsx';

export const menuList = [
  {
    id: 1,
    path: '/shark-code',
    label: 'Quy (FE)',
    element: <FEQuy />,
  },
  {
    id: 2,
    path: '/shark-code/phung-pm',
    label: 'Phung (PM)',
    element: <POPhung />,
  },
  {
    id: 3,
    path: '/shark-code/thanh-mb',
    label: 'Thanh (Mobile)',
    element: <MBTHanh />,
  },
  {
    id: 4,
    path: '/shark-code/tuan-be',
    label: 'Tuan (BE)',
    element: <BETuan />,
  },
  {
    id: 5,
    path: '/shark-code/vuong-be',
    label: 'Thien (BE)',
    element: <BEVuong />,
  },
  {
    id: 6,
    path: '/shark-code/dev-ops',
    label: 'DevOps',
    element: <Coming />,
  },
  {
    id: 7,
    path: '/shark-code/qc',
    label: 'QC-QA',
    element: <Coming />,
  },
  {
    id: 8,
    path: '/shark-code/designer',
    label: 'UI-UX',
    element: <Coming />,
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
