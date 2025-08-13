import { createBrowserRouter } from 'react-router-dom';

import AboutPage from '@pages/About';
import HomePage from '@pages/Home';
import NotFoundPage from '@pages/NotFound';
import TokensPage from '@pages/Tokens';
import Layout from '@shared/components/Layout';
import {
  ROOT_PAGE,
  NOT_FOUND_PAGE,
  ABOUT_PAGE,
  TOKENS_PAGE,
} from '@shared/constants/routes';

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
          path: TOKENS_PAGE,
          element: <TokensPage />,
        },
        {
          path: ABOUT_PAGE,
          element: <AboutPage />,
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
