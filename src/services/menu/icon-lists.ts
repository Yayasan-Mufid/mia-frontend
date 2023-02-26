import {
  IconNotes,
  IconGauge,
  IconReport,
  IconLock,
  IconUsers,
} from '@tabler/icons';
import { ListMenuIcon } from '@/types/sidebar';

export const listsMenu: ListMenuIcon[] = [
  {
    label: 'Dashboard',
    icon: IconGauge,
    initiallyOpened: true,
    links: [{ label: 'Home', link: '/' }],
  },
  {
    label: 'Pages',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Default Redirect Page', link: '/redirect/default-redirect' },
      { label: 'Register Redirect Page', link: '/redirect/register-redirect' },
    ],
  },
  {
    label: 'Reporting',
    icon: IconReport,
    initiallyOpened: true,
    links: [
      { label: 'Report', link: '/reporting/report' },
      { label: 'Audit', link: '/reporting/audit' },
    ],
  },
  {
    label: 'Oauth',
    icon: IconLock,
    initiallyOpened: true,
    links: [
      { label: 'Binding Oauth', link: '/oauth/binding' },
      { label: 'Unbinding Oauth', link: '/oauth/unbinding' },
    ],
  },
  {
    label: 'User',
    icon: IconUsers,
    initiallyOpened: true,
    links: [{ label: 'Create User', link: '/user/create' }],
  },
];
