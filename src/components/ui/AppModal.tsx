import { Modal } from "@mantine/core";

type IProps = {
  title?: string;
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const AppModal: React.FC<IProps> = ({
  title,
  opened = false,
  onClose = () => {},
  children,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      size="lg"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      transitionProps={{ transition: "rotate-left" }}
    >
      {children}
    </Modal>
  );
};

export default AppModal;
