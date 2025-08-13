// src/shared/api/tokenApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TokensListResponse, Token } from '@entities/token/model/Token';
import type { TokensQueryParams } from '@entities/token/model/TokenQueryParams';

export const tokensApi = createApi({
  reducerPath: 'tokensApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://al2a.pythonanywhere.com/api/',
  }),
  tagTypes: ['Tokens'],
  endpoints: builder => ({
    getTokens: builder.query<Token[], TokensQueryParams>({
      query: params => ({
        url: 'tokens',
        params,
      }),
      transformResponse: (response: TokensListResponse) => response.data,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tokens' as const, id })),
              { type: 'Tokens', id: 'LIST' },
            ]
          : [{ type: 'Tokens', id: 'LIST' }],
    }),
    getNewTokens: builder.query<Token[], { since: string }>({
      query: ({ since }) => ({ url: 'tokens', params: { since } }),
      transformResponse: (response: TokensListResponse) => response.data,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data: newTokens } = await queryFulfilled;
          if (newTokens.length > 0) {
            dispatch(
              tokensApi.util.updateQueryData(
                'getTokens',
                { limit: 50 },
                draft => {
                  const existingIds = new Set(draft.map(t => t.id));
                  newTokens.forEach(token => {
                    if (!existingIds.has(token.id)) {
                      draft.unshift(token);
                    }
                  });
                }
              )
            );
          }
        } catch {
          // Ошибка при получении новых токенов, ничего не делаем
        }
      },
    }),
  }),
});

export const { useGetTokensQuery, useGetNewTokensQuery } = tokensApi;
