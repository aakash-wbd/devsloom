import SelectBox from "@/components/ui/SelectBox";
import TextBox from "@/components/ui/TextBox";
import { statusOptions } from "@/constants/selectOptions";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Checkbox, Group } from "@mantine/core";

const ServiceForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <TextBox label="Title" />
      <TextBox label="Icon" />
      <TextBox multiline label="Content" minRows={6} autosize />
      <SelectBox label="Status" data={statusOptions} />
      <Checkbox label="Show in Homepage" />
      <div className="col-span-full">
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
      </div>
    </form>
  );
};

export default ServiceForm;
