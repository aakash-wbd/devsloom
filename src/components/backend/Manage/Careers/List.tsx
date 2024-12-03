"use client";

import ActionButton from "@/components/ui/ActionButton";
import AppTable from "@/components/ui/AppTable";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Group, Table } from "@mantine/core";
import { useRouter } from "next/navigation";

const headers = [
  { field: "#", miw: 60, align: "left" },
  { field: "Post Name", miw: 400, align: "left" },
  { field: "Vacancy No.", miw: 400, align: "left" },
  { field: "Deadline", miw: 400, align: "left" },
  { field: "Options", miw: 200, align: "center" },
];

const Careers = () => {
  const router = useRouter();

  return (
    <AppTable
      title="Careers"
      actions={
        <Group>
          <Button
            color="teal"
            leftSection={<Icon icon="lets-icons:add-round" fontSize={20} />}
            onClick={() => router.push("/manage/careers/create")}
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
            <Table.Td>UI/UX Designer</Table.Td>
            <Table.Td>2</Table.Td>
            <Table.Td>31-12-2024</Table.Td>
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

export default Careers;
