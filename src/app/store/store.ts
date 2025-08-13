import { configureStore } from '@reduxjs/toolkit';

import { tokensApi } from '@entities/token/api/tokensApi';

import rootReducer from '../rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokensApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
