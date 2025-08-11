import { TokensList } from '@entities/token/ui';

const HomePage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
          Список токенов
        </h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Просматривайте ваши токены
        </p>
      </div>
      <TokensList />
    </div>
  );
};

export default HomePage;
