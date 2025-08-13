import { FaGlobe } from 'react-icons/fa';

import type { Token } from '@entities/token/model/Token';

interface TokenItemProps {
  token: Token;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const TokenItem = ({ token }: TokenItemProps) => (
  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-700 py-6 px-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 rounded-lg'>
    <div className='mb-2 sm:mb-0 break-words flex-1 flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          {token.image_url && (
            <img
              src={token.image_url}
              alt={token.name}
              className='w-10 h-10 rounded-full object-cover'
            />
          )}
          <div>
            <span className='text-lg font-semibold text-gray-900 dark:text-white'>
              {token.name}
            </span>
            <div className='text-sm text-gray-600 dark:text-gray-400'>
              {token.token_name}
            </div>
          </div>
        </div>
        {/* Правая часть рядом с названием */}
        <div className='text-sm font-medium text-gray-700 dark:text-gray-300'>
          {token.website_url && (
            <a
              href={token.website_url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline'
            >
              <FaGlobe size={14} />
            </a>
          )}
        </div>
      </div>
      {token.description && (
        <div className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
          {token.description}
        </div>
      )}
      <div className='flex items-center justify-between mt-3 sm:mt-0 gap-4'>
        {token.exchange_icon_url && (
          <div className='w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
            <img
              src={token.exchange_icon_url}
              alt='Exchange icon'
              className='w-7 h-7 object-contain'
            />
          </div>
        )}

        {token.url && (
          <a
            href={token.url}
            target='_blank'
            rel='noopener noreferrer'
            className='
      px-4 py-2 
      text-sm font-semibold
      text-white 
      rounded-lg
      bg-gradient-to-r from-green-500 to-green-600
      hover:from-green-600 hover:to-green-700
      shadow-md
      transition-all duration-200
      flex items-center justify-center
    '
          >
            Buy
          </a>
        )}
      </div>
      <div className='text-xs text-gray-400 dark:text-gray-500 mt-2'>
        Created: {formatDate(token.created_at)}
      </div>
    </div>
  </div>
);

export default TokenItem;
