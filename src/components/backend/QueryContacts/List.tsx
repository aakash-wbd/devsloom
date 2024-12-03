"use client";

import ActionButton from "@/components/ui/ActionButton";
import AppTable from "@/components/ui/AppTable";
import { Badge, Group, Table } from "@mantine/core";

const headers = [
  { field: "#", miw: 60, align: "left" },
  { field: "Email", miw: 400, align: "left" },
  { field: "Status", miw: 200, align: "left" },
  { field: "Options", miw: 200, align: "center" },
];

const QueryContacts = () => {
  return (
    <AppTable
      title="Query Contacts"
      headers={headers}
      found={true}
      rows={Array(10)
        .fill(1)
        ?.map((_, i) => (
          <Table.Tr key={i}>
            <Table.Td>{i + 1}</Table.Td>
            <Table.Td>Google</Table.Td>
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
  );
};

export default QueryContacts;
