import { MultiSelect, Select } from "@mantine/core";

const SelectBox = ({ multiple = false, ...props }) => {
  if (multiple) {
    return <MultiSelect {...props} />;
  }
  return <Select {...props} />;
};

export default SelectBox;
