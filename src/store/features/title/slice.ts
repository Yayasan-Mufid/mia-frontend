import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const initialState = {
  title: 'Home Webpage',
};

const webTitleSlice = createSlice({
  name: 'webTitle',
  initialState,
  reducers: {
    editTitle: (state, actions) => {
      const { payload } = actions;
      state.title = payload.title;
      return state;
    },
  },
});

export const getTitle = (state: RootState) => state.reducer;
export const { editTitle } = webTitleSlice.actions;

export default webTitleSlice.reducer;
