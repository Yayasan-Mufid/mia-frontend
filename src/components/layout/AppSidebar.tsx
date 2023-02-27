import React from 'react';
import { Navbar, ScrollArea, createStyles } from '@mantine/core';
import { listsMenu } from '@/services/menu/icon-lists';
import { LinksGroup } from '../atoms/navbar/LinksGroup';
import { getAllSidebar } from '@/store/features/sidebar/slice';
import { useSelector } from 'react-redux';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.xs,
    paddingTop: 0,
    marginLeft: -theme.spacing.xs,
    marginRight: -theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: 0,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

interface AppSidebarProps {
  opened?: boolean;
  shadows?: string;
}

const AppSidebar = ({ opened, ...others }: AppSidebarProps) => {
  const { sidebar } = useSelector(getAllSidebar);
  const { classes } = useStyles();
  const linksIcon = listsMenu.map((item) => {
    item.initiallyOpened =
      sidebar.find((value) => value.label === item.label)?.initiallyOpened ??
      false;
    return item;
  });
  const links = linksIcon.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 300 }}
      p="xs"
      className={classes.navbar}
      {...others}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
};

export default AppSidebar;
