import SelectBox from "@/components/ui/SelectBox";
import TextBox from "@/components/ui/TextBox";
import { statusOptions } from "@/constants/selectOptions";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Group } from "@mantine/core";

const PageForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <TextBox label="Name" />
      <TextBox multiline label="Description" minRows={6} autosize />
      <SelectBox label="Status" data={statusOptions} />

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

export default PageForm;
