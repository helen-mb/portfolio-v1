import { createBrowserRouter } from 'react-router-dom';
//Components
import Root from './routes/root.jsx';
import ErrorPage from './routes/error-page.jsx';
import HomePage from './routes/home-page.jsx';
import ProjectsPage from './routes/projects-page.jsx';
import AboutPage from './routes/about-page.jsx';
import DetailsPage from './routes/details-page.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'library',
        element: <ProjectsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'project/:id',
        element: <DetailsPage />,
      },
    ],
  },
]);
// TODO: handle errors and data loading
