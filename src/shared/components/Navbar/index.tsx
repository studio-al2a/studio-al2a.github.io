import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>
      <div className='text-xl font-bold'>My App</div>

      <nav
        className='flex space-x-4'
        role='navigation'
        aria-label='Main navigation'
      >
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'text-primary-600 dark:text-primary-400 font-semibold'
              : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'text-primary-600 dark:text-primary-400 font-semibold'
              : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
