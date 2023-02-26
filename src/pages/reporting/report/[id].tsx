import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import { useRouter } from 'next/router';
import ReportDetail from '@/components/features/report/details/ReportDetail';

const Report: NextPage = () => {
  const router = useRouter();
  return (
    <AppLayout title="Report" pageTitle="Report Page" backButton>
      <ReportDetail orderId={router.query.id} />
    </AppLayout>
  );
};

export default Report;
