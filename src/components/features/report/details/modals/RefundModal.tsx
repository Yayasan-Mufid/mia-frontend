import React from 'react';
import { Modal, Textarea, createStyles, Button, Grid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { RefundOrderRequest } from '@/types/api/report';
import useReportDetail from '@/hooks/api/report/useReportDetail';

interface RefundModalProps {
  opened: boolean;
  orderId: string | string[] | undefined;
  handleClose(): void;
}

const useStyles = createStyles((theme) => ({
  modalStyle: {
    marginTop: theme.spacing.lg,
  },
}));

const RefundModal = ({ opened, orderId, handleClose }: RefundModalProps) => {
  const { refetch, refundOrder, retryRefund, detail } =
    useReportDetail(orderId);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      order_id: '',
      reason: '',
      amount: 0,
      payout_account_no: '',
      initiator_id: '1',
      destination: 'TO_BALANCE',
      actor_type: 'SYSTEM',
      callback_url: 'https://test.dana.jatis.trusty.my.id/',
    },
  });

  const handleSubmit = async (values: RefundOrderRequest) => {
    values.order_id = detail?.id;
    values.amount = detail?.total_product_price ?? 0;
    await refundOrder.mutateAsync(values);
    handleClose();
    refetch();
  };

  const handleRetry = async (id: string) => {
    await retryRefund.mutateAsync(id);
    handleClose();
    refetch();
  };

  return (
    <Modal
      opened={opened}
      className={classes.modalStyle}
      onClose={handleClose}
      title="Refund Order"
    >
      <form
        onSubmit={form.onSubmit((values) =>
          handleSubmit(values as RefundOrderRequest),
        )}
      >
        <Textarea
          withAsterisk
          py={10}
          label="Reason"
          {...form.getInputProps('reason')}
        />
        <Grid>
          <Grid.Col span={6}>
            <Button
              color="cyan"
              fullWidth
              onClick={() => handleRetry(detail?.id as string)}
            >
              Retry refund
            </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button fullWidth type="submit">
              Submit
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Modal>
  );
};

export default RefundModal;
