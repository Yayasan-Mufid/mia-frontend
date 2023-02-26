import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListMenu } from '@/types/sidebar';
import { RootState } from '@/store/store';
import { listsMenu } from '@/services/menu/icon-lists';

const initialState: ListMenu[] = listsMenu.map((value) => {
  const { icon, ...data } = value;
  return data;
});

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const editedIndex = state.findIndex((value) => value.label === payload);
      state[editedIndex].initiallyOpened = !state[editedIndex].initiallyOpened;
      return state;
    },
  },
});

export const getAllSidebar = (state: RootState) => state.reducer;
export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
