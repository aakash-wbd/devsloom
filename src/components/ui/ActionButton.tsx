import { Icon } from "@iconify/react";
import { ActionIcon, ActionIconProps, Tooltip } from "@mantine/core";

type IProps = {
  actionType: "edit" | "delete" | "view";
} & ActionIconProps;

const actionConfig = {
  edit: { label: "Edit", color: "cyan", icon: "clarity:note-edit-line" },
  delete: { label: "Delete", color: "red", icon: "ph:trash-light" },
  view: { label: "View", color: "gray", icon: "carbon:view" },
};

const ActionButton: React.FC<IProps> = ({ actionType, ...props }) => {
  const { label, color, icon } = actionConfig[actionType];

  return (
    <Tooltip label={label} withArrow>
      <ActionIcon variant="light" color={color} {...props}>
        <Icon icon={icon} />
      </ActionIcon>
    </Tooltip>
  );
};

export default ActionButton;
