import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, LoadingOverlay, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLogin } from '@tabler/icons';
import { InputPasswod, InputText } from '@/components/commons/inputs';
import useAuth from '@/hooks/api/auth/useAuth';
import { LoginRequest, ErrorLoginResponse } from '@/types/api/auth';
import useNotificationHook from '@/hooks/store/useNotification';

const useStyles = createStyles((theme) => ({
  groupForm: {
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
}));

const LoginForm = () => {
  const { login } = useAuth();
  const { classes } = useStyles();
  const notification = useNotificationHook();
  const [loginLoading, setLoginLoading] = useState(false);

  const form = useForm({
    initialValues: {
      id: '',
      password: '',
    } as LoginRequest,
    validate: {
      id: (value) => (value === '' ? 'Username is required' : null),
      password: (value) => (value === '' ? 'Password is required' : null),
    },
  });

  const router = useRouter();

  const handleLogin = async (values: LoginRequest) => {
    setLoginLoading(true);
    try {
      const response = await login.mutateAsync(values);
      if (response.status === 200) {
        notification.success({
          title: 'Login Success.',
          message: '',
        });
        router.replace('/');
      }
    } catch (error) {
      const errorResponse = error as ErrorLoginResponse;
      if (errorResponse.message === 'not found') {
        notification.error({
          title: 'Login Error!',
          message: 'Username is not found!',
        });
        form.setErrors({
          id: 'Username is not found!',
          password: 'Username is not found!',
        });
      }

      if (errorResponse.message === 'action forbidden') {
        notification.error({
          title: 'Login Error!',
          message: 'Password is wrong!',
        });
        form.setErrors({
          id: 'Username or password is wrong!',
          password: 'Username or password is wrong!',
        });
      }
      setLoginLoading(false);
    }
  };
  return (
    <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
      <LoadingOverlay visible={loginLoading} overlayBlur={2} />
      <InputText
        id="username"
        label="Your username"
        placeholder="Insert your username..."
        className={classes.groupForm}
        {...form.getInputProps('id')}
      />
      <InputPasswod
        id="password"
        label="Your password"
        placeholder="Insert your password..."
        className={classes.groupForm}
        {...form.getInputProps('password')}
      />
      <Button
        leftIcon={<IconLogin size={14} />}
        size="md"
        type="submit"
        disabled={loginLoading}
      >
        {' '}
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
