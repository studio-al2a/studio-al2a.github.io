import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TokensUIState {
  editingTokenId: string | null;
  selectedTokens: string[];
}

const initialState: TokensUIState = {
  editingTokenId: null,
  selectedTokens: [],
};

const tokensUiSlice = createSlice({
  name: 'tokensUI',
  initialState,
  reducers: {
    setEditingTokenId(state, action: PayloadAction<string | null>) {
      state.editingTokenId = action.payload;
    },
    resetEditingTokenId(state) {
      state.editingTokenId = null;
    },
    toggleTokenSelection(state, action: PayloadAction<string>) {
      const tokenId = action.payload;
      const index = state.selectedTokens.indexOf(tokenId);
      if (index >= 0) {
        // Если токен уже выбран, убрать из выбора
        state.selectedTokens.splice(index, 1);
      } else {
        // Если токен не выбран, добавить в выбор
        state.selectedTokens.push(tokenId);
      }
    },
    clearTokenSelection(state) {
      state.selectedTokens = [];
    },
  },
});

export const {
  setEditingTokenId,
  resetEditingTokenId,
  toggleTokenSelection,
  clearTokenSelection,
} = tokensUiSlice.actions;

export default tokensUiSlice.reducer;
