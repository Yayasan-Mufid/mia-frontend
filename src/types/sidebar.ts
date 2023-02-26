import { TablerIcon } from '@tabler/icons';

export interface ListMenu {
  label: string;
  initiallyOpened?: boolean;
  links?: Link[];
}

export interface ListMenuIcon extends ListMenu {
  icon: TablerIcon;
}

export interface Link {
  label: string;
  link: string;
}
