import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@pages/Home';
import NotFoundPage from '@pages/NotFound';
import Layout from '@shared/components/Layout';
import { ROOT_PAGE, NOT_FOUND_PAGE } from '@shared/constants/routes';

export const router = createBrowserRouter(
  [
    {
      path: ROOT_PAGE,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: NOT_FOUND_PAGE,
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: '/client-al2a',
  }
);
