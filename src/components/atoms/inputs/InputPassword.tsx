import React from 'react';
import {
  PasswordInput,
  Text,
  Group,
  PasswordInputProps,
  Anchor,
} from '@mantine/core';

interface CustomPasswordInputText extends PasswordInputProps {
  id: string;
  placeholder: string;
  label: string;
}

const InputPassword = ({
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

        <Anchor<'a'>
          href="#"
          onClick={(event) => event.preventDefault()}
          sx={(theme) => ({
            paddingTop: 2,
            color:
              theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 4 : 6
              ],
            fontWeight: 500,
            fontSize: theme.fontSizes.xs,
          })}
        >
          Forgot your password?
        </Anchor>
      </Group>
      <PasswordInput placeholder={placeholder} id={id} {...others} />
    </div>
  );
};

export default InputPassword;
