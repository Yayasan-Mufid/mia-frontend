import React from 'react';
import {
  Modal,
  Textarea,
  TextInput,
  createStyles,
  Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { CancelOrderRequest } from '@/types/api/report';
import useReportDetail from '@/hooks/api/report/useReportDetail';

interface CancelModalProps {
  opened: boolean;
  orderId: string | string[] | undefined;
  handleClose(): void;
}

const useStyles = createStyles((theme) => ({
  modalStyle: {
    marginTop: theme.spacing.lg,
  },
}));

const CancelModal = ({ opened, orderId, handleClose }: CancelModalProps) => {
  const { refetch, cancelOrder } = useReportDetail(orderId);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      id: orderId,
      cancel_reason: '',
    },
  });

  const handleSubmit = async (values: CancelOrderRequest) => {
    await cancelOrder.mutateAsync(values);
    handleClose();
    refetch();
  };

  return (
    <Modal
      opened={opened}
      className={classes.modalStyle}
      onClose={handleClose}
      title="Cancel Order"
    >
      <form
        onSubmit={form.onSubmit((values) =>
          handleSubmit(values as CancelOrderRequest),
        )}
      >
        <TextInput
          py={10}
          label="Order ID"
          value={orderId}
          variant="unstyled"
          {...form.getInputProps('id')}
          disabled
        />
        <Textarea
          withAsterisk
          py={10}
          label="Reason"
          {...form.getInputProps('cancel_reason')}
        />
        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default CancelModal;
