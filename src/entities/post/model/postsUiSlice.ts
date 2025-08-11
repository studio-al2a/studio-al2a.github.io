import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PostsUIState {
  editingPostId: string | null;
}

const initialState: PostsUIState = {
  editingPostId: null,
};

const postsUiSlice = createSlice({
  name: 'postsUI',
  initialState,
  reducers: {
    setEditingPostId(state, action: PayloadAction<string | null>) {
      state.editingPostId = action.payload;
    },
    resetEditingPostId(state) {
      state.editingPostId = null;
    },
  },
});

export const { setEditingPostId, resetEditingPostId } = postsUiSlice.actions;
export default postsUiSlice.reducer;
