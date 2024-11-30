import { Modal } from "@mantine/core";

const AppModal = ({ title = "", open = false, close = () => {}, children }) => {
  return (
    <Modal
      opened={open}
      onClose={close}
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
