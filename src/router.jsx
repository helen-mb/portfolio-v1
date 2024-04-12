import { createBrowserRouter } from 'react-router-dom';
//Components
import Root from './routes/root.jsx';
import ErrorPage from './routes/error-page.jsx';
import HomePage from './routes/home-page.jsx';
import ProjectsPage from './routes/projects-page.jsx';
import AboutPage from './routes/about-page.jsx';
import ContactPage from './routes/contact-page.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);
