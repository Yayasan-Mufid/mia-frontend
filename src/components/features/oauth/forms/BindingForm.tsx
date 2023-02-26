import React from 'react';
import { Button, createStyles, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { InputText } from '@/components/commons/inputs';
import { BindingOauthFormType } from '@/types/forms/binding-form';
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
  const { bindOuath } = useOauth();
  const notification = useNotificationHook();

  const form = useForm({
    initialValues: {
      chat_commerce_user_id: '',
    } as BindingOauthFormType,
    validate: {
      chat_commerce_user_id: (value) =>
        value === '' ? 'User id is required!' : null,
    },
  });

  const handleSubmit = async (values: BindingOauthFormType) => {
    const response = (await bindOuath.mutateAsync({
      scopes:
        'DEFAULT_BASIC_PROFILE,AGREEMENT_PAY,QUERY_BALANCE,CASHIER,MINI_DANA,PUBLIC_ID',
      terminal_type: 'APP',
      lang: 'id',
      chat_commerce_user_id: parseInt(values.chat_commerce_user_id),
    })) as AxiosResponse;
    if (response?.status === 200) {
      window.open(response.data.url, '_blank');
    } else {
      form.setFieldError('chat_commerce_user_id', 'Binding error');
      notification.error({
        title: 'Binding Error.',
        message: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <InputText
          withAsterisk
          id="chat_commerce_user_id"
          label="Your user id"
          placeholder="Insert your user id..."
          className={classes.groupForm}
          {...form.getInputProps('chat_commerce_user_id')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
};

export default BindingForm;
