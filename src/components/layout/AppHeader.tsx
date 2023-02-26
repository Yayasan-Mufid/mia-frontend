import React, { MouseEventHandler } from 'react';
import { IconLogout } from '@tabler/icons';
import {
  Burger,
  Header,
  MediaQuery,
  Text,
  createStyles,
  useMantineTheme,
  Group,
  Container,
  Button,
} from '@mantine/core';
import useAuth from '@/hooks/api/auth/useAuth';

interface AppHeaderProps {
  opened: boolean;
  handlerOpen: MouseEventHandler<HTMLButtonElement> | undefined;
}

const useStyles = createStyles((theme) => ({
  burgerStyle: {
    padding: theme.spacing.md,
  },
  headerStyle: {
    boxShadow: theme.shadows.xs,
    zIndex: 200,
  },
  inner: {
    width: '100%',
    maxWidth: 2500,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    margin: 0,
  },
  logoutStyle: {
    paddingTop: 4,
  },
}));

const AppHeader = ({ opened, handlerOpen }: AppHeaderProps) => {
  const { classes } = useStyles();
  const { logout } = useAuth();
  const theme = useMantineTheme();
  return (
    <Header className={classes.headerStyle} height={{ base: 50 }}>
      <Container className={classes.inner}>
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={handlerOpen}
              className={classes.burgerStyle}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xs"
            />
          </MediaQuery>
          <Text ml={10} mt={5}>
            Beranda Toko
          </Text>
        </Group>
        <Button
          size="xs"
          leftIcon={<IconLogout size={18} />}
          onClick={logout}
          variant="subtle"
          compact
        >
          <span className={classes.logoutStyle}>Logout</span>
        </Button>
      </Container>
    </Header>
  );
};

export default AppHeader;
