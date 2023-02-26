import React from 'react';
import { Button, createStyles, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { InputText } from '@/components/commons/inputs';
import { RedirectFormType } from '@/types/forms/redirect-form';

const useStyles = createStyles((theme) => ({
  groupForm: {
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
}));

const RedirectForm = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      title: '',
      url: '',
      deskripsi: '',
    } as RedirectFormType,
  });

  const handleSubmit = (values: RedirectFormType) => {
    alert(JSON.stringify(values));
  };

  return (
    <div>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <InputText
          withAsterisk
          id="title"
          label="Title"
          placeholder="Insert title..."
          className={classes.groupForm}
          {...form.getInputProps('title')}
        />
        <InputText
          withAsterisk
          id="url"
          label="url"
          placeholder="Insert url..."
          className={classes.groupForm}
          {...form.getInputProps('url')}
        />
        <InputText
          withAsterisk
          id="deskripsi"
          label="deskripsi"
          placeholder="Insert deskripsi..."
          className={classes.groupForm}
          {...form.getInputProps('deskripsi')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
};

export default RedirectForm;
