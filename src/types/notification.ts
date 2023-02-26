export enum NotificationColor {
  red = 'red',
  green = 'green',
  yellow = 'yellow',
  blue = 'blue',
}
export interface NotificationInterface {
  color: NotificationColor;
  show: boolean;
  title: string;
  description: string;
}
