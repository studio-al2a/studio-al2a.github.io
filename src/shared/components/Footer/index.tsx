import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

import ThemeSwitcher from '@shared/components/ThemeSwitcher';
import { SOCIAL_LINKS } from '@shared/constants/socialLinks';

const Footer = () => {
  return (
    <footer className='p-4 border-t border-gray-200 dark:border-gray-700 text-sm'>
      <div className='container mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0'>
        {/* Левый блок – соцсети */}
        <div className='flex items-center gap-4'>
          <a
            href={SOCIAL_LINKS.twitter}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
          >
            <SiX size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.telegram}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
          >
            <FaTelegramPlane size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors'
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Центральный блок – копирайт */}
        <span className='text-gray-600 dark:text-gray-400 text-center'>
          © {new Date().getFullYear()} STUDIO AL2A. All rights reserved.
        </span>

        {/* Правый блок – переключатель темы */}
        <div className='flex justify-center sm:justify-end w-full sm:w-auto'>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
