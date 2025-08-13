import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[50vh] text-center px-4'>
      <h1 className='text-12xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-900 to-gray-800 mb-4'>
        404
      </h1>
      <Link
        to='/'
        className='px-6 py-3 bg-red-800 text-white rounded hover:bg-red-700 transition-colors'
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
