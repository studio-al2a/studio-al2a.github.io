import { Outlet } from 'react-router-dom';

import Footer from '@shared/components/Footer';
import Navbar from '@shared/components/Navbar';

const Layout = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col'>
      <Navbar />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
