import React from 'react';
import { Container, Grid, SimpleGrid, Card } from '@mantine/core';
import RegisterForm from './forms/RegisterForm';
// import { Card } from '@mantine/core';

const UserContainer = () => {
  return (
    <Container size="xl">
      <Card withBorder radius="md" p="xl">
        <RegisterForm />
      </Card>

      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'xl', cols: 1 }]}>
        <Grid gutter="md">
          <Grid.Col span={12}></Grid.Col>
          <Grid.Col span={12}></Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default UserContainer;
