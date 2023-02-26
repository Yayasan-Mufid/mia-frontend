import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import BindingContainer from '@/components/features/oauth/BindingContainer';

const Home: NextPage = () => {
  return (
    <AppLayout title="Binding" pageTitle="Binding Oauth Page">
      <BindingContainer />
    </AppLayout>
  );
};

export default Home;
