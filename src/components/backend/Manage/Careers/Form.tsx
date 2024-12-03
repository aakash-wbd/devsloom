"use client";

import TextBox from "@/components/ui/TextBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, Group, Text } from "@mantine/core";

const CareerForm = () => {
  return (
    <Card withBorder shadow="sm" w={{ base: "100%", lg: "50%" }} mx="auto">
      <Card.Section withBorder inheritPadding py="md">
        <Text>Add Job</Text>
      </Card.Section>
      <Card.Section inheritPadding py="md">
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <TextBox label="Post Name" />
          <TextBox label="Vacancy No." />
          <TextBox label="Location" />
          <TextBox multiline label="Description" />

          <div className="col-span-full">
            <Group justify="end" mt="xs">
              <Button
                color="teal"
                leftSection={<Icon icon="prime:check-circle" fontSize={20} />}
              >
                Update
              </Button>
            </Group>
          </div>
        </form>
      </Card.Section>
    </Card>
  );
};

export default CareerForm;
