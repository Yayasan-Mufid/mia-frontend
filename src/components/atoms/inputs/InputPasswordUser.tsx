import React from 'react';
import { PasswordInput, Text, Group, PasswordInputProps } from '@mantine/core';

interface CustomPasswordInputText extends PasswordInputProps {
  id: string;
  placeholder: string;
  label: string;
}

const InputPasswordUser = ({
  id,
  placeholder,
  label,
  className,
  style,
  ...others
}: CustomPasswordInputText) => {
  return (
    <div className={className} style={style}>
      <Group position="apart" mb={5}>
        <Text component="label" htmlFor={id} size="sm" weight={500}>
          {label}
        </Text>
      </Group>
      <PasswordInput placeholder={placeholder} id={id} {...others} />
    </div>
  );
};

export default InputPasswordUser;
