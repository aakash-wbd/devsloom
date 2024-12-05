import SelectBox from "@/components/ui/SelectBox";
import TextBox from "@/components/ui/TextBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Group } from "@mantine/core";

const UserForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <SelectBox label="Role" />
      <TextBox label="Name" />
      <TextBox label="Email" />
      <TextBox label="Phone" />
      <TextBox secret label="Password" />
      <TextBox label="Avatar" />
      <SelectBox label="Status" />

      <Group justify="end" mt="xs">
        <Button
          variant="outline"
          color="pink"
          leftSection={<Icon icon="ic:round-close" fontSize={20} />}
        >
          Close
        </Button>
        <Button
          color="teal"
          leftSection={<Icon icon="prime:check-circle" fontSize={20} />}
        >
          Save
        </Button>
      </Group>
    </form>
  );
};

export default UserForm;
