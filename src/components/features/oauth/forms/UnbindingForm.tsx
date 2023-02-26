import React from 'react';
import { Button, createStyles, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { InputText } from '@/components/commons/inputs';
import { UnbindingOauthFormType } from '@/types/forms/unbinding-form';
import useOauth from '@/hooks/api/oauth/useOauth';
import useNotificationHook from '@/hooks/store/useNotification';
import { AxiosResponse } from 'axios';

const useStyles = createStyles((theme) => ({
  groupForm: {
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
}));

const BindingForm = () => {
  const { classes } = useStyles();
  const { unbindOuath } = useOauth();
  const notification = useNotificationHook();

  const form = useForm({
    initialValues: {
      user_id: '',
    } as UnbindingOauthFormType,
    validate: {
      user_id: (value) => (value === '' ? 'User id is required!' : null),
    },
  });

  const handleSubmit = async (values: UnbindingOauthFormType) => {
    const response = (await unbindOuath.mutateAsync(values)) as AxiosResponse;
    if (response?.status === 200) {
      notification.success({
        title: 'Unbinding Success.',
        message: '',
      });
    } else {
      form.setFieldError('user_id', 'Unbinding error!');
      notification.error({
        title: 'Unbinding Error!',
        message: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <InputText
          withAsterisk
          id="user_id"
          label="Your user id"
          placeholder="Insert your user id..."
          className={classes.groupForm}
          {...form.getInputProps('user_id')}
        />
        <Group position="right" mt="md">
          <Button color="red" type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default BindingForm;
