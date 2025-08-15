const TokenItemSkeleton = () => (
  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-700 py-6 px-6 animate-pulse'>
    <div className='mb-2 sm:mb-0 break-words flex-1 flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600' />
          <div>
            <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2' />
            <div className='h-3 bg-gray-200 dark:bg-gray-500 rounded w-16' />
          </div>
        </div>
        <div className='w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded' />
      </div>
      <div className='h-3 bg-gray-200 dark:bg-gray-500 rounded mt-3 w-full' />
      <div className='flex items-center justify-between mt-3 sm:mt-0 gap-4'>
        <div className='w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600' />
        <div className='w-20 h-8 rounded-lg bg-gray-300 dark:bg-gray-600' />
      </div>
      <div className='h-3 bg-gray-200 dark:bg-gray-500 rounded mt-2 w-32' />
    </div>
  </div>
);

export default TokenItemSkeleton;
