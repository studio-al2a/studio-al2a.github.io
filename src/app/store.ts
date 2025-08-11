import { configureStore } from '@reduxjs/toolkit';

import { postsApi } from '@entities/post/api/postApi';

import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(postsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
