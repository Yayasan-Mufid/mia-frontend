import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import RegisterContainer from '@/components/features/redirect/RegisterContainer';

const Home: NextPage = () => {
  return (
    <AppLayout title="Register-redirect" pageTitle="Register Redirect">
      <RegisterContainer />
    </AppLayout>
  );
};

export default Home;
