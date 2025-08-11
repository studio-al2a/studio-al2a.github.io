import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
              Token Manager
            </h1>

            <nav
              className='flex space-x-4'
              role='navigation'
              aria-label='Main navigation'
            >
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }
              >
                Home
              </NavLink>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-600 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
                }
              >
                About
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
