import React from 'react';
import { NextPage } from 'next';
import useAuth from '@/hooks/api/auth/useAuth';

const Logout: NextPage = () => {
  const { logout } = useAuth();
  logout();
  return <></>;
};

export default Logout;
