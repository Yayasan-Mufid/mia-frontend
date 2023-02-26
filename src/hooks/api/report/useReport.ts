import { useQuery } from '@tanstack/react-query';
import { useDayjs } from '@/hooks/libs/useDayjs';
import { ReportResponse } from '@/types/api/report';
import { http } from '@/services/fetcher/axios';
import { AxiosError, AxiosResponse } from 'axios';
import useNotificationHook from '@/hooks/store/useNotification';

const url = '/api/report';

const useReport = () => {
  const { dayjs } = useDayjs();
  const notification = useNotificationHook();

  const params = {
    start: dayjs().subtract(1, 'months').format('YYYY-MM-DDT00:00:00.00') + 'Z',
    end: dayjs().format('YYYY-MM-DDT23:59:59.468') + 'Z',
    num_records: 0,
    page: 0,
  };

  const nullResponse = {
    id: null,
    no: null,
    application_id: null,
    created_at: null,
    order_id: null,
    application: null,
    tax_fee: null,
    delivery_fee: null,
    platform_fee: null,
    payment_fee: null,
    total_product_price: null,
    order_created_at: null,
    order_expired_at: null,
    order_finished_at: null,
    order_status: null,
    buyer_phone_number: null,
    merchant_transaction_id: null,
  };

  const {
    data: report,
    isLoading: loading,
    isError: error,
    refetch,
    isRefetching,
  } = useQuery<ReportResponse[]>({
    queryKey: ['report'],
    queryFn: async () => {
      try {
        const response = await http.get(url, { params });
        if (response.data.message) {
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
  });

  return {
    report,
    loading,
    refetch,
    error,
    isRefetching,
  };
};

export default useReport;
