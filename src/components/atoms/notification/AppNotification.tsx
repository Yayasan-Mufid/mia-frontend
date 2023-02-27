import React from 'react';
import { Notification, Affix } from '@mantine/core';
import { useSelector } from 'react-redux';
import { getExistNotification } from '@/store/features/notification/slice';

const AppNotification = () => {
  const { notification } = useSelector(getExistNotification);
  return (
    <>
      {notification.show && (
        <Affix zIndex="550" position={{ top: 20, right: 20 }}>
          <Notification title={notification.title} color={notification.color}>
            {notification.description}
          </Notification>
        </Affix>
      )}
    </>
  );
};

export default AppNotification;
