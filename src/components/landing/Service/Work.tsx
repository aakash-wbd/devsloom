"use client";

import { services } from "@/constants/services";
import { Box, Card, Container, Grid, Group, Text } from "@mantine/core";

const Work = () => {
  return (
    <Box py="xl">
      <Container size="xl">
        <Grid gutter={40}>
          {services?.map((item, i) => (
            <Grid.Col span={{ base: 12, xs: 6 }} key={i}>
              <Card
                withBorder
                p="xl"
                radius="lg"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={200}
              >
                <Group>
                  <lord-icon
                    src={item?.icon}
                    trigger="loop"
                    colors="primary:#121212,secondary:#00ff00"
                    style={{ width: "60px", height: "60px" }}
                    className="group-hover:!pointer-events-auto"
                  />
                  <Text size="xl" fw={600}>
                    {item?.label}
                  </Text>
                </Group>
                <Text size="sm" ta="justify" c="dimmed">
                  {item?.content?.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
