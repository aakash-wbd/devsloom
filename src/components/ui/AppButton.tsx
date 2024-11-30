import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, ButtonProps } from "@mantine/core";
import React from "react";

type IProps = ButtonProps & {
  add?: boolean;
  create?: boolean;
  close?: boolean;
  label?: string;
};

const AppButton: React.FC<IProps> = ({
  add = false,
  create = false,
  close = false,
  label = "Save",
  ...props
}) => {
  if (add) {
    return (
      <Button leftSection={<Icon icon="lets-icons:add-round" />} {...props}>
        Add New
      </Button>
    );
  }
  if (create) {
    return (
      <Button
        color="blue"
        type="submit"
        variant="light"
        leftSection={<Icon icon="prime:check-circle" />}
        {...props}
      >
        {label}
      </Button>
    );
  }
  if (close) {
    return (
      <Button
        color="red"
        variant="light"
        leftSection={<Icon icon="ic:round-close" />}
        {...props}
      >
        Cancel
      </Button>
    );
  }
  return (
    <Button variant="light" c="white" {...props}>
      Save
    </Button>
  );
};

export default AppButton;
