import { useMutation, QueryClient } from '@tanstack/react-query';
import { http } from '@/services/fetcher/axios';
import { BindOuathRequest, UnbindOauthRequest } from '@/types/api/oauth';

const useOauth = () => {
  const queryClient = new QueryClient();
  const bindOuath = useMutation({
    mutationKey: ['bindOuath'],
    mutationFn: async (params: BindOuathRequest) => {
      try {
        const response = await http.get('/api/oauth', { params });
        return response;
      } catch (error) {
        return error;
      }
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['bindOuath'],
      });
      queryClient.setQueryData(['bindOuath'], { ...variables });
      return variables;
    },
  });
  const { data: dataBindOauth, error: errorBindOauth } = bindOuath;

  const unbindOuath = useMutation({
    mutationKey: ['unbindOuath'],
    mutationFn: async (params: UnbindOauthRequest) => {
      try {
        const response = await http.delete('/api/unbind/', { params });
        return response;
      } catch (error) {
        return error;
      }
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['unbindOuath'],
      });
      queryClient.setQueryData(['unbindOuath'], { ...variables });
      return variables;
    },
  });
  const { data: dataUnbindOauth, error: errorUnbindOauth } = unbindOuath;
  return {
    bindOuath,
    dataBindOauth,
    errorBindOauth,
    unbindOuath,
    dataUnbindOauth,
    errorUnbindOauth,
  };
};

export default useOauth;
