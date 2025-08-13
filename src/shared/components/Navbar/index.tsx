import { NavLink } from 'react-router-dom';

import logo from '@assets/al2a.png';

const Navbar = () => {
  return (
    <header className='bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Логотип слева */}
        <NavLink to='/'>
          <img
            src={logo}
            alt='STUDIO AL2A Logo'
            className='w-10 h-10 rounded-full'
          />
        </NavLink>

        {/* Навигация справа */}
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
            to='/tokens'
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }
          >
            Tokens
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
