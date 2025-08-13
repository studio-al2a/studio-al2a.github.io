import { useGetTokensQuery } from '@entities/token/api/tokensApi';

import TokenItem from './TokenItem';

const TokensList = () => {
  const {
    data: tokens = [],
    isLoading,
    error,
    refetch, // добавили
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
          Failed to load tokens
        </div>
        <div className='text-gray-600 dark:text-gray-400 mb-4'>
          Try refreshing the page
        </div>
        <button
          onClick={() => refetch()}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Refresh
        </button>
      </div>
    );
  }

  if (tokens.length === 0) {
    return (
      <div className='text-center py-8'>
        <div className='text-gray-500 dark:text-gray-400 text-lg'>
          No tokens found
        </div>
        <div className='text-gray-400 dark:text-gray-500 mb-4'>
          Create your first token
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'>
      <div className='flex justify-end p-2'>
        <button
          onClick={() => refetch()}
          className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Refresh
        </button>
      </div>
      {tokens.map(token => (
        <TokenItem key={token.id} token={token} />
      ))}
    </div>
  );
};

export default TokensList;
