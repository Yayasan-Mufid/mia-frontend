import React from 'react';
import { Container, Grid, SimpleGrid, Card } from '@mantine/core';
import AuditTable from './tables/AuditTable';

const AuditContainer = () => {
  return (
    <Container size={'xl'}>
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'xl', cols: 1 }]}>
        <Grid gutter="md">
          <Grid.Col span={12}>
            <Card withBorder radius="md" p="xl">
              <AuditTable />
            </Card>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default AuditContainer;
