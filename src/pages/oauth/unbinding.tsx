import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import UnbindingContainer from '@/components/features/oauth/UnbindingContainer';

const Home: NextPage = () => {
  return (
    <AppLayout title="Unbinding" pageTitle="Unbinding Oauth Page">
      <UnbindingContainer />
    </AppLayout>
  );
};

export default Home;
