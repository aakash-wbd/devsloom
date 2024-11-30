import {
  NumberInput,
  NumberInputProps,
  PasswordInput,
  PasswordInputProps,
  Textarea,
  TextareaProps,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import React from "react";

type TextBoxProps = {
  multiline?: boolean;
  number?: boolean;
  secret?: boolean;
} & TextInputProps &
  TextareaProps &
  NumberInputProps &
  PasswordInputProps;

const TextBox: React.FC<TextBoxProps> = ({
  multiline = false,
  number = false,
  secret = false,
  ...props
}) => {
  if (multiline) {
    return <Textarea {...props} />;
  }
  if (number) {
    return <NumberInput {...props} />;
  }
  if (secret) {
    return <PasswordInput {...props} />;
  }
  return <TextInput {...props} />;
};

export default TextBox;
