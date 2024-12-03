import {
  MultiSelect,
  MultiSelectProps,
  Select,
  SelectProps,
} from "@mantine/core";

type IProps = {
  multiple?: boolean;
} & SelectProps &
  MultiSelectProps;

const SelectBox: React.FC<IProps> = ({ multiple = false, ...props }) => {
  if (multiple) {
    return <MultiSelect {...props} />;
  }
  return <Select {...props} />;
};

export default SelectBox;
