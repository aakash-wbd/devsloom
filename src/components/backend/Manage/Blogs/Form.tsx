import SelectBox from "@/components/ui/SelectBox";
import TextBox from "@/components/ui/TextBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Group } from "@mantine/core";

const BlogForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <TextBox label="Title" />
      <TextBox multiline autosize minRows={10} label="Content" />
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

export default BlogForm;
