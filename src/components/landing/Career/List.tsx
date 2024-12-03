"use client";

import Heading from "@/components/ui/Heading";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Link from "next/link";

const List = () => {
  return (
    <Box mb="xl">
      <Container size="xl">
        <Heading
          label="Opening"
          text="Ready to embark on our"
          gradientText="remarkable team journey?"
        />

        <Stack>
          {Array(10)
            .fill(1)
            .map((_, i) => (
              <Card radius="md" shadow="md" withBorder key={i}>
                <Card.Section inheritPadding p="lg">
                  <Grid align="center">
                    <Grid.Col span={{ base: 12, lg: 6 }}>
                      <Text size="lg" mb="xs">
                        UX Researcher
                      </Text>
                      <Group c="dimmed">
                        <Group>
                          <Icon
                            icon="flowbite:briefcase-outline"
                            fontSize={18}
                          />
                          <Text>Company</Text>
                        </Group>
                        <Divider orientation="vertical" />
                        <Group>
                          <Icon icon="system-uicons:location" />
                          <Text>Location</Text>
                        </Group>
                      </Group>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, lg: 3 }}>
                      <Text size="lg" mb="xs">
                        2
                      </Text>
                      <Text c="dimmed">No of vacancies</Text>
                    </Grid.Col>
                    <Grid.Col
                      span={{ base: 12, lg: 3 }}
                      ta={{ base: "start", lg: "end" }}
                    >
                      <Button
                        size="xs"
                        mb="xs"
                        variant="light"
                        component={Link}
                        href={`/career/${i}`}
                      >
                        Apply Now
                      </Button>
                      <Text c="dimmed"> Deadline: 01 Jan, 2030</Text>
                    </Grid.Col>
                  </Grid>
                </Card.Section>
              </Card>
            ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default List;
