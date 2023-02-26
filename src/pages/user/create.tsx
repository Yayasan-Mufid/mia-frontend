import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import UserContainer from '@/components/features/user/UserContainer';

const Home: NextPage = () => {
  return (
    <AppLayout title="Create user" pageTitle="Create user">
      <UserContainer />
    </AppLayout>
  );
};

export default Home;
