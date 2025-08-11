import type { Meta, StoryObj } from '@storybook/react-vite';

import type { Post } from '@entities/post/model/Post';

import PostItem from './PostItem';

const meta: Meta<typeof PostItem> = {
  title: 'Entities/PostItem',
  component: PostItem,
};

export default meta;

type Story = StoryObj<typeof PostItem>;

const examplePost: Post = {
  id: '1',
  name: 'MacBook Pro 16"',
  price: 299990,
  category: 'Ноутбуки',
  _links: {
    update: { href: '/api/posts/1' },
    delete: { href: '/api/posts/1' },
  },
};

export const Default: Story = {
  args: {
    post: examplePost,
    onEdit: () => alert('Редактировать'),
    onDelete: href => alert(`Удалить ${href}`),
    isDeleting: false,
  },
};

export const Deleting: Story = {
  args: {
    ...Default.args,
    isDeleting: true,
  },
};

export const NoDelete: Story = {
  args: {
    post: {
      ...examplePost,
      _links: { update: { href: '/api/posts/1' } }, // без delete
    },
    onEdit: () => alert('Редактировать'),
    onDelete: href => alert(`Удалить ${href}`),
    isDeleting: false,
  },
};

export const NoUpdate: Story = {
  args: {
    post: {
      ...examplePost,
      _links: { delete: { href: '/api/posts/1' } }, // без update
    },
    onEdit: () => alert('Редактировать'),
    onDelete: href => alert(`Удалить ${href}`),
    isDeleting: false,
  },
};
