"use client";

import ActionButton from "@/components/ui/ActionButton";
import AppTable from "@/components/ui/AppTable";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Badge, Button, Group, Table } from "@mantine/core";

const headers = [
  { field: "#", miw: 60, align: "left" },
  { field: "Name", miw: 400, align: "left" },
  { field: "Role", miw: 400, align: "left" },
  { field: "Status", miw: 200, align: "left" },
  { field: "Options", miw: 200, align: "center" },
];

const Roles = () => {
  return (
    <>
      <AppTable
        title="Roles"
        actions={
          <Group>
            <Button
              color="teal"
              leftSection={<Icon icon="lets-icons:add-round" fontSize={20} />}
            //   onClick={open}
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
              <Table.Td>John Doe</Table.Td>
              <Table.Td>Super Admin</Table.Td>
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

export default Roles;
