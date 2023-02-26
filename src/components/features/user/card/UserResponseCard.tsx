import React from 'react';
import { UserResponse } from '@/types/api/user';
import { Card, Text, TextInput } from '@mantine/core';

interface UserResponseCardProps {
  data: UserResponse;
}

const UserResponseCard = ({ data }: UserResponseCardProps) => {
  return (
    <Card mt={20} withBorder radius="md" p="xl">
      <Text weight={800}>Created User</Text>
      <TextInput
        py={10}
        label="Roles"
        value={data.role}
        variant="unstyled"
        disabled
      />
      <TextInput
        py={10}
        label="Username"
        value={data.username}
        variant="unstyled"
        disabled
      />
      <TextInput
        py={10}
        label="ID"
        value={data.id}
        variant="unstyled"
        disabled
      />
    </Card>
  );
};

export default UserResponseCard;
