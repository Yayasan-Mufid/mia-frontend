import React, { useState, useEffect } from 'react';
import { Center, Loader } from '@mantine/core';
import { DataGrid, stringFilterFn } from 'mantine-data-grid';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';
import { useDayjs } from '@/hooks/libs/useDayjs';
import useAudit from '@/hooks/api/audit/useAudit';
import { AuditResponse } from '@/types/api/audit';

const AuditTeble = () => {
  const { dayjs } = useDayjs();
  const [dateRange, setDateRange] = useState<DateRangePickerValue>([
    new Date(dayjs().format('YYYY-MM-01')),
    new Date(dayjs().format()),
  ]);
  const { audit, refetch, loading, error } = useAudit(dateRange);
  useEffect(() => {
    refetch();
  }, [dateRange[1]]);

  return (
    <>
      {loading && (
        <Center>
          <Loader />
        </Center>
      )}
      {error && <Center>Error data fetch!</Center>}
      {!loading && !error && (
        <>
          <DateRangePicker
            label="Choose a date"
            placeholder="Choose a date range"
            value={dateRange}
            onChange={setDateRange}
            mb={2}
          />
          <DataGrid
            withPagination
            withGlobalFilter
            highlightOnHover
            withSorting
            withColumnResizing
            withColumnFilters
            data={audit as AuditResponse[]}
            columns={[
              {
                header: 'Application ID',
                accessorFn: (row: AuditResponse) => row.application_id,
                filterFn: stringFilterFn,
              },
              {
                header: 'Order Create',
                accessorKey: 'created_at',
                cell: (cell) =>
                  dayjs(cell.getValue() as Date).format('YYYY-MM-DD'),
              },
              {
                header: 'Old',
                accessorFn: (row: AuditResponse) => row.old,
                filterFn: stringFilterFn,
              },
              {
                header: 'New',
                accessorFn: (row: AuditResponse) => row.new,
                filterFn: stringFilterFn,
              },
            ]}
          />
        </>
      )}
    </>
  );
};

export default AuditTeble;
