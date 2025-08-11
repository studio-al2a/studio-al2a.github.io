import ThemeSwitcher from '@shared/components/ThemeSwitcher';

const Footer = () => {
  return (
    <footer className='p-4 border-t border-gray-200 dark:border-gray-700 text-sm'>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='text-gray-600 dark:text-gray-400'>
          © {new Date().getFullYear()} Token Manager. All rights reserved.
        </span>
        <ThemeSwitcher />
      </div>
    </footer>
  );
};

export default Footer;
