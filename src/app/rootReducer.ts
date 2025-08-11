import { combineReducers } from '@reduxjs/toolkit';

import { tokensApi } from '@entities/token/api/tokensApi';
import tokensUiReducer from '@entities/token/model/TokensUiSlice';

const rootReducer = combineReducers({
  [tokensApi.reducerPath]: tokensApi.reducer, // Server state
  tokensUI: tokensUiReducer, // UI state
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
