"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ActionIcon,
  Box,
  Card,
  Container,
  Grid,
  Image,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";

const Blogs = () => {
  return (
    <Box py={100}>
      <Container size="xl">
        <TextInput
          size="md"
          radius="xl"
          placeholder="Search"
          w={{ base: "100%", md: "50%" }}
          mx="auto"
          mb="xl"
          rightSection={
            <ActionIcon variant="default" size="md" radius="lg">
              <Icon icon="material-symbols:search-rounded" fontSize={18} />
            </ActionIcon>
          }
        />
        <Grid gutter="xl">
          {Array(12)
            .fill(1)
            .map((_, i) => (
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }} key={i}>
                <Card
                  withBorder
                  radius="lg"
                  component={Link}
                  href={`/blogs/${i}`}
                >
                  <Image
                    src="https://buddybee.eu/uploads/mainImage/mainImage1.png"
                    alt="image"
                    radius="md"
                    w="100%"
                    h={200}
                    mb="xl"
                  />
                  <Text
                    size="xl"
                    fz={{ base: 20, sm: 22, md: 24 }}
                    fw={600}
                    mb="xs"
                    c="gray.7"
                  >
                    Study in Europe: Where Dreams Come True
                  </Text>
                  <Text size="sm" fw={500} c="dimmed" mb="xs" lineClamp={2}>
                    You are here! So we can believe you’ve made the decision to
                    make a major life change. Thousands of people around the
                    world wish to
                  </Text>
                  <Text size="sm" fw={500} c="gray.8">
                    Last updated Apr 16,2022
                  </Text>
                </Card>
              </Grid.Col>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
