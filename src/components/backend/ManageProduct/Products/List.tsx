"use client";
import AppButton from "@/components/ui/AppButton";
import AppTable from "@/components/ui/AppTable";
import { Badge, Group, Table } from "@mantine/core";

const List = () => {
  const headers = [
    { field: "#", miw: 60, align: "left" },
    { field: "Name", miw: 400, align: "left" },
    { field: "Status", miw: 200, align: "left" },
    { field: "Options", miw: 200, align: "center" },
  ];

  return (
    <>
      <AppTable
        title="Products"
        actions={
          <Group>
            <AppButton add />
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
                <Group justify="center"></Group>
              </Table.Td>
            </Table.Tr>
          ))}
      />
    </>
  );
};

export default List;
