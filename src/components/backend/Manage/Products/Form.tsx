import SelectBox from "@/components/ui/SelectBox";
import TextBox from "@/components/ui/TextBox";
import { statusOptions } from "@/constants/selectOptions";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Group } from "@mantine/core";

const ProductForm = () => {
  return (
    <form className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div className="col-span-full">
        <TextBox label="Name" />
      </div>
      <div className="col-span-full">
        <TextBox label="Short Description" />
      </div>
      <div className="col-span-full">
        <TextBox multiline label="Description" minRows={6} autosize />
      </div>
      <SelectBox label="Category" />
      <TextBox label="Price" />
      <TextBox label="Rating" />
      <TextBox label="View Count" />
      <SelectBox label="Status" data={statusOptions} />
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

export default ProductForm;
