import { images } from "@/constants/images";
import { Card, Group, Image, Skeleton, Table, Text } from "@mantine/core";
import React from "react";

type HeaderProps = {
  field: string;
  miw?: number;
  align?: string;
};

type AppTableProps = {
  title?: string;
  headers?: HeaderProps[];
  actions?: React.ReactNode;
  found?: boolean;
  loading?: boolean;
  rows?: React.ReactNode;
  content?: React.ReactNode;
};

const AppTable: React.FC<AppTableProps> = ({
  title = "",
  headers = [],
  actions,
  found = false,
  loading = false,
  rows,
  content,
}) => {
  return (
    <Card p="md" shadow="sm">
      {/* Header Section */}
      <Card.Section inheritPadding py="md" withBorder>
        <Group justify="space-between">
          <Text size="xl" fw={600}>
            {title}
          </Text>
          {actions}
        </Group>
      </Card.Section>

      {/* Table Section */}
      {headers.length > 0 && (
        <Card.Section withBorder>
          <Table.ScrollContainer minWidth={500}>
            <Table
              striped
              highlightOnHover
              horizontalSpacing="lg"
              verticalSpacing="sm"
            >
              <Table.Thead>
                <Table.Tr>
                  {headers.map((item, i) => (
                    <Table.Td
                      fw={600}
                      key={i}
                      align={
                        item.align as
                          | "center"
                          | "left"
                          | "right"
                          | "justify"
                          | "char"
                          | undefined
                      }
                      miw={item.miw}
                    >
                      {item.field}
                    </Table.Td>
                  ))}
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {/* Loading Skeleton */}
                {loading ? (
                  Array.from({ length: 10 }).map((_, i) => (
                    <Table.Tr key={i}>
                      <Table.Td colSpan={headers.length}>
                        <Skeleton height={30} />
                      </Table.Td>
                    </Table.Tr>
                  ))
                ) : found ? (
                  rows
                ) : (
                  <Table.Tr>
                    <Table.Td colSpan={headers.length}>
                      <Image
                        src={images.no_data.src}
                        alt="No data available"
                        width="calc(100vh - 160px)"
                        mx="auto"
                      />
                    </Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Card.Section>
      )}

      {/* Optional Content */}
      {content}
    </Card>
  );
};

export default AppTable;
