import React, { useState } from 'react';
import {
  Container,
  Card,
  TextInput,
  Loader,
  Text,
  Button,
  Grid,
} from '@mantine/core';
import useReportDetail from '@/hooks/api/report/useReportDetail';
import { useDayjs } from '@/hooks/libs/useDayjs';
import { useCurrencyFormat } from '@/hooks/libs/useCurrency';
import CancelModal from './modals/CancelModal';
import RefundModal from './modals/RefundModal';

interface ReportDetailProps {
  orderId: string | string[] | undefined;
}

const ReportDetail = ({ orderId }: ReportDetailProps) => {
  const { dayjs } = useDayjs();
  const currencyFormat = useCurrencyFormat;
  const { detail, loading, error } = useReportDetail(orderId);
  const [openedCancel, setOpenedCancel] = useState(false);
  const [openedRefund, setOpenedRefund] = useState(false);

  return (
    <Container size={'xl'}>
      <Card withBorder radius="md" p="xl">
        {loading && <Loader />}
        {error && <Text>Error data fetch!</Text>}
        {!loading && !error && (
          <>
            <TextInput
              py={10}
              label="Order ID"
              value={detail?.id}
              variant="unstyled"
              disabled
            />
            <TextInput
              py={10}
              label="Status"
              value={detail?.acquirementStatus}
              variant="unstyled"
              disabled
            />
            <TextInput
              py={10}
              label="Merchant Transaction ID"
              value={detail?.merchant_transaction_id}
              variant="unstyled"
              disabled
            />
            <TextInput
              py={10}
              label="Telephone"
              value={detail?.buyer_phone_number}
              variant="unstyled"
              disabled
            />
            <TextInput
              py={10}
              label="Created At"
              value={dayjs(detail?.created_at).format('YYYY-MM-DD')}
              variant="unstyled"
              disabled
            />
            <TextInput
              py={10}
              label="Buyer ID"
              value={detail?.buyer_id}
              variant="unstyled"
              disabled
            />
            <TextInput
              py={10}
              label="Total Product Price"
              value={currencyFormat(detail?.total_product_price as number)}
              variant="unstyled"
              disabled
            />
            <TextInput
              py={10}
              label="Seller ID"
              value={detail?.seller_id}
              variant="unstyled"
              disabled
            />
            <Grid>
              {detail?.acquirementStatus === 'INIT' && (
                <Grid.Col span={6}>
                  <Button
                    m={5}
                    fullWidth
                    color="orange"
                    onClick={() => {
                      setOpenedCancel(true);
                    }}
                  >
                    Cancel
                  </Button>
                </Grid.Col>
              )}
              {detail?.acquirementStatus === 'SUCCESS' && (
                <Grid.Col span={6}>
                  <Button
                    m={5}
                    fullWidth
                    color="cyan"
                    onClick={() => {
                      setOpenedRefund(true);
                    }}
                  >
                    Refund
                  </Button>
                </Grid.Col>
              )}
            </Grid>
          </>
        )}
      </Card>
      <CancelModal
        opened={openedCancel}
        orderId={orderId}
        handleClose={() => setOpenedCancel(false)}
      />
      <RefundModal
        opened={openedRefund}
        orderId={orderId}
        handleClose={() => setOpenedRefund(false)}
      />
    </Container>
  );
};

export default ReportDetail;
