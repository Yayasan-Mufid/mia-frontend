import { useMutation, QueryClient } from '@tanstack/react-query';
import { http } from '@/services/fetcher/axios';
import { UserRequest } from '@/types/api/user';
import useNotificationHook from '@/hooks/store/useNotification';

const useUser = () => {
  const queryClient = new QueryClient();
  const notification = useNotificationHook();
  const createUser = useMutation({
    mutationKey: ['createUser'],
    mutationFn: async (params: UserRequest) => {
      try {
        const response = await http.post('/api/user/', params);
        if (response.status == 201) {
          notification.success({
            title: 'User created!',
            message: 'Create user success!',
          });
        }
        return response;
      } catch (error) {
        return error;
      }
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['createUser'],
      });
      queryClient.setQueryData(['createUser'], { ...variables });
      return variables;
    },
  });
  const { data, error } = createUser;
  return {
    createUser,
    data,
    error,
  };
};

export default useUser;
