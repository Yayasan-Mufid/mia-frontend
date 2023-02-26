import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { NotificationInterface, NotificationColor } from '@/types/notification';

const initialState: NotificationInterface = {
  show: false,
  title: '',
  description: '',
  color: NotificationColor.blue,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationInterface>) => {
      const { payload } = action;
      return payload;
    },
    toggleNotification: (state) => {
      const { show, ...data } = state;
      return {
        show: !show,
        ...data,
      };
    },
  },
});

export const getExistNotification = (state: RootState) => state.reducer;
export const { setNotification, toggleNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
