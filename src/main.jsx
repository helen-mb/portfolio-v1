import React from 'react';
import ReactDOM from 'react-dom/client';
//styles
import './index.css';
//Router
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
//Mantine
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
      {/* fallbackElement={<BigSpinner />} */}
    </MantineProvider>
  </React.StrictMode>
);
