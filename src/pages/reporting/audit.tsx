import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import AuditContainer from '@/components/features/report/AuditContainer';

const Home: NextPage = () => {
  return (
    <AppLayout title="Audit" pageTitle="Audit Page">
      <AuditContainer />
    </AppLayout>
  );
};

export default Home;
