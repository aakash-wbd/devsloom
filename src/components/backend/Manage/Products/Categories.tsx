import AppModal from "@/components/ui/AppModal";
import TextBox from "@/components/ui/TextBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Divider, Group, Pill } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Categories = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button variant="outline" color="gray" onClick={open}>
        Manage Category
      </Button>
      <AppModal title="Manage Category" opened={opened} onClose={close}>
        <form className="flex flex-col gap-2">
          <TextBox label="Name" />
          <Divider />

          <Group gap="xs">
            {Array(6)
              .fill(1)
              .map((_, i) => (
                // <Button key={i} size="compact-xs" variant="light">
                //   App
                // </Button>
                <Pill withRemoveButton key={i}>App</Pill>
              ))}
          </Group>

          <Group justify="end" mt="xs">
            <Button
              variant="outline"
              color="pink"
              leftSection={<Icon icon="ic:round-close" fontSize={20} />}
            >
              Close
            </Button>
            <Button
              variant="light"
              color="pink"
              leftSection={
                <Icon icon="material-symbols:delete" fontSize={20} />
              }
            >
              Delete
            </Button>
            <Button
              color="teal"
              leftSection={<Icon icon="prime:check-circle" fontSize={20} />}
            >
              Save
            </Button>
          </Group>
        </form>
      </AppModal>
    </>
  );
};

export default Categories;
