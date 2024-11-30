"use client";

import ActionButton from "@/components/ui/ActionButton";
import AppModal from "@/components/ui/AppModal";
import AppTable from "@/components/ui/AppTable";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Badge, Button, Group, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ProductForm from "./Form";

const headers = [
  { field: "#", miw: 60, align: "left" },
  { field: "Name", miw: 400, align: "left" },
  { field: "Status", miw: 200, align: "left" },
  { field: "Options", miw: 200, align: "center" },
];

const Products = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <AppModal title="Add Product" opened={opened} onClose={close}>
        <ProductForm />
      </AppModal>
      <AppTable
        title="Products"
        actions={
          <Group>
            <Button
              color="teal"
              leftSection={<Icon icon="lets-icons:add-round" fontSize={20} />}
              onClick={open}
            >
              Add New
            </Button>
          </Group>
        }
        headers={headers}
        found={true}
        rows={Array(10)
          .fill(1)
          ?.map((_, i) => (
            <Table.Tr key={i}>
              <Table.Td>{i + 1}</Table.Td>
              <Table.Td>CRM</Table.Td>
              <Table.Td>
                <Badge radius="xs" color="green">
                  Active
                </Badge>
              </Table.Td>
              <Table.Td>
                <Group justify="center">
                  <ActionButton actionType="edit" />
                  <ActionButton actionType="delete" />
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
      />
    </>
  );
};

export default Products;
