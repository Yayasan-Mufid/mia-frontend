const userIdKey = 'userId';

export const setUserId = (userId: string) => {
  localStorage.setItem(userIdKey, userId);
};

export const getUserId = () => {
  return typeof window != 'undefined' ? localStorage.getItem(userIdKey) : null;
};

export const removeUserId = () => {
  localStorage.removeItem(userIdKey);
};
