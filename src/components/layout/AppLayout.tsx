import React, { useState } from 'react';
import {
  AppShell,
  Text,
  createStyles,
  Container,
  Grid,
  Button,
  Flex,
} from '@mantine/core';
import { IconArrowBack } from '@tabler/icons';
import Head from 'next/head';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import useAuth from '@/hooks/api/auth/useAuth';

type Props = {
  children: React.ReactNode;
  title: string;
  pageTitle?: string;
  backButton?: boolean;
};

const useStyles = createStyles((theme) => ({
  pageTitle: {
    marginLeft: theme.spacing.md,
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10,
  },
}));

const AppLayout = ({ title, children, pageTitle, backButton }: Props) => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const { loggedOut } = useAuth();

  return (
    <>
      <Head>
        <title>{title} | Mufid</title>
      </Head>
      {!loggedOut && (
        <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          padding="sm"
          navbar={<AppSidebar shadows="sm" opened={opened} />}
          header={
            <AppHeader
              opened={opened}
              handlerOpen={() => setOpened((o) => !o)}
            />
          }
        >
          <Container size={'xl'}>
            <Grid mb={5}>
              <Grid.Col span={6}>
                {pageTitle && (
                  <Flex
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="nowrap"
                  >
                    <Text className={classes.pageTitle}>{pageTitle}</Text>
                  </Flex>
                )}
              </Grid.Col>
              <Grid.Col span={6}>
                {backButton && (
                  <Flex
                    justify="flex-end"
                    align="center"
                    direction="row"
                    wrap="nowrap"
                  >
                    <Button
                      leftIcon={<IconArrowBack />}
                      variant="subtle"
                      onClick={() => window.history.go(-1)}
                    >
                      Back
                    </Button>
                  </Flex>
                )}
              </Grid.Col>
              <Grid.Col span={12} mr={0}>
                {children}
              </Grid.Col>
            </Grid>
          </Container>
        </AppShell>
      )}
    </>
  );
};

export default AppLayout;
