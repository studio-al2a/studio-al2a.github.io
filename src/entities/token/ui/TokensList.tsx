import { useGetTokensQuery } from '@entities/token/api/tokensApi';

import TokenItem from './TokenItem';

const TokensList = () => {
  const {
    data: tokens = [],
    isLoading,
    error,
  } = useGetTokensQuery({ limit: 50 });

  if (isLoading) {
    return (
      <div className='flex justify-center items-center py-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center py-8'>
        <div className='text-red-500 dark:text-red-400 text-lg mb-2'>
          Ошибка загрузки токенов
        </div>
        <div className='text-gray-600 dark:text-gray-400'>
          Попробуйте обновить страницу
        </div>
      </div>
    );
  }

  if (tokens.length === 0) {
    return (
      <div className='text-center py-8'>
        <div className='text-gray-500 dark:text-gray-400 text-lg'>
          Токены не найдены
        </div>
        <div className='text-gray-400 dark:text-gray-500'>
          Создайте первый токен
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'>
      {tokens.map(token => (
        <TokenItem key={token.id} token={token} />
      ))}
    </div>
  );
};

export default TokensList;
