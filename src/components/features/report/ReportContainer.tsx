import React from 'react';
import { Container, Grid, SimpleGrid, Card } from '@mantine/core';
import ReportTable from './tables/ReportTable';

const ReportContainer = () => {
  return (
    <Container size={'xl'}>
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'xl', cols: 1 }]}>
        <Grid gutter="md">
          <Grid.Col span={12}>
            <Card withBorder radius="md" p="xl">
              <ReportTable />
            </Card>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default ReportContainer;
