import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  PostsListResponse,
  PostsListData,
  Post,
} from '@entities/post/model/Post';
import type { PostQueryParams } from '@entities/post/model/PostQueryParams';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.0.105:5050/api/v1/' }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getPosts: builder.query<PostsListData, PostQueryParams>({
      query: params => ({
        url: 'posts',
        params,
      }),
      transformResponse: (response: PostsListResponse) => response.data,
      providesTags: result =>
        result
          ? [
              ...result.posts.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: data => ({
        url: 'posts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    updatePost: builder.mutation<Post, { href: string; data: Partial<Post> }>({
      query: ({ href, data }) => ({
        url: href, // href должен быть относительным URL (например 'posts/123')
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: result =>
        result
          ? [
              { type: 'Posts', id: result.id },
              { type: 'Posts', id: 'LIST' }, // если надо обновлять список целиком
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    deletePost: builder.mutation<void, string>({
      query: href => ({
        url: href, // href — относительный путь
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, href) => {
        // извлекаем ID поста из href (например 'posts/123')
        const id = href.split('/').pop();
        return id
          ? [
              { type: 'Posts', id },
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }];
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
