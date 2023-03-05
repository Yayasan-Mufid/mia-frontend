import React, { useState } from 'react';
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import Link from 'next/link';
import { toggleSidebar } from '@/store/features/sidebar/slice';
import { useDispatch } from 'react-redux';
import { TablerIcon, IconChevronLeft, IconChevronRight } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
    color: '#fff',
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: '#444',
      color: '#ddd',
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: '#bbb',
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: '#444',
      color: '#ddd',
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

const LinksGroup = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: LinksGroupProps) => {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
  const dispatch = useDispatch();
  const items = (hasLinks ? links : []).map((link) => (
    <Link className={classes.link} key={link.label} href={link.link}>
      <Text<'a'> component="a">{link.label}</Text>
    </Link>
  ));
  const handleOpen = (label: string) => {
    setOpened((o) => !o);
    dispatch(toggleSidebar(label));
  };

  return (
    <>
      <UnstyledButton
        onClick={() => handleOpen(label)}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="filled" color="dark" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${90}deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};

export { LinksGroup };
