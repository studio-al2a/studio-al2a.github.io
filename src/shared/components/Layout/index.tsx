import { Outlet } from 'react-router-dom';

import Footer from '@shared/components/Footer';
import Navbar from '@shared/components/Navbar';

const Layout = () => {
  return (
    <div className='min-h-screen transition-colors flex flex-col'>
      <Navbar />

      <main className='flex-1 p-4'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
