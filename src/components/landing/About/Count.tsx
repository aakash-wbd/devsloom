"use client";

import { Anchor, Box, Card, Container, Grid, Text } from "@mantine/core";

const Count = () => {
  return (
    <Box py={100} bg="#F6F9FC">
      <Container size="lg">
        <Grid>
          <Grid.Col span={{ base: 12, sm: 3 }}>
            <Card ta="center">
              <Box w={100} h={100} mx="auto">
                <lord-icon
                  src="https://cdn.lordicon.com/tdrtiskw.json"
                  trigger="hover"
                  colors="primary:#121212,secondary:#00ff00"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Text size="md" fw={600} fz={18}>
                12 Global Offices
              </Text>
              <Anchor
                href="https://www.facebook.com"
                underline="never"
                size="sm"
                c="dimmed"
              >
                Learn More
              </Anchor>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 3 }}>
            <Card ta="center">
              <Box w={100} h={100} mx="auto">
                <lord-icon
                  src="https://cdn.lordicon.com/tdrtiskw.json"
                  trigger="hover"
                  colors="primary:#121212,secondary:#00ff00"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Text size="md" fw={600} fz={18}>
                10+ Employees
              </Text>
              <Anchor
                href="https://www.facebook.com"
                underline="never"
                size="sm"
                c="dimmed"
              >
                Learn More
              </Anchor>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 3 }}>
            <Card ta="center">
              <Box w={100} h={100} mx="auto">
                <lord-icon
                  src="https://cdn.lordicon.com/tdrtiskw.json"
                  trigger="hover"
                  colors="primary:#121212,secondary:#00ff00"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Text size="md" fw={600} fz={18}>
                10+ Employees
              </Text>
              <Anchor
                href="https://www.facebook.com"
                underline="never"
                size="sm"
                c="dimmed"
              >
                Learn More
              </Anchor>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 3 }}>
            <Card ta="center">
              <Box w={100} h={100} mx="auto">
                <lord-icon
                  src="https://cdn.lordicon.com/tdrtiskw.json"
                  trigger="hover"
                  colors="primary:#121212,secondary:#00ff00"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Text size="md" fw={600} fz={18}>
                10+ Employees
              </Text>
              <Anchor
                href="https://www.facebook.com"
                underline="never"
                size="sm"
                c="dimmed"
              >
                Learn More
              </Anchor>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Count;
