import type { Post } from '@entities/post/model/Post';

interface PostItemProps {
  post: Post;
  onEdit: () => void;
  onDelete: (href: string) => void;
  isDeleting: boolean;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2,
  }).format(price);
};

const PostItem = ({ post, onEdit, onDelete, isDeleting }: PostItemProps) => (
  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between border-b py-3 px-2'>
    {/* Левая часть с данными */}
    <div className='mb-2 sm:mb-0 break-words'>
      <span className='text-lg font-semibold'>{post.name}</span>
      <div className='text-gray-600'>{formatPrice(post.price)}</div>
      {post.category && (
        <div className='text-sm text-gray-500'>Категория: {post.category}</div>
      )}
    </div>

    {/* Правая часть с кнопками */}
    <div className='flex space-x-2 justify-start sm:justify-end flex-wrap gap-2'>
      {post._links.update && (
        <button
          type='button'
          onClick={onEdit}
          className='rounded bg-blue-500 px-3 py-1.5 text-sm text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
          aria-label={`Редактировать ${post.name}`}
        >
          Редактировать
        </button>
      )}

      {post._links.delete && (
        <button
          type='button'
          onClick={() => onDelete(post._links.delete!.href)}
          disabled={isDeleting}
          aria-disabled={isDeleting}
          aria-label={`Удалить ${post.name}`}
          className={`rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 ${
            isDeleting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600 focus:ring-red-400'
          }`}
        >
          {isDeleting ? (
            <svg
              className='h-5 w-5 animate-spin mx-auto'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8v8H4z'
              ></path>
            </svg>
          ) : (
            'Удалить'
          )}
        </button>
      )}
    </div>
  </div>
);

export default PostItem;
