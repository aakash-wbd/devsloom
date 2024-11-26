"use client";
import Heading from "@/components/ui/Heading";
import { images } from "@/constants/images";
import { Box, Card, Center, Container, Grid, Image, Text } from "@mantine/core";

const RenderCard: React.FC<{
  bg?: string;
  label?: string;
  title?: string;
  description?: string;
}> = ({ bg, label, title, description }) => {
  return (
    <Card
      bg={bg}
      radius="lg"
      h={{ base: 200, xs: 250 }}
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <Center w="100%" h="100%">
        <Box c="#17313b">
          <Text fz={{ base: 48, md: 64 }} fw={700} className="!leading-none">
            {label}
          </Text>
          <Text fz={{ base: 20, md: 22 }} fw={600}>
            {title}
          </Text>
          <Text fz={{ base: 16, md: 18 }} fw={500}>
            {description}
          </Text>
        </Box>
      </Center>
    </Card>
  );
};
const Location = () => {
  return (
    <Box py={100}>
      <Container size="xl">
        <Heading
          label="Our Office"
          text="Our office welcomes you"
          gradientText="—visit us and explore!"
        />

        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Grid>
              <Grid.Col span={6}>
                <Box h={{ base: 200, xs: 250 }} pos="relative">
                  <Image
                    w={{ base: 240, xs: 280, lg: 350 }}
                    h={{ base: 240, xs: 280, lg: 350 }}
                    bottom={-16}
                    fit="contain"
                    pos="absolute"
                    src={images.laptop.src}
                    alt="image"
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                <RenderCard
                  bg="#BFD5DB"
                  label="17"
                  title="Years"
                  description="Innovative in Development"
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <RenderCard
                  bg="#ACCDF4"
                  label="17"
                  title="Years"
                  description="Innovative in Development"
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <RenderCard
                  bg="#C8E38D"
                  label="17"
                  title="Years"
                  description="Innovative in Development"
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Image
              w="100%"
              h={500}
              src={images.map.src}
              data-aos="fade-down"
              data-aos-delay={200}
              alt="image"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Location;
