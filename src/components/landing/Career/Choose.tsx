"use client";

import { Box, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";

const Choose = () => {
  return (
    <Box py={100}>
      <Container size="xl">
        <Stack gap={100}>
          <Grid gutter={40} align="center">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Image
                src="https://placehold.co/600x400?text=Placeholder"
                alt="story"
                w="100%"
                h={350}
                radius="sm"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={2} fw={600} fz={28} mb="xs">
                Why Choose Us
              </Title>
              <Text size="sm" c="dimmed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos architecto nam aliquid officiis laudantium
                perspiciatis deleniti velit alias ducimus maxime, soluta nostrum
                libero adipisci accusantium? Velit, maiores. Earum iure,
                blanditiis facere libero enim dolorem ducimus mollitia ad
                assumenda recusandae vitae doloribus deserunt eos nemo fugiat?
                Saepe consequuntur recusandae magni odio, deserunt expedita
                dolorum possimus ut enim repellat deleniti est placeat incidunt.
                Blanditiis recusandae vitae tempora incidunt perferendis
                repellendus quibusdam placeat minus corporis necessitatibus
                sapiente, soluta saepe impedit fuga nam mollitia nemo veniam
                quaerat exercitationem ex magni. Ullam nam, voluptatibus
                voluptas sunt doloremque aliquid rem nulla, ea in iste inventore
                veniam?
              </Text>
            </Grid.Col>
          </Grid>
          <Grid gutter={40} align="center">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={2} fw={600} fz={28} mb="xs">
                How does it Work
              </Title>
              <Text size="sm" c="dimmed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos architecto nam aliquid officiis laudantium
                perspiciatis deleniti velit alias ducimus maxime, soluta nostrum
                libero adipisci accusantium? Velit, maiores. Earum iure,
                blanditiis facere libero enim dolorem ducimus mollitia ad
                assumenda recusandae vitae doloribus deserunt eos nemo fugiat?
                Saepe consequuntur recusandae magni odio, deserunt expedita
                dolorum possimus ut enim repellat deleniti est placeat incidunt.
                Blanditiis recusandae vitae tempora incidunt perferendis
                repellendus quibusdam placeat minus corporis necessitatibus
                sapiente, soluta saepe impedit fuga nam mollitia nemo veniam
                quaerat exercitationem ex magni. Ullam nam, voluptatibus
                voluptas sunt doloremque aliquid rem nulla, ea in iste inventore
                veniam?
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Image
                src="https://placehold.co/600x400?text=Placeholder"
                alt="story"
                w="100%"
                h={350}
                radius="sm"
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Choose;
