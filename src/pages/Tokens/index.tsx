import { TokensList } from '@entities/token/ui';

const TokensPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
          Tokens
        </h1>
      </div>
      <TokensList />
    </div>
  );
};

export default TokensPage;
