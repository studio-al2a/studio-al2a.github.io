import ThemeSwitcher from '@shared/components/ThemeSwitcher';

const Footer = () => {
  return (
    <footer className='p-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm flex flex-col sm:flex-row justify-between items-center gap-4'>
      <span>© {new Date().getFullYear()} My App. All rights reserved.</span>
      <ThemeSwitcher />
    </footer>
  );
};

export default Footer;
