import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import RedirectContainer from '@/components/features/redirect/RedirectContainer';

const Home: NextPage = () => {
  return (
    <AppLayout title="Default-redirect" pageTitle="Default Redirect">
      <RedirectContainer />
    </AppLayout>
  );
};

export default Home;
