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
  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-700 py-3 px-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'>
    <div className='mb-2 sm:mb-0 break-words flex-1'>
      <div className='flex items-center gap-2'>
        {token.image_url && (
          <img
            src={token.image_url}
            alt={token.name}
            className='w-8 h-8 rounded-full object-cover'
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
      {token.description && (
        <div className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
          {token.description}
        </div>
      )}
      <div className='text-xs text-gray-400 dark:text-gray-500 mt-1'>
        Создан: {formatDate(token.created_at)}
        {token.updated_at !== token.created_at && (
          <span className='ml-2'>Обновлен: {formatDate(token.updated_at)}</span>
        )}
      </div>
    </div>
  </div>
);

export default TokenItem;
