import React from 'react';
import { Center, Loader, Text, Button } from '@mantine/core';
import {
  DataGrid,
  dateFilterFn,
  numberFilterFn,
  stringFilterFn,
  useDataGrid,
} from 'mantine-data-grid';
import { useDayjs } from '@/hooks/libs/useDayjs';
import useReport from '@/hooks/api/report/useReport';
import { ReportResponse } from '@/types/api/report';
import { useCurrencyFormat } from '@/hooks/libs/useCurrency';
import { IconReportSearch } from '@tabler/icons';
import { useRouter } from 'next/router';

const ReportTable = () => {
  const { report, loading, error } = useReport();
  const [table, setRef] = useDataGrid<ReportResponse[]>();
  const { dayjs } = useDayjs();
  const router = useRouter();
  const currencyFormat = useCurrencyFormat;

  const handleDetails = (orderId: string) => {
    router.push(`/reporting/report/${orderId}`);
  };

  return (
    <>
      {loading && (
        <Center>
          <Loader />
        </Center>
      )}
      {error && <Center>Error data fetch!</Center>}
      {!loading && !error && (
        <DataGrid
          withPagination
          withGlobalFilter
          highlightOnHover
          withSorting
          withColumnResizing
          withColumnFilters
          data={report as ReportResponse[]}
          columns={[
            { header: 'No', accessorFn: (row: ReportResponse) => row.no },
            {
              header: 'Order ID',
              accessorFn: (row: ReportResponse) => row.order_id,
              filterFn: stringFilterFn,
            },
            {
              header: 'Order Create',
              accessorKey: 'order_created_at',
              cell: (cell) =>
                dayjs(cell.getValue() as Date).format('YYYY-MM-DD'),
              filterFn: dateFilterFn,
            },
            {
              header: 'Total',
              accessorKey: 'total_product_price',
              cell: (cell) =>
                currencyFormat(cell.getValue() as number, {
                  withFractionDigits: false,
                }),
              filterFn: numberFilterFn,
            },
            {
              header: 'Status',
              accessorFn: (row: ReportResponse) => row.order_status,
            },
            {
              header: 'No Handphone',
              accessorFn: (row: ReportResponse) => row.buyer_phone_number,
            },
            {
              header: 'Action',
              accessorKey: 'order_id',
              cell: (cell) => (
                <Button
                  leftIcon={<IconReportSearch size={15} />}
                  variant="subtle"
                  onClick={() => handleDetails(cell.getValue() as string)}
                >
                  <Text size={15} mt={5}>
                    Show Details
                  </Text>
                </Button>
              ),
            },
          ]}
        />
      )}
    </>
  );
};

export default ReportTable;
