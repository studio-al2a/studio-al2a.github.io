import { combineReducers } from '@reduxjs/toolkit';

import { postsApi } from '@entities/post/api/postApi';
import postsUiReducer from '@entities/post/model/postsUiSlice';

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer, // Server state
  postsUI: postsUiReducer, // UI state
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
