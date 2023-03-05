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
    label: 'Pembayaran',
    icon: IconNotes,
    initiallyOpened: true,
    links: [{ label: 'Upload', link: '/payment/upload' }],
  },
  {
    label: 'Ujian',
    icon: IconReport,
    initiallyOpened: true,
    links: [
      { label: 'Ujian', link: '/ujian' },
      { label: 'Hasil Ujian', link: '/ujian/report' },
    ],
  },
  {
    label: 'Materi',
    icon: IconLock,
    initiallyOpened: true,
    links: [{ label: 'Materi', link: '/materi' }],
  },
  {
    label: 'Administrasi',
    icon: IconUsers,
    initiallyOpened: true,
    links: [{ label: 'Create User', link: '/admin/create' }],
  },
];
