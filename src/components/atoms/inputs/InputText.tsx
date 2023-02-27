import React from 'react';
import { TextInput, Text, Group, TextInputProps } from '@mantine/core';

interface CustomInputProps extends TextInputProps {
  id: string;
  placeholder: string;
  label: string;
}

const InputText = ({
  className,
  style,
  id,
  placeholder,
  label,
  ...others
}: CustomInputProps) => {
  return (
    <div className={className} style={style}>
      <Group position="apart" mb={5}>
        <Text component="label" htmlFor={id} size="sm" weight={500}>
          {label}
        </Text>
      </Group>
      <TextInput placeholder={placeholder} id={id} {...others} />
    </div>
  );
};

export default InputText;
