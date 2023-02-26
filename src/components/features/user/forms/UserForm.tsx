import React, { FormEventHandler } from 'react';
import { Button, createStyles, Group } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { InputPasswodUser, InputText } from '@/components/commons/inputs';
import { UserFormType } from '@/types/forms/user-form';

const useStyles = createStyles((theme) => ({
  groupForm: {
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
}));

interface UserFormProps {
  form: UseFormReturnType<UserFormType, any>;
  handleForm: FormEventHandler<HTMLFormElement> | undefined;
}

const UserForm = ({ form, handleForm }: UserFormProps) => {
  const { classes } = useStyles();
  return (
    <form onSubmit={handleForm}>
      <InputText
        withAsterisk
        id="username"
        label="Your username"
        placeholder="Insert your username..."
        className={classes.groupForm}
        {...form.getInputProps('username')}
      />
      <InputPasswodUser
        id="password"
        label="Your password"
        placeholder="Insert your password..."
        className={classes.groupForm}
        {...form.getInputProps('password')}
      />
      <InputPasswodUser
        id="password_confirmation"
        label="Your password confirmation"
        placeholder="Insert your password confirmation..."
        className={classes.groupForm}
        {...form.getInputProps('password_confirmation')}
      />
      <Button fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
