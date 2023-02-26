import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';
import { http, axios } from '@/services/fetcher/axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
} from '@/services/local-storage/token-service';
import {
  setUserId,
  getUserId,
  removeUserId,
} from '@/services/local-storage/user-service';
import { LoginRequest, LoginResponse } from '@/types/api/auth';

const useAuth = () => {
  const accessToken = getAccessToken();
  const userId = getUserId();
  const router = useRouter();

  const queryKey = `/auth/session?user_id=${userId}&access_token=${accessToken}`;

  const {
    data: user,
    error,
    isError,
    isLoading: loading,
    refetch,
    isRefetching,
  } = useQuery<LoginResponse, any>({
    queryKey: ['auth', userId, accessToken],
    queryFn: async () => {
      const response = await http.get(queryKey);
      return response.data;
    },
    refetchInterval: false,
    retry: false,
    networkMode: 'offlineFirst',
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const loggedOut = accessToken === null || !!(error && error.status === 401);

  const login = useMutation(async (params: LoginRequest) => {
    try {
      const res = await http.post<any, AxiosResponse<LoginResponse>>(
        '/auth/login',
        {
          id: params.id,
          password: params.password,
        } as LoginRequest,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setAccessToken(res.data.access_token);
      setUserId(res.data.user_id);
      return res;
    } catch (error: any) {
      if (axios.isAxiosError(error)) throw error.response?.data;
      throw error;
    }
  });

  const logout = useCallback(() => {
    removeAccessToken();
    removeUserId();
    refetch();
    router.replace('/login');
  }, [refetch, router]);

  useEffect(() => {
    if (loggedOut && router.pathname !== '/login') {
      logout();
    }
  }, [loggedOut, logout, router]);

  return {
    login,
    loggedOut,
    logout,
    user,
    isError,
    loading,
    isRefetching,
    refetch,
  };
};

export default useAuth;
