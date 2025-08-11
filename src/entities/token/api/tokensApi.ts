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
  }),
});

export const { useGetTokensQuery } = tokensApi;
