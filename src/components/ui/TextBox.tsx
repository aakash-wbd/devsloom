import { NumberInput, PasswordInput, Textarea, TextInput } from "@mantine/core";

const TextBox = ({
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
  return <TextInput c="white" {...props} />;
};

export default TextBox;
