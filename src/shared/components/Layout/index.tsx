import { Outlet } from 'react-router-dom';

import Footer from '@shared/components/Footer';
import Navbar from '@shared/components/Navbar';
import { PWAInstallGuide } from '@shared/components/PWAInstallGuide';
import { usePWAInstallGuide } from '@shared/hooks/usePWAInstallGuide';

const Layout = () => {
  const { showGuide, handleClose } = usePWAInstallGuide();

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col'>
      <Navbar />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />

      {showGuide && <PWAInstallGuide onClose={handleClose} />}
    </div>
  );
};

export default Layout;
