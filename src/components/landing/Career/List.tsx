"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Text,
  Title,
} from "@mantine/core";

const List = () => {
  return (
    <Box>
      <Container>
        <Title
          order={2}
          ta="center"
          maw={{ base: "100%", md: "70%" }}
          fz={{ base: 24, xs: 32, md: 48 }}
          mx="auto"
          mb="xl"
        >
          Are You Ready To{" "}
          <span className="bg-gradient-to-r from-[#FF8811] via-[#ED27FF] to-[#7F50FB] bg-clip-text text-transparent">
            Join Our Team?
          </span>
        </Title>

        {Array(10)
          .fill(1)
          .map((_, i) => (
            <Card radius="md" shadow="md" withBorder key={i} mb="xl">
              <Card.Section inheritPadding p="lg">
                <Grid align="center">
                  <Grid.Col span={6}>
                    <Text size="lg" mb="xs">
                      UX Researcher
                    </Text>
                    <Group c="dimmed">
                      <Group>
                        <Icon icon="flowbite:briefcase-outline" fontSize={18} />
                        <Text>Company</Text>
                      </Group>
                      <Divider orientation="vertical" />
                      <Group>
                        <Icon icon="system-uicons:location" />
                        <Text>Location</Text>
                      </Group>
                    </Group>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Text size="lg" mb="xs">
                      2
                    </Text>
                    <Text c="dimmed">No of vacancies</Text>
                  </Grid.Col>
                  <Grid.Col span={3} ta="end">
                    <Button size="xs" mb="xs" variant="light">
                      Apply Now
                    </Button>
                    <Text c="dimmed"> Deadline: 01 Jan, 2030</Text>
                  </Grid.Col>
                </Grid>
              </Card.Section>
            </Card>
          ))}
      </Container>
    </Box>
  );
};

export default List;
