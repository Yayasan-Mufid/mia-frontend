import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import ReportContainer from '@/components/features/report/ReportContainer';

const Report: NextPage = () => {
  return (
    <AppLayout title="Report" pageTitle="Report Page">
      <ReportContainer />
    </AppLayout>
  );
};

export default Report;
