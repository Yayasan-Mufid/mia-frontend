import axios, { AxiosRequestConfig } from 'axios';
import router from 'next/router';
import {
  getAccessToken,
  removeAccessToken,
} from '../local-storage/token-service';

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    throw error;
  },
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      removeAccessToken();
      router.replace('/login');
    }
    return Promise.reject(error);
  },
);

export const defaultQueryFn = async ({ queryKey }: any) => {
  try {
    const { data } = await http.get(queryKey[0], { params: queryKey[1] });
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) throw err.response;
    throw err;
  }
};

export { axios };
