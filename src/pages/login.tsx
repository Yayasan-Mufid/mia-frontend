import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from '@mantine/core';
import LoginCard from '@/components/templates/auth/LoginCard';
import { getAccessToken } from '@/services/local-storage/token-service';

const Login: NextPage = () => {
  const router = useRouter();
  const accessToken = getAccessToken();
  if (accessToken) {
    router.replace('/');
  }
  return (
    <>
      {!accessToken && (
        <Container size="xs" mt={150} px="xs">
          <LoginCard />
        </Container>
      )}
      {accessToken && <></>}
    </>
  );
};

export default Login;
