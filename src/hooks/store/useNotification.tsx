import React from 'react';
import { showNotification } from '@mantine/notifications';
import { IconX, IconUserExclamation, IconCheck } from '@tabler/icons';

const autoClose = 4000;
interface NotificationHookProps {
  title: string;
  message: string;
}

const useNotificationHook = () => {
  const commonOptions = ({ title, message }: NotificationHookProps) => {
    return {
      title,
      message,
      autoClose,
    };
  };
  const error = ({ title, message }: NotificationHookProps) => {
    return showNotification({
      icon: <IconX />,
      color: 'red',
      ...commonOptions({ title, message }),
    });
  };
  const warning = ({ title, message }: NotificationHookProps) => {
    return showNotification({
      color: 'yellow',
      icon: <IconUserExclamation />,
      ...commonOptions({ title, message }),
    });
  };
  const success = ({ title, message }: NotificationHookProps) => {
    return showNotification({
      color: 'green',
      icon: <IconCheck />,
      ...commonOptions({ title, message }),
    });
  };

  return {
    error,
    warning,
    success,
  };
};

export default useNotificationHook;
