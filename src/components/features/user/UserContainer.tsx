import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import { Card, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { UserFormType } from '@/types/forms/user-form';
import useUser from '@/hooks/api/user/useUser';
import { UserResponse } from '@/types/api/user';
import UserForm from './forms/UserForm';
import UserResponseCard from './card/UserResponseCard';

const UserContainer = () => {
  const { createUser } = useUser();
  const [data, setData] = useState({} as UserResponse);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      password_confirmation: '',
    } as UserFormType,
    validate: {
      username: (value) => (value === '' ? 'Username is required!' : null),
      password: (value) =>
        (value === '' ? 'Password is required!' : null) ||
        (value.length < 16 ? 'Password must in 16 characters!' : null),
      password_confirmation: (value, values) =>
        (value !== values.password ? 'Password did not match!' : null) ||
        (value.length < 16 ? 'Password must in 16 characters!' : null),
    },
  });

  const handleSubmit = async (values: UserFormType) => {
    const response = (await createUser.mutateAsync(values)) as AxiosResponse;
    setData(response?.data);
  };

  return (
    <Container size={'xl'}>
      <Card withBorder radius="md" p="xl">
        <UserForm
          form={form}
          handleForm={form.onSubmit((values) => handleSubmit(values))}
        />
      </Card>
      {data?.username && <UserResponseCard data={data} />}
    </Container>
  );
};

export default UserContainer;
