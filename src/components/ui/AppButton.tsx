import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, ButtonProps } from "@mantine/core";
import React from "react";

// Define custom props
type AppButtonProps = {
  actionType: "add" | "create" | "close";
} & Omit<ButtonProps, "color" | "variant">; // Omit color and variant to use custom ones

// Button configuration
const buttonConfig = {
  add: {
    color: "primary",
    icon: "lets-icons:add-round",
    label: "Add New",
    variant: "filled",
  },
  create: {
    color: "blue",
    icon: "prime:check-circle",
    label: "Save",
    variant: "light",
  },
  close: {
    color: "red",
    icon: "ic:round-close",
    label: "Cancel",
    variant: "outline",
  },
};

// Functional component
const AppButton: React.FC<AppButtonProps> = ({ actionType, ...props }) => {
  const { color, icon, label, variant } = buttonConfig[actionType];

  return (
    <Button
      color={color}
      variant={variant}
      leftSection={icon && <Icon icon={icon} />}
      size="xs"
      {...props} // Spread the remaining props, including onClick
    >
      {label}
    </Button>
  );
};

export default AppButton;
