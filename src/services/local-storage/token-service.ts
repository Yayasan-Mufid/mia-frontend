const accessTokenKey = 'accessToken';

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(accessTokenKey, accessToken);
};

export const getAccessToken = () => {
  return typeof window != 'undefined'
    ? localStorage.getItem(accessTokenKey)
    : null;
};

export const removeAccessToken = () => {
  localStorage.removeItem(accessTokenKey);
};
