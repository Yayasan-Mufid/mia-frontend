import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import DashboardContainer from '@/components/features/dashboard/DashboardContainer';

const Home: NextPage = () => {
  return (
    <AppLayout title="Dashboard" pageTitle="Dashboard">
      <DashboardContainer />
    </AppLayout>
  );
};

export default Home;
