import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import {
  ReportDetailResponse,
  CancelOrderRequest,
  RefundOrderRequest,
} from '@/types/api/report';
import { http } from '@/services/fetcher/axios';
import useNotificationHook from '@/hooks/store/useNotification';
import { AxiosError } from 'axios';

const url = '/api/order';

const useReportDetail = (orderId: string | string[] | undefined) => {
  const notification = useNotificationHook();
  const {
    data: detail,
    isLoading: loading,
    isError: error,
    refetch,
    isRefetching,
  } = useQuery<ReportDetailResponse>({
    queryKey: ['reportDetail', orderId],
    queryFn: async () => {
      const response = await http.get(`${url}/${orderId}`);
      if (response.status !== 200)
        throw new Error('Network response was not ok');
      return response.data;
    },
  });

  const queryClient = new QueryClient();

  const cancelOrder = useMutation({
    mutationKey: ['reportDetail', orderId],
    mutationFn: async (params: CancelOrderRequest) => {
      try {
        const response = await http.patch('/api/order/', params);
        if (response.status === 200) {
          notification.success({
            title: 'Action Success!',
            message: 'Order has been canceled!',
          });
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        const errorResponse = error as AxiosError;
        notification.warning({
          title: 'Action Failed',
          message: JSON.parse(JSON.stringify(errorResponse.response?.data))
            .message,
        });
      }
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['reportDetail', orderId],
      });
      queryClient.setQueryData(['reportDetail', orderId], { ...variables });
      return variables;
    },
  });

  const refundOrder = useMutation({
    mutationKey: ['refundOrder', orderId],
    mutationFn: async (params: RefundOrderRequest) => {
      try {
        const response = await http.post('/api/refund/', params);
        if (response.status === 200) {
          notification.success({
            title: 'Action Success!',
            message: 'Refund is success!',
          });
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        const errorResponse = error as AxiosError;
        notification.warning({
          title: 'Action Failed',
          message: JSON.parse(JSON.stringify(errorResponse.response?.data))
            .message,
        });
      }
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['refundOrder', orderId],
      });
      queryClient.setQueryData(['refundOrder', orderId], { ...variables });
      return variables;
    },
  });

  const retryRefund = useMutation({
    mutationKey: ['retryRefund', orderId],
    mutationFn: async (id: string) => {
      try {
        const response = await http.post('/api/refund/', {
          id,
        });
        if (response.status === 200) {
          notification.success({
            title: 'Action Success!',
            message: 'Refund is success!',
          });
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        const errorResponse = error as AxiosError;
        notification.warning({
          title: 'Action Failed',
          message: JSON.parse(JSON.stringify(errorResponse.response?.data))
            .message,
        });
      }
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['retryRefund', orderId],
      });
      queryClient.setQueryData(['retryRefund', orderId], { variables });
      return variables;
    },
  });

  return {
    detail,
    loading,
    refetch,
    error,
    isRefetching,
    cancelOrder,
    refundOrder,
    retryRefund,
  };
};

export default useReportDetail;
