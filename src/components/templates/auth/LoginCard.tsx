import React from 'react';
import { Card, Center, Text } from '@mantine/core';
import LoginForm from './forms/LoginForm';

const LoginCard = () => {
  return (
    <Card withBorder radius="md" p="xl">
      <Center>
        <Text size={24} weight={800}>
          Login
        </Text>
      </Center>
      <LoginForm />
    </Card>
  );
};

export default LoginCard;
