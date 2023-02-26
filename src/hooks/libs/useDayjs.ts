import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/id';
dayjs.locale('id');
dayjs.extend(utc);
dayjs.extend(timezone);

export const useDayjs = () => {
  return {
    dayjs,
  };
};
