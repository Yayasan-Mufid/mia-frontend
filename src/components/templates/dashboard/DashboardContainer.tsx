import React from 'react';
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  Card,
  Text,
  Image,
  createStyles,
  Progress,
} from '@mantine/core';

const PRIMARY_COL_HEIGHT = 600;
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.fn.primaryColor(),
  },

  title: {
    color: theme.fn.rgba(theme.white, 0.65),
  },

  stats: {
    color: theme.white,
  },

  progressBar: {
    backgroundColor: theme.white,
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4),
  },
}));

const DashboardContainer = () => {
  const { classes } = useStyles();

  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  // const QUARTER_COL_HEIGHT = PRIMARY_COL_HEIGHT / 4 - theme.spacing.md / 4;

  return (
    <Container size="xl">
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'xl', cols: 1 }]}>
        <Grid gutter="md">
          <Grid.Col span={3}>
            <Card
              withBorder
              radius="md"
              p="xl"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.white,
              })}
            >
              <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                Order success
              </Text>
              <Text size="lg" weight={500}>
                0
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={3}>
            <Card
              withBorder
              radius="md"
              p="xl"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.white,
              })}
            >
              <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                Pendapatan
              </Text>
              <Text size="lg" weight={500}>
                0
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card
              withBorder
              radius="md"
              p="xl"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.white,
              })}
            >
              <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                Customers
              </Text>
              <Text size="lg" weight={500}>
                0
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card
              withBorder
              radius="md"
              p="xl"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.white,
              })}
            >
              <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                Refund
              </Text>
              <Text size="lg" weight={500}>
                0
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default DashboardContainer;
