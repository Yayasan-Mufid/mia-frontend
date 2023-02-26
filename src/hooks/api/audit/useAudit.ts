import { useQuery } from '@tanstack/react-query';
import { http } from '@/services/fetcher/axios';
import { useDayjs } from '@/hooks/libs/useDayjs';
import { DateRangePickerValue } from '@mantine/dates';
import { AuditResponse } from '@/types/api/audit';
import { ErrorResponse } from '@/types/api/error';
import { AxiosError, AxiosResponse } from 'axios';
import useNotificationHook from '@/hooks/store/useNotification';

const url = '/api/audit';

const useAudit = (dates: DateRangePickerValue) => {
  const { dayjs } = useDayjs();
  const notification = useNotificationHook();
  const params = {
    start: dayjs(dates[0] ?? new Date()).format('YYYY-MM-DDT00:00:00.00[Z]'),
    end: dayjs(dates[1] ?? new Date(dates[0] as Date)).format(
      'YYYY-MM-DDT23:59:59.468[Z]',
    ),
    num_records: 0,
    page: 0,
  };
  const nullResponse: AuditResponse = {
    id: null,
    application_id: null,
    created_at: null,
    old: null,
    new: null,
    event: null,
    resource: null,
  };

  const {
    data: audit,
    isLoading: loading,
    isError: error,
    refetch,
    isRefetching,
  } = useQuery<AuditResponse[] | ErrorResponse>({
    queryKey: ['audit', dates],
    queryFn: async () => {
      try {
        const response = await http.get(url, { params });
        if (response.data.message || !response.data) {
          return nullResponse;
        }
        return response.data;
      } catch (error) {
        const errorResponse = error as AxiosError;
        const response = errorResponse.response as AxiosResponse;
        if (response.data.message === 'not found') return nullResponse;
        notification.error({
          title: 'Error!',
          message: 'Error fetching data!',
        });
        return nullResponse;
      }
    },
    onError: (error) => {
      return error;
    },
  });

  return {
    audit,
    loading,
    refetch,
    error,
    isRefetching,
  };
};

export default useAudit;
