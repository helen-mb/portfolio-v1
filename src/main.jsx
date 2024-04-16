import React from 'react';
import ReactDOM from 'react-dom/client';
//styles
import './index.css';
import { theme } from './theme.jsx';
//Router
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
//Mantine
import '@mantine/core/styles.css';
import { MantineProvider, Loader } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider
        router={router}
        fallbackElement={<Loader color="blue" size="xl" type="dots" />}
      />
    </MantineProvider>
  </React.StrictMode>
);
