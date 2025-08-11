import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { router } from '@app/routes';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
